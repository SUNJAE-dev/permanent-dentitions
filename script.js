/* =========================================
   Section Fade-In Animation on Scroll
========================================= */
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // optional: animate only once
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

/* =========================================
   Active Navigation Highlight on Scroll
========================================= */
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

/* =========================================
   Mobile Menu Toggle
========================================= */
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

/* =========================================
   Language Toggle (English ↔ Filipino)
========================================= */
let isEnglish = true;

function toggleLang() {
  isEnglish = !isEnglish;

  // Show/hide English elements
  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = isEnglish ? 'block' : 'none';
  });

  // Show/hide Filipino elements
  document.querySelectorAll('.lang-ph').forEach(el => {
    el.style.display = isEnglish ? 'none' : 'block';
  });

  // Update toggle button text
  document.getElementById('lang-toggle').innerText = isEnglish ? 'Filipino' : 'English';
}
