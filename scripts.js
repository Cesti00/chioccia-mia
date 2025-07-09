// Effetto rimbalzo slogan
window.addEventListener("DOMContentLoaded", () => {
  const slogan = document.querySelector(".slogan");
  setTimeout(() => {
    slogan.classList.add("bounce-in");
  }, 500);
});

// Fade-in on scroll
const fadeInElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeInElements.forEach(el => observer.observe(el));
