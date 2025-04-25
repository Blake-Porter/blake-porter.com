document.addEventListener('DOMContentLoaded', () => {
    // Lightbox
    document.querySelectorAll('.gallery-item img').forEach(img => {
      img.onclick = () => {
        const overlay = document.getElementById('lightbox-overlay');
        document.getElementById('lightbox-img').src = img.dataset.full;
        overlay.classList.remove('hidden');
      };
    });
    document.getElementById('lightbox-close').onclick = () => {
      const overlay = document.getElementById('lightbox-overlay');
      overlay.classList.add('hidden');
      document.getElementById('lightbox-img').src = '';
    };
  
    // Theme toggle
    const root = document.documentElement;
    root.setAttribute('data-theme', localStorage.getItem('theme')||'light');
    document.querySelector('.js-night-mode-trigger').onclick = () => {
      const next = root.dataset.theme === 'dark' ? 'light':'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    };
  
    // Hero scroll & parallax
    const heroBg = document.querySelector('.hero__background');
    window.onscroll = () => {
      const y = window.pageYOffset;
      heroBg.style.transform = `translateY(${y*0.5}px)`;
    };
    document.querySelector('.scroll-button').onclick = e => {
      e.preventDefault();
      document.querySelector('#gallery').scrollIntoView({behavior:'smooth'});
    };
  });

  // after Masonry setup...
var infScroll = new InfiniteScroll( '.grid', {
    path: '.pagination__next',    // your “next page” link selector
    append: '.grid-item',
    outlayer: msnry,               // your Masonry instance
    status: '.page-load-status',
    history: false,
  });
  // make sure images trigger Masonry layout
  imagesLoaded( '.grid' ).on( 'progress', function() {
    msnry.layout();
  });

  // simple IntersectionObserver example
const grid = document.querySelector('.grid');
const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadMoreImages()  // your AJAX fetch + append logic
      .then(() => msnry.layout());
  }
});
observer.observe(document.querySelector('.grid').lastElementChild);