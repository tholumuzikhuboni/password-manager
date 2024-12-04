// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCdzNSdeefMgwIA5zFGcndC6J1g28x_T8",
  authDomain: "password-manager-9d4ff.firebaseapp.com",
  projectId: "password-manager-9d4ff",
  storageBucket: "password-manager-9d4ff.firebasestorage.app",
  messagingSenderId: "791175094506",
  appId: "1:791175094506:web:6753c3177e085dc722b793",
  measurementId: "G-DT19HTDNGL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Get references to buttons
const logoutBtn = document.getElementById("logoutBtn");
const updateDetailsBtn = document.getElementById("updateDetailsBtn");

// Check if the user is logged in
auth.onAuthStateChanged(user => {
  if (!user) {
    // Redirect to login page if the user is not logged in
    window.location.replace("login.html");
  }
});

// Logout functionality
logoutBtn.addEventListener("click", () => {
  auth.signOut()
    .then(() => {
      alert("You have been logged out.");
      // Redirect to the login page after logging out
      window.location.href = "login.html";
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
});

// Update details functionality
updateDetailsBtn.addEventListener("click", () => {
  alert("Redirecting to update details page.");
  // Navigate to the update details page
  window.location.href = "update-details.html";
});
