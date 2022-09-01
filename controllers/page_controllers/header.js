import {clientServices} from "../../service/client-service.js";

const admin = await clientServices.verificarAdmin();

const implementarFuncionBotonAdministrador = (botonAdministrador) => {
    botonAdministrador.addEventListener("click", (evento) => {
        evento.preventDefault();

        const abandonaAdmin = window.confirm("¿Está seguro de querer cerrar sesión y abandonar el Modo Administrador?");

        if (abandonaAdmin) {
            clientServices.retirarAdmin();
            location.reload();
        }
    });

    botonAdministrador.addEventListener("mouseenter", () => {
        botonAdministrador.innerHTML = "Cerrar Sesión";
    });

    botonAdministrador.addEventListener("mouseleave", () => {
        botonAdministrador.innerHTML = "Modo Administrador";
    });
};

const implementarFuncionesDeBarraBusqueda = (seccionHeader) => {
    const iconoBusqueda = seccionHeader.querySelector("#boton-barra-busqueda");
    const botonHeader = seccionHeader.querySelector("#boton-header");
    const botonInicio = seccionHeader.querySelector(".seccion__header__direccion");
    const formulario = seccionHeader.querySelector("#formulario-busqueda");
    const barraBusqueda = seccionHeader.querySelector(".seccion__header__barra-busqueda");
    const botonVolver = seccionHeader.querySelector("#boton-volver");
    const textoBusqueda = seccionHeader.querySelector("#texto-busqueda");

    iconoBusqueda.addEventListener("click", () => {
        botonInicio.style.display = "none";
        iconoBusqueda.style.display = "none";
        botonHeader.style.display = "none";

        barraBusqueda.style.flexGrow = "1";
        barraBusqueda.style.display = "flex";
        botonVolver.style.display = "flex";
        formulario.style.display = "flex";
        textoBusqueda.style.display = "flex"
    });

    botonVolver.addEventListener('click', () => {
        botonInicio.style.display = "flex";
        iconoBusqueda.style.display = "flex";
        botonHeader.style.display = "flex";

        barraBusqueda.style.flexGrow = "0";
        barraBusqueda.style.display = "none";
        botonVolver.style.display = "none";
        formulario.style.display = "none";
        textoBusqueda.style.display = "none";
    });

};

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
        </div>`

    implementarFuncionesDeBarraBusqueda(seccionHeader);

    const botonHeader = document.createElement("div");
    botonHeader.classList.add("boton-blanco");
    botonHeader.classList.add("boton");
    if (admin) {
        botonHeader.textContent = "Modo Administrador";
        botonHeader.id = "boton-administrador";
        implementarFuncionBotonAdministrador(botonHeader);
        seccionHeader.appendChild(botonHeader);
    } else {
        botonHeader.textContent = "Login";
        botonHeader.id = "boton-login";

        const linkBoton = document.createElement("a");
        linkBoton.href = "./login.html";
        linkBoton.appendChild(botonHeader);

        seccionHeader.appendChild(linkBoton);
    }

    header.appendChild(seccionHeader);
};

generarSeccionHeader();