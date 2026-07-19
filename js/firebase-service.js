// ===== TYPE & EARN — FIRESTORE SERVICE LAYER =====
// Yeh file saare Firestore read/write functions ek jagah rakhti hai.
// Dono projects (user site + admin panel) isi file ko copy karke use karte hain,
// taaki data structure/field-names hamesha match rahe.
//
// Collections used:
//   users        -> { name, mobile, wallet, tests, bestWpm, plan, status, joined }
//   contests     -> { name, status, prize, entry, duration, lang, participants, maxParticipants, createdBy, startTime }
//   results      -> { contestId, contestName, userId, userName, rank, wpm, accuracy, correct, wrong, time, prize, date }
//   paragraphs   -> { title, lang, difficulty, words, category, contests, active, text }
//   payouts      -> { userId, userName, type, amount, contestName, status, method, date }
//   transactions -> { userId, type, amount, note, date }   (wallet history)

const DB = {

  // ================= USERS =================
  // Name+Mobile based "login" — no password/OTP.
  async getOrCreateUser(name, mobile) {
    mobile = String(mobile).replace(/\D/g, '').slice(-10);
    const snap = await db.collection('users').where('mobile', '==', mobile).limit(1).get();
    if (!snap.empty) {
      const doc = snap.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    const newUser = {
      name, mobile,
      wallet: 50,           // welcome bonus
      tests: 0, bestWpm: 0,
      plan: 'Free', status: 'active',
      joined: firebase.firestore.FieldValue.serverTimestamp()
    };
    const ref = await db.collection('users').add(newUser);
    await DB.addTransaction(ref.id, 'credit', 50, 'Welcome Bonus');
    return { id: ref.id, ...newUser };
  },

  // Google Sign-In based "login" — REAL verified identity (Google khud verify
  // karta hai ki account asli hai). Isse fake/wrong mobile number wala problem
  // nahi hota. Mobile number abhi bhi baad me maang sakte hain (sirf UPI
  // withdrawal destination ke liye), par login identity ab Google se aati hai.
  async getOrCreateUserByGoogle(googleUser) {
    const snap = await db.collection('users').where('googleUid', '==', googleUser.uid).limit(1).get();
    if (!snap.empty) {
      const doc = snap.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    const newUser = {
      name: googleUser.displayName || 'User',
      email: googleUser.email || '',
      photoURL: googleUser.photoURL || '',
      googleUid: googleUser.uid,
      mobile: '',           // baad me collect hoga (withdrawal ke liye)
      wallet: 50,            // welcome bonus
      tests: 0, bestWpm: 0,
      plan: 'Free', status: 'active',
      joined: firebase.firestore.FieldValue.serverTimestamp()
    };
    const ref = await db.collection('users').add(newUser);
    await DB.addTransaction(ref.id, 'credit', 50, 'Welcome Bonus');
    return { id: ref.id, ...newUser };
  },

  async getUser(userId) {
    const doc = await db.collection('users').doc(userId).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  listenUser(userId, cb) {
    return db.collection('users').doc(userId).onSnapshot(doc => {
      if (doc.exists) cb({ id: doc.id, ...doc.data() });
    });
  },

  async getAllUsers() {
    const snap = await db.collection('users').orderBy('joined', 'desc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  listenUsers(cb) {
    return db.collection('users').orderBy('joined', 'desc').onSnapshot(snap => {
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  },

  async updateUser(userId, data) {
    return db.collection('users').doc(userId).update(data);
  },

  // ================= WALLET =================
  async debitWallet(userId, amount, note) {
    const ref = db.collection('users').doc(userId);
    await db.runTransaction(async t => {
      const doc = await t.get(ref);
      const bal = doc.data().wallet || 0;
      if (bal < amount) throw new Error('Insufficient wallet balance');
      t.update(ref, { wallet: +(bal - amount).toFixed(2) });
    });
    await DB.addTransaction(userId, 'debit', amount, note);
  },

  async creditWallet(userId, amount, note) {
    const ref = db.collection('users').doc(userId);
    await db.runTransaction(async t => {
      const doc = await t.get(ref);
      const bal = doc.data().wallet || 0;
      t.update(ref, { wallet: +(bal + amount).toFixed(2) });
    });
    await DB.addTransaction(userId, 'credit', amount, note);
  },

  async addTransaction(userId, type, amount, note) {
    return db.collection('transactions').add({
      userId, type, amount, note,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async getTransactions(userId) {
    // NOTE: agar Firestore console me "index required" error/link aaye,
    // us link pe click karke index ek baar create kar dena (auto form khulega).
    const snap = await db.collection('transactions')
      .where('userId', '==', userId).orderBy('date', 'desc').limit(50).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  // ================= CONTESTS =================
  async getContests() {
    const snap = await db.collection('contests').orderBy('startTime', 'desc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  listenContests(cb) {
    return db.collection('contests').orderBy('startTime', 'desc').onSnapshot(snap => {
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  },

  async getContest(contestId) {
    const doc = await db.collection('contests').doc(contestId).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async addContest(data) { return db.collection('contests').add(data); },
  async updateContest(contestId, data) { return db.collection('contests').doc(contestId).update(data); },
  async deleteContest(contestId) { return db.collection('contests').doc(contestId).delete(); },

  async joinContest(contestId, userId) {
    const ref = db.collection('contests').doc(contestId);
    await db.runTransaction(async t => {
      const doc = await t.get(ref);
      const d = doc.data();
      if ((d.participants || 0) >= d.maxParticipants) throw new Error('Contest full');
      t.update(ref, { participants: (d.participants || 0) + 1 });
    });
  },

  // ================= RESULTS =================
  async submitResult(result) {
    return db.collection('results').add({
      ...result,
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async getResultsByUser(userId) {
    const snap = await db.collection('results')
      .where('userId', '==', userId).orderBy('date', 'desc').limit(20).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async getResultsByContest(contestId) {
    const snap = await db.collection('results')
      .where('contestId', '==', contestId).orderBy('wpm', 'desc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async getAllResults() {
    const snap = await db.collection('results').orderBy('date', 'desc').limit(200).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  listenResults(cb) {
    return db.collection('results').orderBy('date', 'desc').limit(200).onSnapshot(snap => {
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  },

  async getLeaderboard(limitCount = 20) {
    const snap = await db.collection('results').orderBy('wpm', 'desc').limit(limitCount).get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  // ================= PARAGRAPHS =================
  async getParagraphs(onlyActive = true) {
    let q = db.collection('paragraphs');
    if (onlyActive) q = q.where('active', '==', true);
    const snap = await q.get();
    const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    // Stable order zaroori hai: isi order me Test 1, Test 2, Test 3... assign hote
    // hain (exam-test.html me). Jo paragraph pehle add hua wahi Test 1 banega.
    list.sort((a, b) => {
      const ta = (a.createdAt && a.createdAt.toMillis) ? a.createdAt.toMillis() : 0;
      const tb = (b.createdAt && b.createdAt.toMillis) ? b.createdAt.toMillis() : 0;
      return ta - tb;
    });
    return list;
  },

  listenParagraphs(cb) {
    return db.collection('paragraphs').onSnapshot(snap => {
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  },

  async addParagraph(data) { return db.collection('paragraphs').add({ ...data, createdAt: firebase.firestore.FieldValue.serverTimestamp() }); },
  async updateParagraph(id, data) { return db.collection('paragraphs').doc(id).update(data); },
  async deleteParagraph(id) { return db.collection('paragraphs').doc(id).delete(); },

  // ================= PAYOUTS (Withdrawals) =================
  async requestWithdraw(userId, userName, amount, destination) {
    return db.collection('payouts').add({
      userId, userName, type: 'withdraw', amount,
      contestName: '-', status: 'pending', method: destination, // 'method' field = user ka UPI ID/bank account (jaha admin ko paisa bhejna hai)
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async getPayoutsByUser(userId) {
    const snap = await db.collection('payouts')
      .where('userId', '==', userId).orderBy('date', 'desc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  async getAllPayouts() {
    const snap = await db.collection('payouts').orderBy('date', 'desc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  listenPayouts(cb) {
    return db.collection('payouts').orderBy('date', 'desc').onSnapshot(snap => {
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  },

  async approvePayout(payoutId, userId, amount) {
    // Payout approve karne par wallet se paisa already kata hua maana jata hai (withdraw request ke time),
    // isliye yaha sirf status update hota hai.
    return db.collection('payouts').doc(payoutId).update({ status: 'paid' });
  },

  async rejectPayout(payoutId, userId, amount) {
    // Reject hone par paisa wapas wallet me credit karo
    await db.collection('payouts').doc(payoutId).update({ status: 'rejected' });
    await DB.creditWallet(userId, amount, 'Withdrawal Rejected - Refund');
  },

  // ================= WALLET TOP-UPS (UPI QR — manual, admin-verified) =================
  // User QR scan karke paisa bhejta hai, phir UTR/reference number ke saath request
  // bhejta hai. Wallet turant credit NAHI hota — admin Finance page se verify karke
  // approve karta hai, tabhi credit hota hai. Isse client-side fake-credit wala
  // security risk nahi rehta.
  async requestTopup(userId, userName, amount, utr) {
    return db.collection('topups').add({
      userId, userName, amount, utr: utr || '',
      status: 'pending',
      date: firebase.firestore.FieldValue.serverTimestamp()
    });
  },

  async getTopupsByUser(userId) {
    const snap = await db.collection('topups')
      .where('userId', '==', userId).orderBy('date', 'desc').get();
    return snap.docs.map(d => ({ id: d.id, ...d.data() }));
  },

  listenTopups(cb) {
    return db.collection('topups').orderBy('date', 'desc').onSnapshot(snap => {
      cb(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  },

  async approveTopup(topupId, userId, amount) {
    await db.collection('topups').doc(topupId).update({ status: 'approved' });
    await DB.creditWallet(userId, amount, 'Wallet Top-up (UPI)');
  },

  async rejectTopup(topupId) {
    return db.collection('topups').doc(topupId).update({ status: 'rejected' });
  },

  // ================= SETTINGS =================
  async getSettings() {
    const doc = await db.collection('settings').doc('global').get();
    return doc.exists ? doc.data() : {};
  },

  // ================= ADMIN AUTH (Firebase Authentication) =================
  adminLogin(email, pass) { return auth.signInWithEmailAndPassword(email, pass); },
  adminLogout() { return auth.signOut(); },
  onAdminAuthChange(cb) { return auth.onAuthStateChanged(cb); }
};
