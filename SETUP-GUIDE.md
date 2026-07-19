# Type & Earn — Firebase Setup Guide

Yeh guide follow karke aap dono projects (`typearn` user site + `typearn-admin` admin
panel) ko apne Firebase project se connect kar sakte ho. Poora process ek baar
karna hai, ~15-20 minute lagenge.

---

## Step 1 — Firebase Project Banao

1. https://console.firebase.google.com par jao, Google account se login karo.
2. **Add Project** → naam do (e.g. "type-and-earn") → continue → Google Analytics
   skip kar sakte ho (optional) → **Create Project**.

## Step 2 — Firestore Database Enable Karo

1. Left sidebar me **Build → Firestore Database** → **Create Database**.
2. Location choose karo (jo aapke users ke paas hai, e.g. `asia-south1` India ke
   liye) → **Start in production mode** → Enable.

## Step 3 — Web App Add Karo (Config Milega)

1. Project Overview page par **`</>`** (Web) icon par click karo.
2. App nickname do (e.g. "typearn-web") → **Register App**.
3. Aapko ek code block dikhega jisme `firebaseConfig = {...}` hoga — isse copy
   kar lo (poora object, `apiKey` se `appId` tak).
4. Ye same config **dono jagah** paste karna hai:
   - `typearn/js/firebase-config.js`
   - `typearn-admin/js/firebase-config.js`
   File khol ke `const firebaseConfig = { ... }` wale block ko apne copy kiye
   hue config se replace kar do. (Dono files me EXACT same object jana chahiye.)

## Step 4 — Authentication Enable Karo

1. **Build → Authentication → Get Started**.
2. **Sign-in method** tab → **Email/Password** → Enable → Save.
3. **Users** tab → **Add User** → apna admin email + ek strong password daalo
   (e.g. `admin@yourdomain.com` / kuch bhi 8+ character strong password).
   — Yehi email/password admin panel ke login page (`admin-login.html`) me
   use hoga.
4. **Sign-in method** tab → **Google** → Enable → apna support email select
   karo → Save. (Yeh user-site ke "Continue with Google" button ke liye
   zaroori hai.)
5. **Authorized domains**: jab site ko real domain par host karo, waha jaake
   **Authentication → Settings → Authorized domains** me wo domain add karna
   mat bhoolna — warna Google Sign-In production me kaam nahi karega
   (localhost me already authorized hota hai by default).
6. **⚠️ ZAROORI**: `firestore.rules` file me `isAdmin()` function ke andar jo
   email likha hai (`admin@typeandmatch.com`), usko **apne asli admin email**
   se replace karo (jo Step 3 me use kiya) — warna admin panel kaam nahi
   karega.

> Normal users (frontend site) ab **2 tarike** se login kar sakte hain:
> **(a) Google Sign-In** (recommended — verified, secure) ya **(b) sirf
> Naam+Mobile** (koi verification nahi). Dono options login/register page
> par milte hain. Google se sign-in karne wale users Firebase Auth use karte
> hain, isliye `isAdmin()` check specifically admin ke email se match karta
> hai — sirf "logged in hai" itna check karna kaafi nahi tha.

## Step 5 — Security Rules Paste Karo

1. **Firestore Database → Rules** tab.
2. Iss project ke root me `firestore.rules` file hai — uska poora content copy
   karke Firebase Console ke rules editor me paste karo → **Publish**.

## Step 6 — Test Karo

1. `typearn/index.html` ko browser me kholo (ya kisi bhi static hosting / Live
   Server pe daal do).
2. Register karo (naam+mobile) → Dashboard khulna chahiye, ₹50 welcome bonus
   dikhna chahiye.
3. `typearn-admin/admin-login.html` kholo → Step 4 wala email/password se login
   karo → Dashboard khulna chahiye, aur wahi user jo aapne register kiya tha
   "Recent Registrations" me dikhna chahiye.
4. Agar dono jagah data match ho raha hai — matlab connection sahi lag gaya! 🎉

---

## Deploy Kaise Karo (Hosting)

Dono `typearn` aur `typearn-admin` folders plain static HTML hain — kisi bhi
static hosting par daal sakte ho:
- **Firebase Hosting** (free, sabse aasan — same project use kar sakte ho)
- Netlify / Vercel / GitHub Pages / koi bhi normal hosting/cPanel

Bas poora folder upload kar do, koi build step nahi chahiye.

---

## ⚠️ Important Limitations (Client Ko Batana Zaroori Hai)

1. **No OTP/Password verification** — Jaisa decide hua tha, login sirf Naam+
   Mobile se hota hai bina verification ke. Koi bhi galat mobile number daal
   ke uska wallet access kar sakta hai agar wo number use kare. Isse thik
   karne ke liye future me Firebase Phone Auth (OTP) add karni hogi.

2. **"Add Money" abhi real payment verify nahi karta** — Wallet me paisa add
   karne wala Razorpay UI sirf mock/demo hai (asli Razorpay se connected
   nahi). Production me isse secure banane ke liye:
   - Real Razorpay account + API keys chahiye
   - Payment verify karne ke liye ek server-side function (Firebase Cloud
     Function) chahiye jo Razorpay ka payment signature check kare tabhi
     wallet credit kare — client-side se seedha credit karna security risk
     hai (koi bhi apna JS edit karke free paisa credit kar sakta hai).

3. **Dashboard ke "Today's Revenue / Active Players / Words Typed" boxes**
   (admin-dashboard.html ke bottom row) aur revenue line-chart abhi bhi
   sample/illustrative data hain — inhe real banane ke liye ek daily-
   aggregation system chahiye hota (alag scope).

4. **Settings page ke Feature Toggles** (jaise "New Registrations OFF") ab
   Firestore me save hote hain, lekin site ka baaki hissa abhi unhe check
   nahi karta — matlab toggle OFF karne se register.html khud-ba-khud band
   nahi hoga. Enforce karne ke liye har relevant page par ek chhota check
   add karna hoga.

5. **Firestore rules abhi "casual misuse" se bachate hain, determined attacker
   se nahi** — kyunki normal users ke paas Firebase Auth account nahi hai
   (jaisa aapne chaha), hum unke writes ko 100% verify nahi kar sakte. Isko
   production-grade secure banane ke liye Cloud Functions ya Phone-OTP Auth
   add karni padegi.

Yeh sab cheezein client ko clearly bata dena — MVP/demo ke liye yeh setup
poori tarah kaam karega, lekin real paise ke saath production launch se
pehle upar wale points par kaam karna zaroori hoga.
