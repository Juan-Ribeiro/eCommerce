import {clientServices} from "./client-service.js";

const formularioLogin = document.querySelector("[data-login]");

formularioLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = formularioLogin.querySelector("#login-email").value;
    const password = formularioLogin.querySelector("#login-password").value;

    if (email && password) {
        const usuario = {
            "email": email,
            "password": password
        }
        clientServices.autenticarUsuario(usuario) ?
            window.location.href = "../screens/admin.html"
            : window.location.href = "../screens/error.html";
    }
})
;