import {clientServices} from "../service/client-service.js";

const formularioProducto = document.querySelector("[data-form-producto]");

formularioProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    console.log(evento);

    const categoria = document.querySelector("#input-producto-categoria").value;
    const urlImagen = document.querySelector("#input-url-imagen").value;
    const nombre = document.querySelector("#input-producto-nombre").value;
    const precio = document.querySelector("#input-producto-precio").value;
    const descripcion = document.querySelector("#input-producto-descripcion").value;

    clientServices
        .agregarProducto(categoria, urlImagen, nombre, precio, descripcion)
        .then(() => {
            console.log("Producto agregado");
        })
        .catch((err) => console.log(err));
});