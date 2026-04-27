const list = document.getElementById("list");

list.addEventListener("dragstart", e => {
  e.target.classList.add("dragging");
});

list.addEventListener("dragend", e => {
  e.target.classList.remove("dragging");
});

list.addEventListener("dragover", e => {
  e.preventDefault();

  const dragging = document.querySelector(".dragging");
  const items = list.querySelectorAll("li:not(.dragging)");

  let next = null;

  items.forEach(item => {
    const middle = item.offsetTop + item.offsetHeight / 2;

    if (e.clientY < middle && !next) {
      next = item;
    }
  });

  list.insertBefore(dragging, next);
});