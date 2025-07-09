window.addEventListener('DOMContentLoaded', () => {
  const slogan = document.querySelector('.slogan');
  setTimeout(() => {
    slogan.classList.add('bounce-in');
  }, 500); // ritardo in millisecondi
});
