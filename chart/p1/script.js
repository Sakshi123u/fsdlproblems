const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["CSE", "IT", "ECE", "ME"],
    datasets: [{
      label: "Number of Students",
      data: [50, 40, 30, 20]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});