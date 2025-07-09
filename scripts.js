// Effetto rimbalzo sullo slogan al caricamento
window.addEventListener('load', () => {
  const slogan = document.querySelector('.slogan');
  if (slogan) {
    slogan.classList.add('bounce-in');
    slogan.style.opacity = '1';  // per sicurezza
  }
});

// Effetto fade-in per le sezioni quando entrano in viewport
const fadeSections = document.querySelectorAll('.fade-section');

function checkFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);
