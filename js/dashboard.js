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
