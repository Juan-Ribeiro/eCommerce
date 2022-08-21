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
    } else {
        window.location.href = "../screens/error.html";
    }
});
