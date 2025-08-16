const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;
let autoSlide;

// Mostrar slide
function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

// Avanzar automático
function startAutoSlide() {
  autoSlide = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 4000);
}

// Pausar en hover
track.addEventListener('mouseenter', () => clearInterval(autoSlide));
track.addEventListener('mouseleave', startAutoSlide);

// Botones
nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

// Iniciar
showSlide(index);
startAutoSlide();