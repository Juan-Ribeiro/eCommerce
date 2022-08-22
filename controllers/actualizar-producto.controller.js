import {clientServices} from "../service/client-service.js";

const formularioProducto = document.querySelector("[data-form-producto]");

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        window.location.href = "./error.html";
    }

    const categoria = document.querySelector("#input-producto-categoria");
    const urlImagen = document.querySelector("#input-url-imagen");
    const nombre = document.querySelector("#input-producto-nombre");
    const precio = document.querySelector("#input-producto-precio");
    const descripcion = document.querySelector("#input-producto-descripcion");

    try {
        const perfil = await clientServices.detalleProducto(id);
        if (perfil.categoria && perfil.urlImagen && perfil.nombre && perfil.precio && perfil.descripcion) {
            categoria.value = perfil.categoria;
            urlImagen.value = perfil.urlImagen;
            nombre.value = perfil.nombre;
            precio.value = perfil.precio;
            descripcion.value = perfil.descripcion;
        } else {
            throw new Error();
        }
    } catch (e) {
        window.location.href = "./error.html";
        console.log(e)
    }
};

obtenerInformacion();

formularioProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const categoria = document.querySelector("#input-producto-categoria").value;
    const urlImagen = document.querySelector("#input-url-imagen").files[0].value;
    const nombre = document.querySelector("#input-producto-nombre").value;
    const precio = document.querySelector("#input-producto-precio").value;
    const descripcion = document.querySelector("#input-producto-descripcion").value;

    console.log(nombre);
    clientServices.actualizarProducto(categoria, urlImagen, nombre, precio, descripcion, id)
        .then(() => {
        window.location.href = "./edicion_concluida.html";
    });
});
