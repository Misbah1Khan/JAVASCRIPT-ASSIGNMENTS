let name = prompt("Enter your Name: ");
let num = +prompt("Enter your Phone Number: ");
let email = prompt("Enter your Email: ");
let pass = prompt("Enter your Password: ");
let conPass = prompt("Enter your Confirm Password: ");

if (!name || !num || !email || !pass || !pass || !conPass) {
    alert("Error, Please fill all fields");

} else if (pass !== conPass) {
    alert("Wrong Password!!");
}
else {
    alert("Congratulations!! Successfully Register.");
}

