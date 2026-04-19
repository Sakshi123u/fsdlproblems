function processString() {
  const text = document.getElementById("inputText").value;

  // Reverse
  const reversed = text.split("").reverse().join("");

  // Uppercase
  const upper = text.toUpperCase();

  // Lowercase
  const lower = text.toLowerCase();

  // Length
  const len = text.length;

  // Display
  document.getElementById("reverse").innerText = "Reverse: " + reversed;
  document.getElementById("upper").innerText = "Uppercase: " + upper;
  document.getElementById("lower").innerText = "Lowercase: " + lower;
  document.getElementById("length").innerText = "Length: " + len;
}