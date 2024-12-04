// User actions
const logoutBtn = document.getElementById("logoutBtn");
const updateDetailsBtn = document.getElementById("updateDetailsBtn");

// Logout functionality
logoutBtn.addEventListener("click", () => {
  alert("You have been logged out.");
  // Add your logout logic here, such as Firebase sign-out
  window.location.href = "login.html";
});

// Update details functionality
updateDetailsBtn.addEventListener("click", () => {
  alert("Redirecting to update details page.");
  // Add navigation to an update details page if needed
});