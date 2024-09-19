document.addEventListener('DOMContentLoaded', function() {
    // Check if the user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
        // Redirect to login page if not logged in
        window.location.href = 'index.html';
    }
});

// Logout function
function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}
