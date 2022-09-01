const iconoBusqueda = document.querySelector("#boton-barra-busqueda");
const botonHeader = document.querySelector("#boton-header");
const botonInicio = document.querySelector(".seccion__header__direccion");
const formulario = document.querySelector("#formulario-busqueda");
const barraBusqueda = document.querySelector(".seccion__header__barra-busqueda");
const botonVolver = document.querySelector("#boton-volver");
const textoBusqueda = document.querySelector("#texto-busqueda");

iconoBusqueda.addEventListener("click", mostrarBarraBusquedaMobile);
botonVolver.addEventListener('click', ocultarBarraBusquedaMobile);

function mostrarBarraBusquedaMobile() {
    botonInicio.style.display = "none";
    iconoBusqueda.style.display = "none";
    botonHeader.style.display = "none";

    barraBusqueda.style.flexGrow = "1";
    barraBusqueda.style.display = "flex";
    botonVolver.style.display = "flex";
    formulario.style.display = "flex";
    textoBusqueda.style.display = "flex"
}

function ocultarBarraBusquedaMobile() {
    botonInicio.style.display = "flex";
    iconoBusqueda.style.display = "flex";
    botonHeader.style.display = "flex";

    barraBusqueda.style.flexGrow = "0";
    barraBusqueda.style.display = "none";
    botonVolver.style.display = "none";
    formulario.style.display = "none";
    textoBusqueda.style.display = "none";
}