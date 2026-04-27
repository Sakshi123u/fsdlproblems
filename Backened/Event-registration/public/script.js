
async function addStudent(){
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const event = document.getElementById('event').value;

    await fetch('http://localhost:3000/students',{
        method:'POST',
        headers:{
            "content-Type": "application/json"
        },
        body: JSON.stringify({  name, email, event})
})

alert("student Registered for the event");
loadStudents();
}

async function loadStudent(){
    const response = await fetch("http://localhost:3000/students");
    const students = await response.json();
    const list = document.getElementById("studentsList");
    list.innerHTML = "";
    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `Name: ${student.name}, Email: ${student.email}, Event: ${student.event}`;
        const btn = document.createElement("button");
        btn.classList.add("dele-btn");
        btn.textContent = "Delete";
        li.onclick = async () => {
             await fetch(`http://localhost:3000/students/${student._id}`, {
        method: "DELETE"
    });

            alert("Student deleted successfully");
            loadStudents();
        }
        li.appendChild(btn);
        list.appendChild(li);
    })
}