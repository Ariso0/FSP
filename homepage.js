document.addEventListener("DOMContentLoaded", () => {
  // DOM elements
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.previous');
  const carousel = document.querySelector('.haiwan');
  const list = document.querySelector('.senarai');
  const runningTime = document.querySelector('.haiwan .timeRunning');
  
  // Timing (in milliseconds)
  const timeRunning = 7000;   // Matches animation duration (7s)
  const timeAutoNext = 7000;  // Time between auto next clicks
  
  let runTimeOut;
  let runNextAuto;
  
  // Reset animation on the runningTime element
  function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    runningTime.offsetHeight; // trigger reflow
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
  }
  
  // Show slider function: move items left or right
  function showSlider(type) {
    const sliderItemsDom = list.querySelectorAll('.item');
    
    if (type === 'next') {
      list.appendChild(sliderItemsDom[0]);
      carousel.classList.add('next');
    } else {
      list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      carousel.classList.add('previous');
    }
    
    // Remove animation classes after timeRunning ms
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carousel.classList.remove('next', 'previous');
    }, timeRunning);
    
    // Reset and restart auto-next timer
    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);
    
    resetTimeAnimation();
  }
  
  // Button click handlers
  nextBtn.addEventListener('click', () => showSlider('next'));
  prevBtn.addEventListener('click', () => showSlider('previous'));
  
  // Start initial animation and auto-next timer
  resetTimeAnimation();
  runNextAuto = setTimeout(() => {
    nextBtn.click();
  }, timeAutoNext);
  
  // Smooth scroll for navbar internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
 const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible'); // Optional: fade-out
      }
    });
  });

  faders.forEach(fader => {
    observer.observe(fader);
  });
