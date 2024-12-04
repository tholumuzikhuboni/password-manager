// Profile icon actions
const profileIcon = document.getElementById("profileIcon");

// Add click event to the profile icon
profileIcon.addEventListener("click", () => {
  const action = confirm("What would you like to do?\nPress OK to update details or Cancel to logout.");
  if (action) {
    // Redirect to update details page or show a modal
    alert("Redirecting to update details...");
    // Example: Navigate to an update details page
    window.location.href = "update-details.html";
  } else {
    // Logout logic
    alert("You have been logged out.");
    // Example: Redirect to login page after logout
    window.location.href = "login.html";
  }
});
