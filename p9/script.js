const list = document.getElementById("list");
const items = document.querySelectorAll("li");

let draggedItem = null;

// When dragging starts
items.forEach(item => {
  item.addEventListener("dragstart", function () {
    draggedItem = this;
    setTimeout(() => {
      this.classList.add("dragging");
    }, 0);
  });

  item.addEventListener("dragend", function () {
    this.classList.remove("dragging");
    draggedItem = null;
  });
});

// Allow drop inside list
list.addEventListener("dragover", function (e) {
  e.preventDefault();

  const afterElement = getDragAfterElement(list, e.clientY);

  if (afterElement == null) {
    list.appendChild(draggedItem);
  } else {
    list.insertBefore(draggedItem, afterElement);
  }
});

// Find position
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll("li:not(.dragging)")];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;

    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}