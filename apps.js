const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('main-nav')
const link = document.querySelectorAll('nav-link')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});