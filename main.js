// Botón subir arriba
const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTop.style.display = 'block';
  } else {
    btnTop.style.display = 'none';
  }
});

btnTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

// Abrir/cerrar menú
menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Evita que el clic se propague
  menu.classList.toggle('open');
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
    menu.classList.remove('open');
  }
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

// Animar secciones con retardo al cargar
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  sections.forEach((sec, i) => {
    sec.classList.add('fade-in-up');
    sec.style.animationDelay = `${i * 0.2}s`;
  });
});
