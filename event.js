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



// Initialize view count and like count from localStorage
let viewCount = localStorage.getItem('viewCount') ? parseInt(localStorage.getItem('viewCount')) : 0;
let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;

// Update the view count
document.querySelectorAll('#viewCount').forEach(function (viewElement) {
    viewElement.innerText = `Views: ${viewCount}`;
});

// Update the like count
document.querySelectorAll('#likeCount').forEach(function (likeElement) {
    likeElement.innerText = `Likes: ${likeCount}`;
});

// Increment the view count and store it in localStorage
localStorage.setItem('viewCount', viewCount + 1);

// Function to handle the like button click
function likeAccount() {
    if (getCookie('hasLikedAccount') !== 'true') {
        // Increment like count and update UI
        likeCount++;
        document.querySelectorAll('#likeCount').forEach(function (likeElement) {
            likeElement.innerText = `Likes: ${likeCount}`;
        });

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount', likeCount);

        alert("You liked this account!");
        setCookie('hasLikedAccount', 'true', 365);

        const likeBtn = document.querySelector('#accountLikeBtn');
        likeBtn.innerText = "Liked";
        likeBtn.disabled = true;
    } else {
        alert("You can only like once!");
    }
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value
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



// Initialize like count from localStorage


// Function to update the like count on the UI
function updateLikeCount() {
    document.querySelectorAll('#likeCount').forEach(function (likeElement) {
        likeElement.innerText = `Likes: ${likeCount}`;
    });
}

// Update the like count when the page loads
updateLikeCount();

// Function to handle the like button click
function likeAccount() {
    if (getCookie('hasLikedAccount') !== 'true') {
        // Increment like count and update UI
        likeCount++;
        localStorage.setItem('likeCount', likeCount); // Save updated like count to localStorage

        // Update the like count on the page
        updateLikeCount();

        // Set the cookie to prevent future likes
        setCookie('hasLikedAccount', 'true', 365);

        // Disable the like button after clicking
        const likeBtn = document.querySelector('#accountLikeBtn');
        likeBtn.innerText = "Liked";
        likeBtn.disabled = true;

        alert("You liked this account!");
    } else {
        alert("You can only like once!");
    }
}

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie value
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
