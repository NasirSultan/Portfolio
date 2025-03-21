// Initialize AOS animations
AOS.init();

// Smooth scroll and trigger AOS animations on clicking the "About" button in the navbar
document.addEventListener('DOMContentLoaded', function() {
    // Event listener for the "About" link in the navbar
    const aboutLink = document.querySelector('a[href="#about"]');
    
    if (aboutLink) {
        aboutLink.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default behavior of the anchor link

            // Smooth scroll to the "About" section
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scroll effect
                });
            }

            // Manually trigger AOS animations after smooth scroll
            AOS.refresh(); // Refresh AOS to ensure animations are triggered after scroll
        });
    }
});



