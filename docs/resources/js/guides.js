// Primary and secondary filtering for Destinations page

const regionButtons = document.querySelectorAll('.filter-btn');
const subfilterContainer = document.querySelector('.subfilter-controls');
const cards = document.querySelectorAll('.destination-card');

// Define subfilters for each region
const subfilters = {
  asia: [ { key: 'japan', label: 'Japan' }, { key: 'sea', label: 'SE Asia' } ],
  europe: [ { key: 'europe', label: 'All Europe' } ],
  'north-america': [ { key: 'us-parks', label: 'US Parks' }, { key: 'west-coast-us', label: 'West Coast' } ]
};

regionButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active region
    document.querySelector('.filter-btn.active').classList.remove('active');
    btn.classList.add('active');
    const region = btn.dataset.region;

    // Filter cards by region
    cards.forEach(card => {
      card.style.display = (region === 'all' || card.dataset.region === region) ? 'block' : 'none';
    });

    // Build or hide subfilters
    subfilterContainer.innerHTML = '';
    if (region !== 'all' && subfilters[region]) {
      subfilterContainer.removeAttribute('aria-hidden');
      subfilters[region].forEach(sf => {
        const b = document.createElement('button');
        b.className = 'subfilter-btn';
        b.textContent = sf.label;
        b.dataset.sub = sf.key;
        subfilterContainer.appendChild(b);
        // Wire up subfilter click
        b.addEventListener('click', () => {
          document.querySelector('.subfilter-btn.active')?.classList.remove('active');
          b.classList.add('active');
          cards.forEach(card => {
            const inRegion = (region === 'all' || card.dataset.region === region);
            const inSub = (card.dataset.subregion === sf.key);
            card.style.display = (inRegion && inSub) ? 'block' : 'none';
          });
        });
      });
    } else {
      subfilterContainer.setAttribute('aria-hidden', 'true');
    }
  });
});