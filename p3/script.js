const prices = {
  monthly: 10,
  yearly: 100 // discounted price
};

function setPlan(type) {
  const priceElement = document.getElementById("price");
  const planElement = document.getElementById("planName");

  if (type === "monthly") {
    priceElement.textContent = "$" + prices.monthly;
    planElement.textContent = "Basic Plan (Monthly)";

    document.getElementById("monthlyBtn").classList.add("active");
    document.getElementById("yearlyBtn").classList.remove("active");
  } else {
    priceElement.textContent = "$" + prices.yearly;
    planElement.textContent = "Basic Plan (Yearly - Save 20%)";

    document.getElementById("yearlyBtn").classList.add("active");
    document.getElementById("monthlyBtn").classList.remove("active");
  }
}