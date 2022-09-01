import {clientServices} from "../../service/client-service.js";

const generarSeccionHeader = () => {
    const header = document.querySelector("header");
    const seccionHeader = document.createElement("section");
    seccionHeader.classList.add("seccion__header");
    seccionHeader.innerHTML =
        `
        <div class="seccion__header__direccion">
            <a href="index.html">
                <div class="seccion__header__direccion__logo"></div>
            </a>
        </div>
        <i id="boton-barra-busqueda">
            <img src="assets/img/icono__busqueda.svg" alt="Buscar">
        </i>
        <div class="seccion__header__barra-busqueda">
            <form id="formulario-busqueda" class="seccion__header__barra-busqueda__form">
                <i id="boton-volver"
                   class="seccion__header__barra-busqueda__form__boton-volver">
                    <img src="assets/img/icono__flecha-volver.svg" alt="Volver">
                </i>
                <input
                        id="texto-busqueda"
                        type="text"
                        placeholder="¿Qué deseas buscar?"
                        class="seccion__header__barra-busqueda__form__input">
                <button
                        type="submit"
                        id="boton-buscar"
                        class="seccion__header__barra-busqueda__form__boton-submit">
                    <img src="assets/img/icono__busqueda.svg" alt="Buscar" class="barra-busqueda__icono">
                </button>
            </form>
        </div>
    `

    const admin = !!clientServices.verificarAdmin();
    const botonHeader = document.createElement("div");
    botonHeader.id = "boton-header";
    botonHeader.classList.add("boton-blanco");
    botonHeader.classList.add("boton");
    if (admin) {
        botonHeader.textContent = "Menú Administrador";
        seccionHeader.appendChild(botonHeader);
    } else {
        botonHeader.textContent = "Login";
        const linkBoton = document.createElement("a");
        linkBoton.id = "boton-login";
        linkBoton.href = "./login.html";
        linkBoton.appendChild(botonHeader);

        seccionHeader.appendChild(linkBoton);
    }

    header.appendChild(seccionHeader);
};

generarSeccionHeader();