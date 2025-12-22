const tocButton = document.getElementById('tocToggle');
const toc = document.getElementById('toc');

tocButton.addEventListener('click', () => {
  if (toc.style.display === 'block') {
    toc.style.display = 'none';
    tocButton.textContent = '☰';
  } else {
    toc.style.display = 'block';
    tocButton.textContent = '✖';
  }
});
