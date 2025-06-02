// resources/js/guides.js
document.addEventListener('DOMContentLoaded', () => {
  const controls   = document.querySelector('.guides-controls');
  const guideCards = Array.from(document.querySelectorAll('.guide-card'));
  if (!controls || guideCards.length === 0) return;

  const buttons = Array.from(controls.querySelectorAll('.filter-btn'));

  // Initialize ARIA state
  buttons.forEach(btn => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active'));
  });

  controls.addEventListener('click', e => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;

    const filter = btn.dataset.filter;

    // 1) Toggle active states + ARIA
    buttons.forEach(b => {
      const isOn = (b === btn);
      b.classList.toggle('active', isOn);
      b.setAttribute('aria-pressed', isOn);
    });

    // 2) Show/hide cards
    guideCards.forEach(card => {
      // Collect this card’s taxonomy values
      const values = [
        card.dataset.region,
        card.dataset.country,
        card.dataset.subregion,
        card.dataset.city
      ];

      // If you ever want an “All” button, give it data-filter="all"
      // and uncomment the next line to always show everything when clicked:
      // if (filter === 'all') return card.hidden = false;

      // Show the card if any of its values matches the filter
      const match = values.includes(filter);
      card.hidden = !match;
    });
  });
});
