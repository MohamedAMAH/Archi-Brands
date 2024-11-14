document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.custom-navbar');
    const checkScrollPosition = () => {
        if (window.scrollY > 50) {
            navbar.style.setProperty('background-color', '#1a2750', 'important'); // Solid color after scrolling
        } else {
            navbar.style.setProperty('background-color', 'transparent', 'important'); // Transparent when at the top
        }
    };

    // Run on page load
    checkScrollPosition();

    // Run when scrolling
    window.addEventListener('scroll', checkScrollPosition);
});
