const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){

event.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirmPassword").value;

if(name === "" || email === "" || password === "" || confirmPassword === ""){
message.style.color = "red";
message.textContent = "All fields are required.";
return;
}

if(password.length < 6){
message.style.color = "red";
message.textContent = "Password must be at least 6 characters.";
return;
}

if(password !== confirmPassword){
message.style.color = "red";
message.textContent = "Passwords do not match.";
return;
}

message.style.color = "green";
message.textContent = "Account created successfully!";

form.reset();

});
