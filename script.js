const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

let currentSlide = 0;
let autoSlide;

function updateSlide(index) {
  track.style.transform = 'translateX(-' + index * 100 + '%)';
  currentSlide = index;
}

function nextSlide() {
  let index = (currentSlide + 1) % slides.length;
  updateSlide(index);
}

function prevSlide() {
  let index = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(index);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

nextButton.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
});

prevButton.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
});

startAutoSlide();
