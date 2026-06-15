import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "API_KEY_KAMU",
  authDomain: "minetopup-e9bae.firebaseapp.com",
  projectId: "minetopup-e9bae",
  storageBucket: "minetopup-e9bae.firebasestorage.app",
  messagingSenderId: "505207536693",
  appId: "1:505207536693:web:b134961e114fef2ac9457c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;