document.addEventListener('DOMContentLoaded', () => {
  function scrollCarousel(containerSelector, direction) {
    const containers = document.querySelectorAll(containerSelector);
    if (!containers.length) return;

    containers.forEach(container => {
      const card = container.querySelector('.card');
      if (!card) return;

      const cardWidth = card.offsetWidth + 12; 
      container.scrollBy({
        left: direction * cardWidth,
        behavior: 'smooth'
      });
    });
  }

  window.scrollCarousel = scrollCarousel;
});
