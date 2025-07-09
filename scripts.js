window.addEventListener('load', () => {
  const slogan = document.querySelector('.slogan');
  if (slogan) {
    setTimeout(() => {
      slogan.classList.add('bounce');
    }, 500); // apparizione con ritardo mezzo secondo
  }
});
