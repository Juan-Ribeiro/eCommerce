export function validar(input) {
    const tipoDeInput = input.dataset.tipo;

    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    if (!input.validity.valid) {
        let spanMensajeError = input.parentElement.querySelector(".formulario__input__mensaje-error");
        spanMensajeError.innerHTML = mostrarMensajeDeError(tipoDeInput, input);
        spanMensajeError.style.visibility = "visible";
    } else {
        let spanMensajeError = input.parentElement.querySelector(".formulario__input__mensaje-error");
        spanMensajeError.innerHTML = "";
        spanMensajeError.style.visibility = "hidden";
    }
}

const tipoDeErrores = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "customError",
];

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo de nombre no puede estar vacío.",
        patternMismatch: "El campo de nombre no puede contener solo espacios en blanco."
    },
    mensaje: {
        valueMissing: "El campo de mensaje no puede estar vacío.",
        customError: "El campo de mensaje no puede contener solo espacios en blanco."
    },
    email: {
        valueMissing: "El campo de correo no puede estar vacío",
        typeMismatch: "El correo no es válido.",
    },
    password: {
        valueMissing: "El campo contraseña no puede estar vacío",
        patternMismatch:
            "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula," +
            " una letra mayúscula, un número y no puede contener caracteres especiales.",
    },
    urlImagen: {
        valueMissing: "Debe ingresar una imagen para el producto.",
    },
    categoria:{
        valueMissing: "El campo de categoría no puede estar vacío.",
        patternMismatch: "El campo de categoría no puede contener solo espacios en blanco."
    },
    precio: {
        valueMissing: "El campo de precio no puede estar vacío",
        patternMismatch: "El precio debe posser como máximo dos números decimales."
    },
    descripcion: {
        valueMissing: "El campo de descripción no puede estar vacío.",
        customError: "El campo de descripción no puede contener solo espacios en blanco."
    }
}

const validadores = {
    mensaje: (input) => validarAreaDeTexto(input),
    descripcion: (input) => validarAreaDeTexto(input),
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensajeError = "";
    tipoDeErrores.forEach((error) => {
        if (input.validity[error]) {
            mensajeError = mensajesDeError[tipoDeInput][error];
        }
    });
    return mensajeError;
}

function validarAreaDeTexto(input) {
    const valorMensaje = input.value;
    const regex = new RegExp("^(?!\\s*$).+");
    let mensajeError = "";

    if (!regex.test(valorMensaje)) {
        mensajeError = "El mensaje no puede contener solo espacios en blanco.";
    }

    input.setCustomValidity(mensajeError);
}