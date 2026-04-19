let quantity = 1;
const price = 50000;

function updateTotal() {
  document.getElementById("quantity").innerText = quantity;
  document.getElementById("total").innerText = quantity * price;
}

function increase() {
  quantity++;
  updateTotal();
}

function decrease() {
  if (quantity > 1) {
    quantity--;
    updateTotal();
  }
}