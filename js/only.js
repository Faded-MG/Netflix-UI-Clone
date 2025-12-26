
const container = document.querySelector('.container');
const cardWidth = document.querySelector('.card').offsetWidth + 12; 

function scrollCarousel(direction) {
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
/*the scroll button is not working here, i need to fix the bug*/