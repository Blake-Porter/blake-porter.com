// resources/js/main.js

// Simple HTML partial include
document.querySelectorAll('[data-include]').forEach(el => {
  const path = el.getAttribute('data-include');
  fetch(`resources/${path}`)
    .then(resp => resp.text())
    .then(html => {
      el.outerHTML = html;
    })
    .catch(console.error);
});

// Detect non-index pages and mark them "subpage"
const path = window.location.pathname.split('/').pop();
if (path && path !== '' && path !== 'index.html') {
  document.body.classList.add('subpage');
}

// Night-mode switcher (only for inspiration page)
const switcher = document.querySelector('.js-night-mode-trigger');
if (switcher) {
  switcher.addEventListener('click', () => {
    const enableDark = switcher.getAttribute('data-theme') === 'light';
    document.documentElement.classList.toggle('dark-mode', enableDark);
    switcher.setAttribute('data-theme', enableDark ? 'dark' : 'light');
  });
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
});