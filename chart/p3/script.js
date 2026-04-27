// Common labels (days)
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// 📈 Line Chart (Temperature)
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: days,
    datasets: [{
      label: "Temperature (°C)",
      data: [30, 32, 31, 29, 28, 27, 26],
      
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// 📊 Bar Chart (Humidity)
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: days,
    datasets: [{
      label: "Humidity (%)",
      data: [60, 65, 70, 75, 80, 85, 78]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// 🥧 Pie Chart (Weather distribution)
new Chart(document.getElementById("pieChart"), {
  type: "doughnut",
  data: {
    labels: ["Sunny", "Cloudy", "Rainy"],
    datasets: [{
      data: [3, 2, 2]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});