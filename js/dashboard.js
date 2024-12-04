import { auth } from "./firebase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Get references to buttons
const logoutBtn = document.getElementById("logoutBtn");
const updateDetailsBtn = document.getElementById("updateDetailsBtn");

// Logout functionality
logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("You have been logged out.");
      window.location.href = "login.html"; // Redirect to login page after logout
    })
    .catch((error) => {
      alert(`Error logging out: ${error.message}`);
    });
});

// Update details functionality
updateDetailsBtn.addEventListener("click", () => {
  alert("Redirecting to update details page.");
  window.location.href = "update-details.html";
});

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
    
    // Set the welcome message
    welcomeMessageDiv.innerHTML = `<h2>${greeting}, ${userEmail}!</h2>`;
  }
});
