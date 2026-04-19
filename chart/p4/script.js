// Subjects
const subjects = ["Math", "Science", "English", "History"];

// 📊 Marks (Bar Chart)
new Chart(document.getElementById("marksChart"), {
  type: "bar",
  data: {
    labels: subjects,
    datasets: [{
      label: "Marks",
      data: [85, 90, 78, 88]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// 📈 Attendance (Line Chart)
new Chart(document.getElementById("attendanceChart"), {
  type: "line",
  data: {
    labels: ["Week1", "Week2", "Week3", "Week4"],
    datasets: [{
      label: "Attendance %",
      data: [80, 85, 90, 95],
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});

// 🥧 Progress (Pie Chart)
new Chart(document.getElementById("progressChart"), {
  type: "doughnut",
  data: {
    labels: ["Completed", "Remaining"],
    datasets: [{
      data: [70, 30]
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false
  }
});