document.addEventListener('DOMContentLoaded', () => {
  // Animazione fade-in per hero content
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(20px)';
  setTimeout(() => {
    heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
    heroContent.style.opacity = 1;
    heroContent.style.transform = 'translateY(0)';
  }, 200);

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.querySelector('.nav ul');

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
  });

  // Smooth scroll per link interni
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Aggiunge classe active al menu mentre scrolli
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
