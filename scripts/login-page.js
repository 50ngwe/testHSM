const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    //connect to the db and check credentials
    //I will have to encrypt this at some point
    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
        //after a successful login, check role and display assigned view
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})