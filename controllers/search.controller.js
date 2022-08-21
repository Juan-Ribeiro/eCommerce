import {clientServices} from "../service/client-service.js";
import {mostrarProductos} from "./client.product.controller.js"

const formulario = document.querySelector("#formulario-busqueda");
const barraBusqueda = document.querySelector("#texto-busqueda");
const botonBusqueda = document.querySelector("#boton-busqueda");
const widthMatch = window.matchMedia("(max-width: 768px)");

widthMatch.addEventListener('change', function (mm) {
    if (mm.matches) {
        botonBusqueda.addEventListener("click", enfocarBarraDeBusqueda);
    } else {
        botonBusqueda.removeEventListener("click", enfocarBarraDeBusqueda);
    }
});

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

function enfocarBarraDeBusqueda(evento) {
    evento.preventDefault();
    barraBusqueda.focus();
    barraBusqueda.click();
}