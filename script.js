// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "custom-blue": "#4169e2",
        // Add other colors here
      },
    },
  },
};

let currentIndex = 0;
    const slides = document.getElementById('carousel').getElementsByClassName('flex-none');
    const totalSlides = slides.length;
    const carouselWidth = document.getElementById('carousel').clientWidth;

    function updateSlidePosition() {
      document.getElementById('carousel').style.transform = `translateX(-${currentIndex * carouselWidth}px)`;
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
    }

    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }

    // Initial call to set the starting position of the carousel
    updateSlidePosition();