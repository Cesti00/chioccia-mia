document.addEventListener("DOMContentLoaded", () => {
  const slogan = document.querySelector(".slogan");

  setTimeout(() => {
    slogan.classList.add("show");
  }, 600); // appare dopo 0.6 secondi
});
