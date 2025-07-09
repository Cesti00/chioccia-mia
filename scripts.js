document.addEventListener("DOMContentLoaded", () => {
  const slogan = document.querySelector(".slogan");
  const sections = document.querySelectorAll(".fade-in");
  const navbar = document.querySelector(".navbar");

  // Funzione per animare il rimbalzo dello slogan con delay
  function animateSlogan() {
    slogan.style.opacity = "1";
    slogan.style.animation = "bounceIn 1.2s ease forwards";
  }

  // Funzione per mostrare le sezioni con fade-in al scroll
  function handleScrollFade() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerBottom) {
        section.classList.add("visible");
      }
    });
  }

  // Funzione per aggiungere/rimuovere classe sticky alla navbar
  function handleStickyNavbar() {
    if (window.scrollY > 10) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // Animazione slogan con delay di 600ms
  setTimeout(animateSlogan, 600);

  // Eventi scroll
  window.addEventListener("scroll", () => {
    handleScrollFade();
    handleStickyNavbar();
  });

  // Trigger fade-in per eventuali sezioni visibili all'apertura
  handleScrollFade();
});
