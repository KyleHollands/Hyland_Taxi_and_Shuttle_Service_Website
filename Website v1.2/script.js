document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.expandable-image');
    const overlay = document.createElement('div');
    const body = document.body;
    const toggleButton = document.getElementById('toggleButton');
    const toggleImage = document.getElementById('toggleImage');
    const downloadButton = document.getElementById('downloadButton');

    overlay.classList.add('overlay');
    body.appendChild(overlay);

    const toggleExpansion = (image) => {
        const isExpanded = image.classList.toggle('expanded');
        overlay.classList.toggle('show-overlay');
        body.style.overflow = isExpanded ? 'hidden' : '';
    };

    images.forEach(image => {
        image.addEventListener('click', () => toggleExpansion(image));
    });

    overlay.addEventListener('click', () => {
        clearTimeout(overlayClickTimeout);
        overlayClickTimeout = setTimeout(() => {
            images.forEach(image => image.classList.remove('expanded'));
            overlay.classList.remove('show-overlay');
            body.style.overflow = '';
        }, 100);
    });

    toggleButton.addEventListener('click', () => {
        const isFaresView = toggleImage.src.includes('faresV6.png');
        toggleImage.src = isFaresView ? 'images/scheduleV6.png' : 'images/faresV6.png';
        toggleButton.textContent = isFaresView ? 'Show Fares' : 'Show Schedule';
    });

    downloadButton.addEventListener('click', () => {
        window.open(toggleImage.src, '_blank');
    });
});
