// Check if the user is logged in (on dashboard page)
if (window.location.pathname.includes("Dashboard.html")) {
    if (!sessionStorage.getItem('loggedIn')) {
        // If not logged in, redirect to login page
        window.location.href = "index.html";
    }
}

// Handle logout
document.getElementById('logout-btn')?.addEventListener('click', function (event) {
    event.preventDefault();
    // Clear session and redirect to login page
    sessionStorage.clear();
    window.location.href = "index.html";
});
