document.addEventListener('DOMContentLoaded', () => {
    // —— Lightbox Setup —— //
    const items      = document.querySelectorAll('.gallery-item img');
    const overlay    = document.getElementById('lightbox-overlay');
    const lightboxImg= document.getElementById('lightbox-img');
    const closeBtn   = document.getElementById('lightbox-close');
  
    items.forEach(img => {
      img.addEventListener('click', () => {
        const fullSrc = img.getAttribute('data-full');
        lightboxImg.src = fullSrc;
        overlay.classList.remove('hidden');
      });
    });
  
    closeBtn.addEventListener('click', () => {
      overlay.classList.add('hidden');
      lightboxImg.src = '';
    });
  
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.add('hidden');
        lightboxImg.src = '';
      }
    });
  
    // —— Night/Day Toggle —— //
    const trigger = document.querySelector('.js-night-mode-trigger');
    const root    = document.documentElement;
  
    // On load, apply saved theme (default: light)
    const saved = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', saved);
  
    // Toggle theme on click
    trigger.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
  