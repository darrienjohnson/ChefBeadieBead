const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('main-nav')
const link = document.querySelectorAll('nav-link')
const menuModalButton = document.querySelector('.modal-btn')
const modalBg = document.querySelector('.modal-bg')
const modalClose = document.querySelector('.modal-close')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

menuModalButton.addEventListener('click', () => {
  modalBg.classList.add('modal-active')
});
modalClose.addEventListener('click', () => {
  modalBg.classList.remove('modal-active')
});

