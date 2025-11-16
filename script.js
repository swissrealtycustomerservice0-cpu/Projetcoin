// Minimal JS for GitHub Pages build
(function () {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
  const menuButton = document.getElementById('menu-button');
  const navMenu = document.querySelector('.w-nav-menu');
  if (menuButton && navMenu) {
    menuButton.addEventListener('click', function () {
      const isOpen = navMenu.getAttribute('data-open') === 'true';
      navMenu.setAttribute('data-open', String(!isOpen));
      navMenu.style.display = isOpen ? '' : 'block';
    });
  }
})(); 


