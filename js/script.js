document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,  // Adjust for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // Search Button Functionality
    document.querySelector('.search-bar button').addEventListener('click', function() {
        const searchValue = document.querySelector('.search-bar input').value.toLowerCase();
        alert('Search functionality coming soon!'); // Placeholder for actual functionality
    });

    // Talk Button Click Event
    document.querySelector('.talk-button').addEventListener('click', function() {
        alert("Let's talk! You can reach me at amankumawat.official@gmail.com");
    });
});
