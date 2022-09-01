import {clientServices} from "../service/client-service.js";

const admin = await clientServices.verificarAdmin();
if (!admin) {
    window.location.href = "./error.html";
}

const formularioProducto = document.querySelector("[data-form-producto]");

formularioProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const categoria = document.querySelector("#input-producto-categoria").value;
    const urlImagen = document.querySelector("#input-url-imagen").value;
    const nombre = document.querySelector("#input-producto-nombre").value;
    const precio = document.querySelector("#input-producto-precio").value;
    const descripcion = document.querySelector("#input-producto-descripcion").value;

    clientServices
        .agregarProducto(categoria, urlImagen, nombre, precio, descripcion)
        .catch((err) => console.log(err));
});