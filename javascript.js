
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show-menu');
}


 // Typewriter Effect
    const text = "जय श्री हनुमान"; // The text you want to display
    let index = 0;
    const speed = 200; // Speed in milliseconds for typing each character

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("hero-title").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed); // Continue typing until the entire text is displayed
        } else {
            setTimeout(() => {
                // Wait for a moment after the full text is displayed
                document.getElementById("hero-title").innerHTML = ""; // Clear the text
                index = 0; // Reset index
                typeWriter(); // Restart the typewriter effect
            }, 1000); // Wait for 1 second before restarting
        }
    }

    // // Check if the current page is the home page
    // function checkHomePage() {

    //     // You can modify this condition based on how your URLs are structured
    //     const isHomePage = window.location.pathname === '/index2.html' || window.location.pathname === '/'; // Adjust based on your home URL
    //     if (isHomePage) {
    //         typeWriter(); // Start the effect only if on the home page
    //     }
    // }

    // window.onload = checkHomePage; // Start the check when the page loads


    function checkHomePage() {
        const currentUrl = window.location.href;
        const isHomePage = currentUrl.includes('index2.html'); // Check if on home page
        if (isHomePage) {
            typeWriter(); // Start the effect only if on the home page
        }
    }
    
    window.onload = checkHomePage; // Start the check when the page loads