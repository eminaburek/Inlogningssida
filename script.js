let root = document.getElementById("root");
let loginPage = document.createElement("div");
let header = document.createElement("header");
loginPage.appendChild(header);
let logo = document.createElement("h1");
header.appendChild(logo);
logo.innerText = "Login!";

let userNameLabel = document.createElement("label");
userNameLabel.innerText = "Username";
loginPage.appendChild(userNameLabel);
let inputUsername = document.createElement("input");
loginPage.appendChild(inputUsername);
let passwordLabel = document.createElement("label");
passwordLabel.innerText = "Password";
loginPage.appendChild(passwordLabel);
let inputPassword = document.createElement("input");
loginPage.appendChild(inputPassword);
let loginButton = document.createElement("button");
loginButton.innerText = "Login";
loginPage.appendChild(loginButton);
root.appendChild(loginPage);

let welcomePage = document.createElement("div");
let welcomeHeader = document.createElement("header");
welcomePage.appendChild(welcomeHeader);
let welcomeLogo = document.createElement("h1");
welcomeLogo.innerText = "Welcome!";
welcomeHeader.appendChild(welcomeLogo);
let logOutButton = document.createElement("button");
logOutButton.innerText = "Log out";
welcomePage.appendChild(logOutButton);
welcomePage.style.display = "none";
root.appendChild(welcomePage);

let errorPage = document.createElement("div");
let errorHeader = document.createElement("header");
errorPage.appendChild(errorHeader);
let errorLogo = document.createElement("h1");
errorHeader.appendChild(errorLogo);
errorLogo.innerText = "Error!";
let errorMessage = document.createElement("p");
errorMessage.innerText = "Please try again!";
errorPage.appendChild(errorMessage);
let backToLoginBtn = document.createElement("button");
backToLoginBtn.innerText = "Get to login";
errorPage.appendChild(backToLoginBtn);
errorPage.style.display = "none";
root.appendChild(errorPage);

let usernameFromLocalStorage = localStorage.getItem("username"); 
let passwordFromLocalStorage = localStorage.getItem("password");

if(usernameFromLocalStorage == "test" && passwordFromLocalStorage == "1234"){
    welcomePage.style.display = "block";
    loginPage.style.display = "none";
}

loginButton.addEventListener("click", function(){
    if(inputUsername.value == "test" && inputPassword.value == "1234"){
        let username = inputUsername.value;
        localStorage.setItem("username", username); 
        let password = inputPassword.value;
        localStorage.setItem("password", password);
        welcomePage.style.display = "block";
        loginPage.style.display = "none";
    }
    else{
        loginPage.style.display = "none";
        errorPage.style.display = "block";
        backToLoginBtn.addEventListener("click", function(){
            loginPage.style.display = "block";
            errorPage.style.display = "none";
            inputUsername.value = "";
            inputPassword.value = "";
        })
    }

})

logOutButton.addEventListener("click", function(){
    loginPage.style.display = "block";
    welcomePage.style.display = "none";
    localStorage.removeItem("username");
    localStorage.removeItem("password");
})


















