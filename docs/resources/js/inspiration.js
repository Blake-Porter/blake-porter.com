// resources/js/inspiration.js

document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  const galleryImages = document.querySelectorAll('.gallery-item img');
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxOverlay.classList.add('visible');
      lightboxImg.src = img.dataset.full || img.src;
      lightboxImg.alt = img.alt;
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightboxOverlay.classList.remove('visible');
    lightboxImg.src = '';
  });

  lightboxOverlay.addEventListener('click', (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.classList.remove('visible');
      lightboxImg.src = '';
    }
  });

  // Hero background parallax
  const heroBg = document.querySelector('.hero__background');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const yOffset = window.pageYOffset;
      heroBg.style.transform = `translateY(${yOffset * 0.5}px)`;
    });
  }

  // Scroll to Gallery
  const scrollButton = document.querySelector('.scroll-button');
  if (scrollButton) {
    scrollButton.addEventListener('click', (e) => {
      e.preventDefault();
      const gallerySection = document.querySelector('#gallery');
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});