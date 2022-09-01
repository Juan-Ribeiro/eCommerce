import {clientServices} from "../../service/client-service.js";
import {mostrarProductos} from "../client.product.controller.js";

const mostrarMensajeBusquedaNoEncontrada = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
        <section class="seccion__error">
            <span class="span_error"></span>
            <h1>No se encontraron resultados para la búsqueda realizada</h1>
            <a href="./index.html" class="boton-azul boton">Regresar al inicio</a>
        </section>
    `
};

const cargarDatosDeBusqueda = async () => {
    const busqueda = JSON.parse(localStorage.getItem("search"));
    const productos = await clientServices.listaProductosPorNombre(busqueda);

    if (productos.length > 0) {
        document.querySelector("main").innerHTML = "";
        mostrarProductos(productos);
    } else {
        mostrarMensajeBusquedaNoEncontrada();
    }
};

cargarDatosDeBusqueda();