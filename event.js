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

// Function to update view count - it will increment only once when the page is loaded for the first time
function updateViewCount() {
    // If view count hasn't been incremented yet in this session, increment it
    if (!localStorage.getItem('viewCountUpdated')) {
        totalViewCount++; // Increment view count
        localStorage.setItem('totalViewCount', totalViewCount); // Save updated view count in localStorage
        localStorage.setItem('viewCountUpdated', 'true'); // Mark that the view count has been updated
    }

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
    // Check if the user has already liked this post by checking localStorage
    if (!localStorage.getItem('hasLikedAccount')) {
        // Increment the like count
        likeCount++;

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount', likeCount);

        // Update the UI with the new like count
        updateLikeCount();

        // Set the flag in localStorage to prevent future likes
        localStorage.setItem('hasLikedAccount', 'true');

        // Change the button text and disable it
        const likeBtn = document.getElementById('accountLikeBtn');
        likeBtn.innerText = 'Liked';
        likeBtn.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Function to reset the view count for the next session (optional)
function resetViewCount() {
    localStorage.removeItem('viewCountUpdated');
}





// Initialize view and like counts for the second project
// Function to generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize like count and view count for Project 2 from localStorage or set random values
let likeCount2 = localStorage.getItem('likeCount2') ? parseInt(localStorage.getItem('likeCount2')) : getRandomInt(10, 20);
let totalViewCount2 = localStorage.getItem('totalViewCount2') ? parseInt(localStorage.getItem('totalViewCount2')) : getRandomInt(50, 60);

// Function to update the view count for Project 2
function updateViewCount2() {
    // If view count hasn't been incremented yet in this session, increment it
    if (!localStorage.getItem('viewCountUpdated2')) {
        totalViewCount2++; // Increment view count
        localStorage.setItem('totalViewCount2', totalViewCount2); // Save updated view count in localStorage
        localStorage.setItem('viewCountUpdated2', 'true'); // Mark that the view count has been updated
    }

    // Update the UI with the new view count
    document.getElementById('viewCount2').innerText = `Views: ${totalViewCount2}`;
}

// Function to update the like count for Project 2
function updateLikeCount2() {
    document.getElementById('likeCount2').innerText = `Likes: ${likeCount2}`;
}

// Function to handle the like button click for Project 2
function likeAccount2() {
    // Check if the user has already liked this post by checking localStorage
    if (!localStorage.getItem('hasLikedAccount2')) {
        // Increment the like count
        likeCount2++;

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount2', likeCount2);

        // Update the UI with the new like count
        updateLikeCount2();

        // Set the flag in localStorage to prevent future likes
        localStorage.setItem('hasLikedAccount2', 'true');

        // Change the button text and disable it
        const likeBtn2 = document.getElementById('accountLikeBtn2');
        likeBtn2.innerText = 'Liked';
        likeBtn2.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Automatically increment the view count when the page is loaded
updateViewCount2();
updateLikeCount2();



// Function to generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize like count and view count for Project 3 from localStorage or set random values
let likeCount3 = localStorage.getItem('likeCount3') ? parseInt(localStorage.getItem('likeCount3')) : getRandomInt(10, 20);
let totalViewCount3 = localStorage.getItem('totalViewCount3') ? parseInt(localStorage.getItem('totalViewCount3')) : getRandomInt(50, 60);

// Function to update the view count for Project 3
function updateViewCount3() {
    // If view count hasn't been incremented yet in this session, increment it
    if (!localStorage.getItem('viewCountUpdated3')) {
        totalViewCount3++; // Increment view count
        localStorage.setItem('totalViewCount3', totalViewCount3); // Save updated view count in localStorage
        localStorage.setItem('viewCountUpdated3', 'true'); // Mark that the view count has been updated
    }

    // Update the UI with the new view count
    document.getElementById('viewCount3').innerText = `Views: ${totalViewCount3}`;
}

// Function to update the like count for Project 3
function updateLikeCount3() {
    document.getElementById('likeCount3').innerText = `Likes: ${likeCount3}`;
}

// Function to handle the like button click for Project 3
function likeAccount3() {
    // Check if the user has already liked this post by checking localStorage
    if (!localStorage.getItem('hasLikedAccount3')) {
        // Increment the like count
        likeCount3++;

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount3', likeCount3);

        // Update the UI with the new like count
        updateLikeCount3();

        // Set the flag in localStorage to prevent future likes
        localStorage.setItem('hasLikedAccount3', 'true');

        // Change the button text and disable it
        const likeBtn3 = document.getElementById('accountLikeBtn3');
        likeBtn3.innerText = 'Liked';
        likeBtn3.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Automatically increment the view count when the page is loaded
updateViewCount3();
updateLikeCount3();




// Function to generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize like count and view count for Project 4 from localStorage or set random values
let likeCount4 = localStorage.getItem('likeCount4') ? parseInt(localStorage.getItem('likeCount4')) : getRandomInt(10, 20);
let totalViewCount4 = localStorage.getItem('totalViewCount4') ? parseInt(localStorage.getItem('totalViewCount4')) : getRandomInt(50, 60);

// Function to update the view count for Project 4
function updateViewCount4() {
    // If view count hasn't been incremented yet in this session, increment it
    if (!localStorage.getItem('viewCountUpdated4')) {
        totalViewCount4++; // Increment view count
        localStorage.setItem('totalViewCount4', totalViewCount4); // Save updated view count in localStorage
        localStorage.setItem('viewCountUpdated4', 'true'); // Mark that the view count has been updated
    }

    // Update the UI with the new view count
    document.getElementById('viewCount4').innerText = `Views: ${totalViewCount4}`;
}

// Function to update the like count for Project 4
function updateLikeCount4() {
    document.getElementById('likeCount4').innerText = `Likes: ${likeCount4}`;
}

// Function to handle the like button click for Project 4
function likeAccount4() {
    // Check if the user has already liked this post by checking localStorage
    if (!localStorage.getItem('hasLikedAccount4')) {
        // Increment the like count
        likeCount4++;

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount4', likeCount4);

        // Update the UI with the new like count
        updateLikeCount4();

        // Set the flag in localStorage to prevent future likes
        localStorage.setItem('hasLikedAccount4', 'true');

        // Change the button text and disable it
        const likeBtn4 = document.getElementById('accountLikeBtn4');
        likeBtn4.innerText = 'Liked';
        likeBtn4.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Automatically increment the view count when the page is loaded
updateViewCount4();
updateLikeCount4();





// Function to generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize like count and view count for Project 5 from localStorage or set random values
let likeCount5 = localStorage.getItem('likeCount5') ? parseInt(localStorage.getItem('likeCount5')) : getRandomInt(10, 20);
let totalViewCount5 = localStorage.getItem('totalViewCount5') ? parseInt(localStorage.getItem('totalViewCount5')) : getRandomInt(50, 60);

// Function to update the view count for Project 5
function updateViewCount5() {
    // If view count hasn't been incremented yet in this session, increment it
    if (!localStorage.getItem('viewCountUpdated5')) {
        totalViewCount5++; // Increment view count
        localStorage.setItem('totalViewCount5', totalViewCount5); // Save updated view count in localStorage
        localStorage.setItem('viewCountUpdated5', 'true'); // Mark that the view count has been updated
    }

    // Update the UI with the new view count
    document.getElementById('viewCount5').innerText = `Views: ${totalViewCount5}`;
}

// Function to update the like count for Project 5
function updateLikeCount5() {
    document.getElementById('likeCount5').innerText = `Likes: ${likeCount5}`;
}

// Function to handle the like button click for Project 5
function likeAccount5() {
    // Check if the user has already liked this post by checking localStorage
    if (!localStorage.getItem('hasLikedAccount5')) {
        // Increment the like count
        likeCount5++;

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount5', likeCount5);

        // Update the UI with the new like count
        updateLikeCount5();

        // Set the flag in localStorage to prevent future likes
        localStorage.setItem('hasLikedAccount5', 'true');

        // Change the button text and disable it
        const likeBtn5 = document.getElementById('accountLikeBtn5');
        likeBtn5.innerText = 'Liked';
        likeBtn5.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Automatically increment the view count when the page is loaded
updateViewCount5();
updateLikeCount5();









// Function to generate a random integer between a minimum and maximum value
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize like count and view count for Project 6 from localStorage or set random values
let likeCount6 = localStorage.getItem('likeCount6') ? parseInt(localStorage.getItem('likeCount6')) : getRandomInt(10, 20);
let totalViewCount6 = localStorage.getItem('totalViewCount6') ? parseInt(localStorage.getItem('totalViewCount6')) : getRandomInt(50, 60);

// Function to update the view count for Project 6
function updateViewCount6() {
    // If view count hasn't been incremented yet in this session, increment it
    if (!localStorage.getItem('viewCountUpdated6')) {
        totalViewCount6++; // Increment view count
        localStorage.setItem('totalViewCount6', totalViewCount6); // Save updated view count in localStorage
        localStorage.setItem('viewCountUpdated6', 'true'); // Mark that the view count has been updated
    }

    // Update the UI with the new view count
    document.getElementById('viewCount6').innerText = `Views: ${totalViewCount6}`;
}

// Function to update the like count for Project 6
function updateLikeCount6() {
    document.getElementById('likeCount6').innerText = `Likes: ${likeCount6}`;
}

// Function to handle the like button click for Project 6
function likeAccount6() {
    // Check if the user has already liked this post by checking localStorage
    if (!localStorage.getItem('hasLikedAccount6')) {
        // Increment the like count
        likeCount6++;

        // Save the updated like count to localStorage
        localStorage.setItem('likeCount6', likeCount6);

        // Update the UI with the new like count
        updateLikeCount6();

        // Set the flag in localStorage to prevent future likes
        localStorage.setItem('hasLikedAccount6', 'true');

        // Change the button text and disable it
        const likeBtn6 = document.getElementById('accountLikeBtn6');
        likeBtn6.innerText = 'Liked';
        likeBtn6.disabled = true;

        alert('You liked this account!');
    } else {
        alert('You can only like once!');
    }
}

// Automatically increment the view count when the page is loaded
updateViewCount6();
updateLikeCount6();
function animatePercentage(card) {
    let percentageElement = card.querySelector(".percentage");
    let progressBar = card.querySelector(".progress-bar");
    let targetPercentage = 70; // Set your desired percentage
    let currentPercentage = 0;
    let totalLength = 251.2; // Circle circumference

    let interval = setInterval(() => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
        } else {
            currentPercentage++;
            percentageElement.textContent = currentPercentage + "%";

            // Calculate stroke offset for progress animation
            let offset = totalLength - (totalLength * currentPercentage) / 100;
            progressBar.style.strokeDashoffset = offset;
        }
    }, 20); // Adjust speed of animation
}
