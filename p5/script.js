const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Step 1: Load saved theme from localStorage
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add("light"); // default theme
}

// Step 2: Toggle theme on button click
toggleBtn.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});