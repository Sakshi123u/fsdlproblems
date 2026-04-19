// Load notes on page load
window.onload = function () {
  displayNotes();
};

function getNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function addNote() {
  const input = document.getElementById("noteInput");
  const text = input.value;

  if (text === "") return;

  const notes = getNotes();
  notes.push(text);

  saveNotes(notes);
  input.value = "";

  displayNotes();
}

function deleteNote(index) {
  const notes = getNotes();
  notes.splice(index, 1);

  saveNotes(notes);
  displayNotes();
}

function displayNotes() {
  const container = document.getElementById("notesContainer");
  container.innerHTML = "";

  const notes = getNotes();

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.classList.add("note");

    div.innerHTML = `
      ${note}
      <button class="delete-btn" onclick="deleteNote(${index})">X</button>
    `;

    container.appendChild(div);
  });
}