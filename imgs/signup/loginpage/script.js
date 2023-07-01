const email = document.getElementById("email");
const password = document.getElementById("password");
const loginbtn = document.getElementById("loginbtn");
loginbtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (email.value.trim() === "" ||
        password.value.trim() === "") {
        alert("fill all field");
    } else {
        let users = JSON.parse(localStorage.getItem("users"));
        if (users) {
            let user = users.find((currentuser) => {
                return currentuser.Email === email.value.trim();
            });
            if (user) {
                if (password.value.trim() === user.Passward
                ) {
                    //if psw and email is save in localstorage take to profile page-->
                    sessionStorage.setItem('loggedinusers', JSON.stringify("user"));
                    // location.href = "../profile";
                    location.href = "../shop";
                    alert("login successfully");
                }
                else {
                    alert("incorrect passward");
                }
            } else {
                alert("you have not signed-up");
            }
        } else {
            alert("you have not signed-up");
        }
    }
})
