document.addEventListener('DOMContentLoaded', () => {
    // Select all gallery items
    const items = document.querySelectorAll('.gallery-item img');
    const overlay = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
  
    items.forEach(img => {
      img.addEventListener('click', () => {
        const fullSrc = img.getAttribute('data-full');
        lightboxImg.src = fullSrc;
        overlay.classList.remove('hidden');
      });
    });
  
    // Close lightbox on close button
    closeBtn.addEventListener('click', () => {
      overlay.classList.add('hidden');
      lightboxImg.src = '';
    });
  
    // Also close when clicking outside the image
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.add('hidden');
        lightboxImg.src = '';
      }
    });
  });

  // Dark / Light toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  const root = document.documentElement;
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  // Optionally save preference:
  localStorage.setItem('theme', next);
});

// On load, apply saved theme
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
});
  
  