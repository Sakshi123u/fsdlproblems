const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const bioInput = document.getElementById("bioInput");

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileBio = document.getElementById("profileBio");

nameInput.addEventListener("input",function(){
    profileName.textContent = nameInput.value ||"Your Name";
})

emailInput.addEventListener("input",function(){
    profileEmail.textContent=emailInput.value ||"your@email.com";
})

bioInput.addEventListener("input",function(){ 
    profileBio.textContent = bioInput.value ||"Your bio goes here...";
})