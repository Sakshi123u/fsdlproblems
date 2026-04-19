const container = document.getElementById("productContainer");

// Step 1: Fetch JSON data
fetch("products.json")
  .then(response => response.json())
  .then(products => {
    
    // Step 2: Loop through products
    products.forEach(product => {

      // Step 3: Create card
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${product.image}" />
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="buyNow('${product.name}')">Buy Now</button>
      `;

      container.appendChild(card);
    });

  });

// Step 4: Buy Now interaction
function buyNow(productName) {
  alert(productName + " added to cart!");
}