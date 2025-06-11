document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const leftArrow = document.querySelector('.arrow-left');
  const rightArrow = document.querySelector('.arrow-right');
  const toggleBtn = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const icon = toggleBtn.querySelector('i');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      showSlide(currentIndex);
      resetAutoSlide();
    });
  });

  rightArrow.addEventListener('click', (e) => {
    e.preventDefault();
    nextSlide();
    resetAutoSlide();
  });

  leftArrow.addEventListener('click', (e) => {
    e.preventDefault();
    prevSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
  }

  showSlide(currentIndex);
  startAutoSlide();

  toggleBtn.addEventListener('click', () => {
    // Toggle the 'active' class on the mobile-menu
    mobileMenu.classList.toggle('active');

    // Toggle the icon class for bars/times and rotate
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    toggleBtn.classList.toggle('active'); // Add/remove 'active' class for rotation
  });
});

// Initialize AOS (assuming you have the AOS library linked)
AOS.init({
  duration: 1000,
  once: false // 'once: false' makes animations repeat on scroll.
});

// Initialize VanillaTilt (assuming you have the VanillaTilt library linked)
VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3,
});