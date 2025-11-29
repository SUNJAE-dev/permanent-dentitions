// Animate sections on scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Highlight active nav link
const navLinks = document.querySelectorAll('nav ul li a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
});

// Toggle mobile menu
const menuToggle = document.getElementById('menu-toggle');
const navLinksContainer = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('active');
});

// Language toggle
let isEnglish = true;
function toggleLang() {
  isEnglish = !isEnglish;
  document.querySelectorAll('.lang-en').forEach(el => el.style.display = isEnglish ? 'block' : 'none');
  document.querySelectorAll('.lang-ph').forEach(el => el.style.display = isEnglish ? 'none' : 'block');
  document.getElementById('lang-toggle').innerText = isEnglish ? 'Filipino' : 'English';
}
