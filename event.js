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



// Function to generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize like count and view count from localStorage or set default random values
let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : getRandomInt(10, 20);
let totalViewCount = localStorage.getItem('totalViewCount') ? parseInt(localStorage.getItem('totalViewCount')) : getRandomInt(50, 60); // Default range 50 to 60

// Update the view count every time the page is loaded
function updateViewCount() {
    // Increment the view count globally (but don't reset it to random values once set)
    totalViewCount++;

    // Save the updated view count to localStorage
    localStorage.setItem('totalViewCount', totalViewCount);

    // Update the UI with the new view count
    document.getElementById('viewCount').innerText = `Views: ${totalViewCount}`;
}

// Update the like count in the UI
function updateLikeCount() {
    document.getElementById('likeCount').innerText = `Likes: ${likeCount}`;
}

// Update the UI on page load
updateViewCount();
updateLikeCount();

// Function to handle the like button click
function likeAccount() {
    // Check if the user has already liked this post by checking the cookie
    if (getCookie('hasLikedAccount') !== 'true') {
        // Increment the like count
        likeCount++;
        
        // Save the updated like count to localStorage
        localStorage.setItem('likeCount', likeCount);

        // Update the UI with the new like count
        updateLikeCount();

        // Set the cookie to prevent future likes
        setCookie('hasLikedAccount', 'true', 365); // Cookie expires in 365 days

        // Change the button text and disable it
        const likeBtn = document.getElementById('accountLikeBtn');
        likeBtn.innerText = 'Liked';
        likeBtn.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set expiration time
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by its name
function getCookie(name) {
    let nameEq = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
    }
    return "";
}
