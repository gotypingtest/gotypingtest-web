// ===== TYPE & EARN - MAIN JS =====

// ===== AUTH STATE (Firestore backed — Name + Mobile identify, NO password/OTP) =====
// Jaisa decide hua: login/registration me OTP nahi hai. User apna naam+mobile bharta
// hai, wahi uski permanent ID ban jaati hai (dobara same mobile daalne par same
// account mil jaata hai). localStorage sirf "kaunsa userId hai" yaad rakhne ke liye
// use hota hai — asli data (wallet, tests, etc.) hamesha Firestore se aata hai.
const Auth = {
  user: null, // current logged-in user's full Firestore doc (cached after init())
  isLoggedIn: () => !!localStorage.getItem('te_userid'),
  getUser: () => Auth.user,

  // Call this once on every page (awaited) before reading Auth.getUser()
  async init() {
    const id = localStorage.getItem('te_userid');
    if (!id) { Auth.user = null; return null; }
    try {
      const u = await DB.getUser(id);
      if (!u) { localStorage.removeItem('te_userid'); Auth.user = null; return null; }
      Auth.user = u;
      return u;
    } catch (e) {
      console.error('Auth.init failed:', e);
      return null;
    }
  },

  // Name+Mobile "login" — creates user if new, fetches if returning
  async loginOrRegister(name, mobile) {
    const u = await DB.getOrCreateUser(name, mobile);
    localStorage.setItem('te_userid', u.id);
    Auth.user = u;
    return u;
  },

  // Google Sign-In — REAL verified identity (recommended). Solves the
  // "koi bhi galat mobile daal ke access le sakta hai" problem, kyunki
  // Google khud verify karta hai ki account asli hai.
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await auth.signInWithPopup(provider);
    const u = await DB.getOrCreateUserByGoogle(result.user);
    localStorage.setItem('te_userid', u.id);
    Auth.user = u;
    return u;
  },

  logout: () => {
    localStorage.removeItem('te_userid');
    Auth.user = null;
    // Agar Google se login tha to Firebase Auth session bhi clear kar do
    if (auth.currentUser) auth.signOut().catch(()=>{});
    window.location.href = 'index.html';
  }
};

// ===== WALLET (Firestore backed) =====
const Wallet = {
  getBalance: () => Auth.user ? (Auth.user.wallet || 0) : 0,

  async refresh() {
    if (!Auth.user) return 0;
    Auth.user = await DB.getUser(Auth.user.id);
    return Auth.user.wallet;
  },

  async debit(amt, note) {
    if (!Auth.user || (Auth.user.wallet || 0) < amt) return false;
    await DB.debitWallet(Auth.user.id, amt, note);
    Auth.user.wallet = +(Auth.user.wallet - amt).toFixed(2);
    return true;
  },

  async credit(amt, note) {
    if (!Auth.user) return;
    await DB.creditWallet(Auth.user.id, amt, note);
    Auth.user.wallet = +((Auth.user.wallet || 0) + amt).toFixed(2);
  },

  async getTxns() {
    if (!Auth.user) return [];
    return DB.getTransactions(Auth.user.id);
  }
};

// ===== CONTESTS / PARAGRAPHS / LEADERBOARD =====
// Yeh ab hardcoded arrays nahi hain — Firestore se aate hain.
// Use: `const contests = await DB.getContests();`
//      `const paras = await DB.getParagraphs();`
//      `const board = await DB.getLeaderboard();`
// (Dekho firebase-service.js — sab functions wahin defined hain)

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const colors = { success: '#10B981', danger: '#EF4444', warning: '#F59E0B', info: '#3B82F6' };
  const icons = { success: '✓', danger: '✕', warning: '⚠', info: 'ℹ' };
  const c = document.getElementById('toast-container') || createToastContainer();
  const t = document.createElement('div');
  t.style.cssText = `background:#111827;border:1px solid ${colors[type]};border-left:3px solid ${colors[type]};
    border-radius:8px;padding:12px 16px;margin-bottom:8px;display:flex;align-items:center;gap:10px;
    font-family:'Outfit',sans-serif;font-size:0.9rem;color:#F9FAFB;
    animation:slideIn 0.3s ease;min-width:260px;box-shadow:0 4px 12px rgba(0,0,0,0.4);`;
  t.innerHTML = `<span style="color:${colors[type]};font-weight:700">${icons[type]}</span><span>${msg}</span>`;
  c.appendChild(t);
  setTimeout(() => { t.style.animation = 'fadeOut 0.3s ease'; setTimeout(() => t.remove(), 300); }, 3000);
}

function createToastContainer() {
  const c = document.createElement('div');
  c.id = 'toast-container';
  c.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;';
  const style = document.createElement('style');
  style.textContent = '@keyframes slideIn{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:translateX(0)}} @keyframes fadeOut{from{opacity:1}to{opacity:0}}';
  document.head.appendChild(style);
  document.body.appendChild(c);
  return c;
}

// ===== FORMAT TIME =====
function formatTime(ms) {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function timeUntil(ts) {
  const diff = ts - Date.now();
  if (diff <= 0) return 'Starting now';
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

// ===== AVATAR COLOR =====
function avatarColor(name) {
  const colors = ['#00C07A','#7C3AED','#3B82F6','#F59E0B','#EF4444','#10B981','#EC4899'];
  let h = 0;
  for (let c of name) h = ((h << 5) - h) + c.charCodeAt(0);
  return colors[Math.abs(h) % colors.length];
}

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

// ===== NAV AUTH UPDATE =====
function updateNavForAuth() {
  const user = Auth.getUser();
  const navAuth = document.getElementById('nav-auth');
  const navUser = document.getElementById('nav-user');

  // Contests aur Leaderboard menu — sirf logged-in users ko dikhna chahiye
  ['nav-li-contests', 'nav-li-leaderboard'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = user ? '' : 'none';
  });

  if (!navAuth || !navUser) return;
  if (user) {
    navAuth.style.display = 'none';
    navUser.style.display = 'flex';
    const initEl = document.getElementById('nav-initials');
    const nameEl = document.getElementById('nav-name');
    if (initEl) { initEl.textContent = initials(user.name); initEl.style.background = avatarColor(user.name); }
    if (nameEl) nameEl.textContent = user.name.split(' ')[0];
  } else {
    navAuth.style.display = 'flex';
    navUser.style.display = 'none';
  }
}

// ===== TYPING ENGINE =====
class TypingEngine {
  constructor(paragraph, onUpdate, onComplete) {
    this.paragraph = paragraph;
    this.onUpdate = onUpdate;
    this.onComplete = onComplete;
    this.typed = '';
    this.startTime = null;
    this.errors = 0;
    this.correct = 0;
    this.wrong = 0;
    this.started = false;
  }

  processInput(value) {
    if (!this.started) {
      this.started = true;
      this.startTime = Date.now();
    }
    const prev = this.typed;
    this.typed = value;

    let errors = 0, correct = 0;
    for (let i = 0; i < this.typed.length; i++) {
      if (this.typed[i] === this.paragraph[i]) correct++;
      else errors++;
    }
    this.correct = correct;
    this.wrong = errors;

    const elapsed = (Date.now() - this.startTime) / 60000;
    const wpm = elapsed > 0 ? Math.round((correct / 5) / elapsed) : 0;
    const accuracy = this.typed.length > 0 ? Math.round((correct / this.typed.length) * 100) : 100;

    this.onUpdate({ wpm, accuracy, errors, correct, wrong: errors, progress: (this.typed.length / this.paragraph.length) * 100 });

    if (this.typed.length >= this.paragraph.length) {
      this.onComplete({ wpm, accuracy, errors, correct, wrong: errors, time: (Date.now() - this.startTime) / 1000 });
    }
  }

  getRenderedHTML() {
    let html = '';
    for (let i = 0; i < this.paragraph.length; i++) {
      if (i < this.typed.length) {
        if (this.typed[i] === this.paragraph[i]) html += `<span class="char-correct">${this.paragraph[i]}</span>`;
        else html += `<span class="char-wrong">${this.paragraph[i]}</span>`;
      } else if (i === this.typed.length) {
        html += `<span class="char-current">${this.paragraph[i]}</span>`;
      } else {
        html += `<span class="char-pending">${this.paragraph[i]}</span>`;
      }
    }
    return html;
  }
}

// ===== RAZORPAY MOCK =====
function openRazorpay(amount, onSuccess) {
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `
    <div style="background:#111827;border:1px solid rgba(255,255,255,0.1);border-radius:16px;padding:28px;width:320px;font-family:'Outfit',sans-serif;color:#F9FAFB;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
        <div style="width:36px;height:36px;background:#3395FF;border-radius:6px;display:flex;align-items:center;justify-content:center;color:white;font-weight:800;font-size:0.8rem;">Rz</div>
        <div><div style="font-weight:700">Razorpay (Test Mode)</div><div style="font-size:0.75rem;color:#9CA3AF">Secure Payment</div></div>
      </div>
      <div style="background:#1a2234;border-radius:8px;padding:14px;margin-bottom:20px;text-align:center;">
        <div style="color:#9CA3AF;font-size:0.8rem;">Amount to Pay</div>
        <div style="font-size:1.8rem;font-weight:800;color:#00C07A;">₹${amount}</div>
      </div>
      <input placeholder="Card Number: 4111 1111 1111 1111" style="background:#1a2234;border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#F9FAFB;padding:10px 12px;width:100%;margin-bottom:10px;font-family:'Outfit',sans-serif;font-size:0.88rem;" />
      <div style="display:flex;gap:8px;margin-bottom:16px;">
        <input placeholder="MM/YY" style="background:#1a2234;border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#F9FAFB;padding:10px 12px;width:50%;font-family:'Outfit',sans-serif;font-size:0.88rem;" />
        <input placeholder="CVV" style="background:#1a2234;border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:#F9FAFB;padding:10px 12px;width:50%;font-family:'Outfit',sans-serif;font-size:0.88rem;" />
      </div>
      <button onclick="this.closest('div[style*=fixed]').simulatePay()" style="background:#00C07A;color:#0A0E1A;border:none;border-radius:8px;padding:12px;width:100%;font-weight:700;font-size:1rem;cursor:pointer;font-family:'Outfit',sans-serif;">Pay ₹${amount}</button>
      <button onclick="this.closest('div[style*=fixed]').remove()" style="background:transparent;color:#9CA3AF;border:none;width:100%;padding:10px;cursor:pointer;font-size:0.85rem;font-family:'Outfit',sans-serif;margin-top:4px;">Cancel</button>
    </div>`;
  modal.simulatePay = () => {
    modal.querySelector('button').textContent = 'Processing...';
    setTimeout(() => { modal.remove(); onSuccess(); }, 1500);
  };
  document.body.appendChild(modal);
}

document.addEventListener('DOMContentLoaded', async () => {
  await Auth.init();          // fetch fresh user data from Firestore (if logged in)
  updateNavForAuth();         // then paint nav balance / avatar
});
