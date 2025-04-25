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

