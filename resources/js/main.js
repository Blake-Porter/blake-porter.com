// Simple HTML partial include (runs immediately)
document.querySelectorAll('[data-include]').forEach(el => {
  const path = el.getAttribute('data-include');
  fetch(`resources/${path}`)
    .then(resp => resp.text())
    .then(html => {
      el.outerHTML = html;
    })
    .catch(console.error);
});

// Detect non-index pages and mark them "subpage" (runs immediately)
const path = window.location.pathname.split('/').pop();
if (path && path !== '' && path !== 'index.html') {
  document.body.classList.add('subpage');
}

// Wait for the full page to load completely
window.addEventListener('load', function() {

  // Mobile Menu Toggle
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

  // Night-mode switcher (only for inspiration page)
  const switcher = document.querySelector('.js-night-mode-trigger');
  if (switcher) {
    switcher.addEventListener('click', () => {
      const enableDark = switcher.getAttribute('data-theme') === 'light';
      document.documentElement.classList.toggle('dark-mode', enableDark);
      switcher.setAttribute('data-theme', enableDark ? 'dark' : 'light');
    });
  }

  // Fade-in sections on scroll
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Header background change on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

});
