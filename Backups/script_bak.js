document.addEventListener("DOMContentLoaded", function () {
    // Cache the expandable images and overlay elements
    const images = document.querySelectorAll('.expandable-image');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    // Function to toggle the expansion state of an image
    const toggleExpansion = (image) => {
        image.classList.toggle('expanded');
        body.classList.toggle('image-expanded');
        overlay.classList.toggle('show-overlay');
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
            images.forEach(image => image.classList.remove('expanded'));
            body.classList.remove('image-expanded');
            overlay.classList.remove('show-overlay');
        }, 100);
    });
});
