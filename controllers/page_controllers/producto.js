import {clientServices} from "../../service/client-service.js";

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        window.location.href = "./error.html";
    }

    const imagen = document.querySelector(".seccion__producto__imagen");
    const nombre = document.querySelector(".seccion__producto__nombre");
    const precio = document.querySelector(".seccion__producto__precio");
    const descripcion = document.querySelector(".seccion__producto__descripcion");

    try {
        const perfil = await clientServices.detalleProducto(id);
        if (perfil.categoria && perfil.urlImagen && perfil.nombre && perfil.precio && perfil.descripcion) {
            imagen.src = perfil.urlImagen;
            nombre.textContent = perfil.nombre;
            precio.textContent = "$ " + perfil.precio;
            descripcion.textContent = perfil.descripcion;
        } else {
            throw new Error();
        }
    } catch (e) {
        window.location.href = "./error.html";
        console.log(e);
    }
};

obtenerInformacion();