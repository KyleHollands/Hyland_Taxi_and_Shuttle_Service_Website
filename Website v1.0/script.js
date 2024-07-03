document.addEventListener("DOMContentLoaded", function () {
    // Cache DOM elements for efficiency
    const images = document.querySelectorAll('.expandable-image'); // Select all expandable images
    const overlay = document.querySelector('.overlay'); // Overlay element for closing expanded images
    const body = document.body; // Reference to the body element for class manipulation
    const toggleButton = document.getElementById('toggleButton'); // Button to toggle between Fares and Schedule
    const toggleImage = document.getElementById('toggleImage'); // Image element to toggle between fares and schedule icon

    // Function to toggle the expansion state of an image
    const toggleExpansion = (image) => {
        image.classList.toggle('expanded'); // Toggle 'expanded' class on clicked image
        body.classList.toggle('image-expanded'); // Toggle 'image-expanded' class on body
        overlay.classList.toggle('show-overlay'); // Toggle 'show-overlay' class on overlay
    };

    // Add click event listener to each image to toggle its expansion state
    images.forEach(image => {
        image.addEventListener('click', () => toggleExpansion(image));
    });

    // Variable to store timeout ID for debouncing the overlay click event
    let overlayClickTimeout;

    // Add click event listener to the overlay to close expanded images
    overlay.addEventListener('click', () => {
        // Clear previous timeout if it exists
        if (overlayClickTimeout) clearTimeout(overlayClickTimeout);

        // Set a new timeout to close expanded images after a short delay
        overlayClickTimeout = setTimeout(() => {
            images.forEach(image => image.classList.remove('expanded')); // Remove 'expanded' class from all images
            body.classList.remove('image-expanded'); // Remove 'image-expanded' class from body
            overlay.classList.remove('show-overlay'); // Hide the overlay
        }, 100); // Delay in milliseconds before executing the timeout
    });

    // Add click event listener to toggleButton to switch between Fares and Schedule
    toggleButton.addEventListener('click', function () {
        if (toggleImage.src.includes('faresV6.png')) {
            // Switch to schedule view
            toggleImage.src = 'scheduleV6.png'; // Change image to schedule icon
            sectionTitle.textContent = 'Schedule'; // Update section title
            toggleButton.textContent = 'Show Fares'; // Change button text
        } else {
            // Switch to fares view
            toggleImage.src = 'faresV6.png'; // Change image to fares icon
            sectionTitle.textContent = 'Fares'; // Update section title
            toggleButton.textContent = 'Show Schedule'; // Change button text
        }
    });
});
