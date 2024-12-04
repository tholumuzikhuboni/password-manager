// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBCdzNSdeefMgwIA5zFGcndC6J1g28x_T8",
    authDomain: "password-manager-9d4ff.firebaseapp.com",
    projectId: "password-manager-9d4ff",
    storageBucket: "password-manager-9d4ff.firebasestorage.app",
    messagingSenderId: "791175094506",
    appId: "1:791175094506:web:6753c3177e085dc722b793",
    measurementId: "G-DT19HTDNGL"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
