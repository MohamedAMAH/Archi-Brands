document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.clients-slider');
    
    let currentIndex = 0;
    const totalItems = slider.children.length;
    const itemsToShow = 4;

    // Clone first and last few items for seamless looping
    const cloneFirstItems = slider.innerHTML;
    const cloneLastItems = slider.innerHTML;
    
    // Append and Prepend clones
    slider.innerHTML = cloneLastItems + slider.innerHTML + cloneFirstItems;
    
    // Move to start position
    slider.style.transform = `translateX(-${itemsToShow * 25}%)`;
    currentIndex = itemsToShow;

    // Move Next (with looping)
    const moveNext = () => {
        currentIndex++;
        slider.style.transition = 'transform 0.4s ease-in-out';
        slider.style.transform = `translateX(-${currentIndex * 25}%)`;

        if (currentIndex === totalItems + itemsToShow) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentIndex = itemsToShow;
                slider.style.transform = `translateX(-${currentIndex * 25}%)`;
            }, 400);
        }
    };

    // Auto-rotation logic (every 3 seconds)
    setInterval(moveNext, 2500);
});
