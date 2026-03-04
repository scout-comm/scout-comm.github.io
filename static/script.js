// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for animations
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);
document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Video popup (only if present)
document.addEventListener('DOMContentLoaded', function() {
  const popup = document.querySelector('.video-popup');
  const closeBtn = document.querySelector('.close-popup');
  if (popup && closeBtn) {
    closeBtn.addEventListener('click', function() {
      popup.classList.remove('active');
      const v = popup.querySelector('video');
      if (v) { v.pause(); v.currentTime = 0; }
    });
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        popup.classList.remove('active');
        const v = popup.querySelector('video');
        if (v) { v.pause(); v.currentTime = 0; }
      }
    });
  }
  const videoContainers = document.querySelectorAll('.video-container');
  if (popup && videoContainers.length) {
    const popupVideo = popup.querySelector('video');
    if (popupVideo) {
      videoContainers.forEach(container => {
        container.addEventListener('click', function() {
          const src = this.getAttribute('data-video');
          if (src) {
            popupVideo.querySelector('source').src = src;
            popupVideo.load();
            popup.classList.add('active');
            popupVideo.play();
          }
        });
      });
    }
  }
});
