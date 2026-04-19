const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut", // change to "pie" if needed
  data: {
    labels: ["Present", "Absent", "Leave"],
    datasets: [{
      label: "Attendance",
      data: [60, 25, 15]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});