// Hamburger toggle
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('open');

  // Change icon
  menuBtn.textContent = navMenu.classList.contains('open') ? '✖' : '☰';
});

// Footer dynamic year
document.querySelector('#year').textContent = new Date().getFullYear();

// Last modified
document.querySelector('#lastModified').textContent = document.lastModified;