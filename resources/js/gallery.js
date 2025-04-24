document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.gallery-nav button');
    const regionsContainer = document.querySelector('.regions-container');
  
    navButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        document.querySelector('.gallery-nav button.active').classList.remove('active');
        btn.classList.add('active');
        regionsContainer.style.transform = `translateX(-${idx * 100}%)`;
      });
    });
  });