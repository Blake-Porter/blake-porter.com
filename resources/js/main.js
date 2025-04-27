// Simple HTML partial include
document.querySelectorAll('[data-include]').forEach(el => {
  const path = el.getAttribute('data-include');
  fetch(`resources/${path}`)
    .then(resp => resp.text())
    .then(html => {
      el.outerHTML = html;
      // if you need to re-run any JS (e.g. burger toggle), you can do so here
    })
    .catch(console.error);
});

// Detect non-index pages and mark them “subpage”
const path = window.location.pathname.split('/').pop();
if (path && path !== '' && path !== 'index.html') {
  document.body.classList.add('subpage');
}

// Night-mode switcher (for inspiration page only)
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
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const target = e.target;
      if (!mobileMenu.contains(target) && !burger.contains(target)) {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  }
});