function addSkill() {
  const name = document.getElementById("skillName").value;
  const percent = document.getElementById("skillPercent").value;

  if (name === "" || percent === "") return;

  const container = document.getElementById("skillsContainer");

  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill");

  skillDiv.innerHTML = `
    <span>${name}</span>
    <div class="bar">
      <div class="fill" style="width: ${percent}%"></div>
    </div>
  `;

  container.appendChild(skillDiv);
}