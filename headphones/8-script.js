document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');
    
    menuToggle.addEventListener('click', function() {
        // Toggle the 'active' class on the navbar
        navbar.classList.toggle('active');
        
        // Animate the hamburger icon
        this.classList.toggle('open');
    });
    
    // Close the menu when a nav item is clicked (for mobile)
    const navItems = document.querySelectorAll('.nav-item a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 480) {
                navbar.classList.remove('active');
                menuToggle.classList.remove('open');
            }
        });
    });
});