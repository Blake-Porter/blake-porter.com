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

// Night-mode switcher (inspiration style)
const switcher = document.querySelector('.js-night-mode-trigger');
if (switcher) {
  switcher.addEventListener('click', () => {
    // Toggle the dark-mode class on <html>
    const enableDark = switcher.getAttribute('data-theme') === 'light';
    document.documentElement.classList.toggle('dark-mode', enableDark);

    // Update the switcher’s own state
    switcher.setAttribute('data-theme', enableDark ? 'dark' : 'light');
  });
}

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.js-menu-toggle');
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

if (menuToggle && navLinks && burger) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
  });
}

