document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.gallery-nav button');
    const regionsContainer = document.querySelector('.regions-container');
    const regions = document.querySelectorAll('.region');
  
    navButtons.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        // 1. Button active state
        document.querySelector('.gallery-nav button.active').classList.remove('active');
        btn.classList.add('active');
  
        // 2. Section active state
        document.querySelector('.region.active').classList.remove('active');
        regions[idx].classList.add('active');
  
        // 3. Slide
        regionsContainer.style.transform = `translateX(-${idx * 100}%)`;
      });
    });
  });