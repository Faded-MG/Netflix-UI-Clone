const what = document.querySelectorAll(".what");

what.forEach(item => {
  const question = item.querySelector(".what-is-net");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});

const how = document.querySelectorAll(".how");

how.forEach(item => {
  const question = item.querySelector(".howMuch");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});
 

const where = document.querySelectorAll(".where");

where.forEach(item => {
  const question = item.querySelector(".whereCan");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});

const cancel = document.querySelectorAll(".cancel");

cancel.forEach(item => {
  const question = item.querySelector(".cancelHow");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});


const watch = document.querySelectorAll(".watch");

watch.forEach(item => {
  const question = item.querySelector(".watchWhat");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});


const kids = document.querySelectorAll(".kids");

kids.forEach(item => {
  const question = item.querySelector(".kidsNet");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "x" : "+";
  });
});
const container = document.querySelector('.container');
const cardWidth = document.querySelector('.card').offsetWidth + 12; // 12px gap

function scrollCarousel(direction) {
  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}
