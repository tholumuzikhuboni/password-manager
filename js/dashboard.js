// Get references to buttons
const logoutBtn = document.getElementById("logoutBtn");
const updateDetailsBtn = document.getElementById("updateDetailsBtn");

// Logout functionality
logoutBtn.addEventListener("click", () => {
  alert("You have been logged out.");
  // logout logic here
  window.location.href = "login.html";
});

// Update details functionality
updateDetailsBtn.addEventListener("click", () => {
  alert("Redirecting to update details page.");
  // Navigation to an update details
  window.location.href = "update-details.html";
});

import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // If no user is logged in, redirect to login page
    window.location.href = "login.html";
  }
});
