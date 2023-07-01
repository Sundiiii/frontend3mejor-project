const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
let currentuser=JSON.parse(sessionStorage.getItem("loggedinusers"));
firstname.innerText=currentuser.Firstname;
lastname.innerText=currentuser.Lastname;
email.innerText=currentuser.Email;