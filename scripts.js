document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.3 + 0.3}s`;
  });
});
