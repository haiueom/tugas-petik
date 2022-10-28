const title = document.createElement("title");
const heading = document.createElement("h1");
const inputUsername = document.createElement("input");
const inputPassword = document.createElement("input");
const buttonLogin = document.createElement("button");

inputUsername.setAttribute("name", "username");
inputUsername.setAttribute("type", "text");
inputUsername.setAttribute("placeholder", "Username");

inputPassword.setAttribute("name", "password");
inputPassword.setAttribute("type", "password");
inputPassword.setAttribute("placeholder", "Password");

buttonLogin.setAttribute("type", "submit");
buttonLogin.addEventListener("click", function() {
    alert("Berhasil login");
});

title.appendChild(document.createTextNode("Pertemuan 01 Pemograman Javascript"));
buttonLogin.appendChild(document.createTextNode("Login"));
heading.appendChild(document.createTextNode("Login"));

document.head.appendChild(title);
document.body.appendChild(heading);
document.body.appendChild(inputUsername);
document.body.appendChild(inputPassword);
document.body.appendChild(buttonLogin);
