function filterProducts(category) {
  const items = document.querySelectorAll(".card");

  items.forEach(item => {
    if (category === "all") {
      item.classList.remove("hide");
    } else {
      if (item.classList.contains(category)) {
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
      }
    }
  });
}