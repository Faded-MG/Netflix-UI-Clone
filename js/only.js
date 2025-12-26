document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const card = document.querySelector('.card');

  if (!container || !card) return;

  const cardWidth = card.offsetWidth + 12;

  function scrollCarousel(direction) {
    container.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }

  // expose function if using inline onclick
  window.scrollCarousel = scrollCarousel;
});
