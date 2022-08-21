import {clientServices} from "../service/client-service.js";
import {mostrarProductos} from "./client.product.controller.js"

const formulario = document.querySelector("#formulario-busqueda");

formulario.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const busqueda = formulario.querySelector("#texto-busqueda").value;
    const productos = await clientServices.listaProductosPorNombre(busqueda);

    if (productos.length > 0) {
        const main = document.querySelector("main");
        main.innerHTML = "";

        mostrarProductos(productos);
    }
});

const barraBusqueda = document.querySelector("#texto-busqueda");
const botonBusqueda = document.querySelector("#boton-busqueda");
const widthMatch = window.matchMedia("(max-width: 768px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        botonBusqueda.addEventListener("click", (evento) => {
            evento.preventDefault();
            barraBusqueda.focus();
            barraBusqueda.click();
        });
    }
    else {
        // it no longer matches the media query
        // remove the event listener
    }
});