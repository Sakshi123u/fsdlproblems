const input = document.getElementById("search");

input.addEventListener("keyup", function () {

  const value = input.value.toLowerCase();
  const rows = document.querySelectorAll("tbody tr");

  rows.forEach(function(row) {
    const text = row.innerText.toLowerCase();

    if (text.includes(value)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });

});