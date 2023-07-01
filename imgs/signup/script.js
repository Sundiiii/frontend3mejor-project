const signupbtn = document.getElementById("Signupbtn");
const firstname = document.getElementById("firstName");
const lastname = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const loginRedirect = document.getElementById("loginRedirect");


function saveUser(firstn, lastn, emailvl, passwordvl) {
    let userObj = {
        Firstname: firstn,
        Lastname: lastn,
        Email: emailvl,
        Passward: passwordvl,
    };
       // if (localStorage.getItem(users)) {
    //     let users = JSON.parse(localStorage.getItem('users'));
    //     users.push(userobj);
    //     localStorage.setItem('users', JSON.stringify(users));
    // }else{
    //     user=[userobj];
    //     localStorage.setItem('users',JSON.stringify(users));
    // }

    // short code below from 16-24 for 21-28-->
    let users= JSON.parse(localStorage.getItem("users"))||[];
    users.push(userObj);
    localStorage.setItem("users", JSON.stringify(users));
    // afted signup->we are on profilepage so make sessionstorage for loggedinusers-->
    sessionStorage.setItem("loggedinusers", JSON.stringify(userObj));
    firstname.value="";lastname.value="";email.value="";password.value="";
    confirmpassword.value="";
    alert("you are Signedup successfully");
    location.href="./loginpage";
    // after signup successfully we need to go to profile page so do bellow-->

}
  
function checkifuserisunique(email) {
        let users = JSON.parse(localStorage.getItem("users" ));
        let obj = users.find((userobj) => {
            return userobj.Email === email;
        });
        if (obj) return true;else false;
    }
 

signupbtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (firstname.value.trim() === "" ||
        lastname.value.trim() === "" ||
        email.value.trim() === "" ||
        password.value.trim() === "" ||
        confirmpassword.value.trim() === "") {
        alert("all fields are required");
    } else {
        // alert("all field don");
        if (password.value.trim() !== confirmpassword.value.trim()) {
            alert("passward not matching");
            password.value = "";
            confirmpassword.value = "";
        } else {
            if (localStorage.getItem("users")) {
                if (checkifuserisunique(email.value)) {
                    alert("email exist");
                } else {
                    saveUser(firstname.value, lastname.value, email.value, password.value);
                    //     let userobj={
                    //         Firstname:firstnameval,
                    //         Lastname:lastnameval,
                    //         Email:emailval,
                    //         Passward:passwordval,
                    //     }
                    //    let  users=JSON.parse(localStorage.getItem('users'));
                    //    users.push(userobj);
                    //     localStorage.setItem('users',JSON.stringify(users));
                }
            } else {
                saveUser(firstname.value, lastname.value, email.value, password.value);

                // let userobj={
                //     Firstname:firstnameval,
                //     Lastname:lastnameval,
                //     Email:emailval,
                //     Passward:passwordval,
                // }
                // user=[userobj];
                // localStorage.setItem('users',JSON.stringify(users));
            }
        }
    }
});
loginRedirect.addEventListener('click',()=>{
location.href="./loginpage";
});
