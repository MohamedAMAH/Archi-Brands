document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
    
    function showNextSlide() {
      requestAnimationFrame(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
      });
    }
  
    let lastTime = Date.now();
    
    function animate() {
      const currentTime = Date.now();
      if (currentTime - lastTime >= 6000) {
        showNextSlide();
        lastTime = currentTime;
      }
      requestAnimationFrame(animate);
    }
  
    requestAnimationFrame(animate);
  });