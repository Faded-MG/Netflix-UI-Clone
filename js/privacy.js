/*const tocButton = document.getElementById('tocToggle');
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
const toscButton = document.getElementById('toscToggle');
const tosc = document.getElementById('tosc');

toscButton.addEventListener('click', () => {
  if (tosc.style.display === 'block') {
    tosc.style.display = 'none';
    toscButton.textContent = '>';
  } else {
    tosc.style.display = 'block';
    toscButton.textContent = '<';
  }
});
const tosc2Button = document.getElementById('tosc2Toggle');
const tosc2 = document.getElementById('tosc2');

tosc2Button.addEventListener('click', () => {
  if (tosc2.style.display === 'block') {
    tosc2.style.display = 'none';
    tosc2Button.textContent = '>';
  } else {
    tosc2.style.display = 'block';
    tosc2Button.textContent = '<';
  }
});
const tosc3Button = document.getElementById('tosc3Toggle');
const tosc3 = document.getElementById('tosc3');

tosc3Button.addEventListener('click', () => {
  if (tosc3.style.display === 'block') {
    tosc3.style.display = 'none';
    tosc3Button.textContent = '>';
  } else {
    tosc3.style.display = 'block';
    tosc3Button.textContent = '<';
  }
});
const tosc4Button = document.getElementById('tosc4Toggle');
const tosc4 = document.getElementById('tosc4');

tosc4Button.addEventListener('click', () => {
  if (tosc4.style.display === 'block') {
    tosc4.style.display = 'none';
    tosc4Button.textContent = '>';
  } else {
    tosc4.style.display = 'block';
    tosc4Button.textContent = '<';
  }
});
const tosc5Button = document.getElementById('tosc5Toggle');
const tosc5 = document.getElementById('tosc5');

tosc5Button.addEventListener('click', () => {
  if (tosc5.style.display === 'block') {
    tosc5.style.display = 'none';
    tosc5Button.textContent = '>';
  } else {
    tosc5.style.display = 'block';
    tosc5Button.textContent = '<';
  }
});*/

// Main TOC toggle
const tocToggle = document.getElementById('tocToggle');
const toc = document.getElementById('toc');

tocToggle.addEventListener('click', () => {
  const open = toc.style.display === 'block';
  toc.style.display = open ? 'none' : 'block';
  tocToggle.textContent = open ? '☰' : '✖';
});

// Submenus (ALL of them, automatically)
document.querySelectorAll('.sub-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const sub = button.nextElementSibling.nextElementSibling;
    const open = sub.style.display === 'block';

    sub.style.display = open ? 'none' : 'block';
    button.textContent = open ? '›' : '‹';
  });
});
