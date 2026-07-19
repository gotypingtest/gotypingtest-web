// ===== FIREBASE CONFIG =====
// Yaha apna Firebase project ka config paste karna hai.
// Kaha se milega: Firebase Console -> Project Settings (gear icon) -> General tab
// -> "Your apps" section -> Web app (</>) -> "SDK setup and configuration" -> Config
//
// IMPORTANT: Yahi EXACT same object dono jagah paste karna hai:
//   1) typearn (user site)  -> js/firebase-config.js  (yeh file)
//   2) typearn-admin (admin panel) -> js/firebase-config.js (waha bhi same file hai)
// Dono ek hi Firebase project se connect honge, tabhi data share hoga.

const firebaseConfig = {
  apiKey: "AIzaSyAKci6VXBuNruLezyfFmOkk3qjYrkpa_oU",
  authDomain: "gotypingtest-481f9.firebaseapp.com",
  projectId: "gotypingtest-481f9",
  storageBucket: "gotypingtest-481f9.firebasestorage.app",
  messagingSenderId: "190639484847",
  appId: "1:190639484847:web:8a261d6ca31cc6129a095a",
  measurementId: "G-R11R7MM9J8"
};

// Init (Firebase compat SDK - script tags se load hota hai, koi build tool nahi chahiye)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
