const Notices = document.querySelectorAll(".Notices");

Notices.forEach(item => {
  const question = item.querySelector(".Notice");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    item.classList.toggle("active");
    icon.textContent = item.classList.contains("active") ? "▲" : "▼";
  });
});

