let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),

    errorMsg = classes("error"),
    successIcon = classes("successIcon"),
    failureIcon = classes("failureIcon");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Le nom d'utilisateur ne peut pas etre vide");
    engine(email, 1, "L'email ne peut pas etre vide");
    engine(password, 2, "Le Mot de passe ne peut pas etre vide");
});

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}