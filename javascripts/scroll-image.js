document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.content-section');
  const stickyImage = document.querySelector('.sticky-image');
  
  if (!sections.length || !stickyImage) return;

  const setImage = (src) => {
    if (!src || stickyImage.dataset.current === src) return;
    stickyImage.dataset.current = src;
    // Restart subtle fade-in animation without removing visibility
    stickyImage.classList.remove('is-changing');
    stickyImage.src = src;
    // Force reflow to allow re-adding the animation class
    void stickyImage.offsetWidth;
    stickyImage.classList.add('is-changing');
  };

  // Initially set the first image
  const firstImage = sections[0].getAttribute('data-image');
  if (firstImage) {
    setImage(firstImage);
  }

  // Create an Intersection Observer to detect which section is in view
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -30% 0px', // Trigger when section is in middle 40% of viewport
    threshold: 0
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const imageUrl = entry.target.getAttribute('data-image');
        setImage(imageUrl);
      }
    });
  }, observerOptions);

  // Observe all sections
  sections.forEach(function(section) {
    observer.observe(section);
  });
});
