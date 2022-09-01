import {clientServices} from "../../service/client-service.js";

const formularioLogin = document.querySelector("[data-login]");
formularioLogin.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const email = formularioLogin.querySelector("#login-email").value;
    const password = formularioLogin.querySelector("#login-password").value;

    if (email && password) {
        const usuario = {
            "email": email,
            "password": password
        }
        const autenticado = await clientServices.autenticarUsuario(usuario);
        autenticado ? window.location.href = "./index.html" : window.location.href = "./error.html";
    }
})
;