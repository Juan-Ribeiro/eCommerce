import {validar} from "./validaciones.js";

const inputs = document.querySelectorAll("[data-tipo]");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    });
});