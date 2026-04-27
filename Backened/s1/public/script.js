async function addStudent(){
    const name = document.getElementById("Name").value;
    const rollNo = document.getElementById("rollNo").value;
    const branch = document.getElementById("Branch").value;

    await fetch("http://localhost:3000/students",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify({name,rollNo,branch})
    } );

    alert("Student added successfully");
    loadStudents();
}

async function loadStudents(){
    const response = await fetch("http://localhost:3000/students");
    const students = await response.json();

    const list = document.getElementById("list");
    list.innerHTML = "";

    students.forEach(student => {
        const li = document.createElement("li");
        li.textContent = `Name: ${student.name}, Roll No: ${student.rollNo}, Branch: ${student.branch}`;
        list.appendChild(li);
    });
}