document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentIndex = 0;
  let intervalId;
  let lastTime = Date.now();

  function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add("active");
  }

  function startCarousel() {
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(showNextSlide, 6000);
  }

  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      lastTime = Date.now();
    } else {
      const timePassed = Date.now() - lastTime;
      if (timePassed >= 3000) {
        const slidesToAdvance = Math.floor(timePassed / 6000);
        for (let i = 0; i < slidesToAdvance; i++) {
          showNextSlide();
        }
      }
      startCarousel();
    }
  });

  startCarousel();
});