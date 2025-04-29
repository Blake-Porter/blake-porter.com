// resources/js/guides.js
document.addEventListener('DOMContentLoaded', () => {
  const controls  = document.querySelector('.guides-controls');
  const guideCards = Array.from(document.querySelectorAll('.guide-card'));
  if (!controls || guideCards.length === 0) return;

  // Init ARIA
  controls.querySelectorAll('.filter-btn')
    .forEach(b => b.setAttribute('aria-pressed', b.classList.contains('active')));

  controls.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    // Toggle active/ARIA
    controls.querySelectorAll('.filter-btn').forEach(b => {
      const on = (b === btn);
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on);
    });

    // Show/hide cards
    const filter = btn.dataset.filter;
    guideCards.forEach(card => {
      card.hidden = (filter !== 'all' && card.dataset.category !== filter);
    });
  });
});
