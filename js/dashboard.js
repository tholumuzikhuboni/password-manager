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
  } else {
    // User is logged in, display welcome message
    const welcomeMessageDiv = document.getElementById("welcomeMessage");
    const userEmail = user.email;
    const currentHour = new Date().getHours();
    
    let greeting = "Good evening";
    if (currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour < 18) {
      greeting = "Good afternoon";
    }
    
    welcomeMessageDiv.innerHTML = `<h2>${greeting}, ${userEmail}!</h2>`;
  }
});
