import {generarSeccionHeader} from "./header.js";
import {clientServices} from "../../service/client-service.js";

const admin = clientServices.verificarAdmin();

const generarSeccionTodosLosProductos = () => {
    const main = document.querySelector("main");

    const seccionTodosLosProductos = document.createElement("section");
    seccionTodosLosProductos.classList.add("seccion__todos-los-productos");

    const cabezalSeccion = document.createElement("div");
    cabezalSeccion.classList.add("seccion__todos-los-productos__cabezal");
    cabezalSeccion.innerHTML =
        `
            <h3>Todos los productos</h3>
        `;

    if (admin) {
        const botonAgregarProducto = document.createElement("a");
        botonAgregarProducto.href = "./agregar_producto.html";
        botonAgregarProducto.textContent = "Agregar producto";
        botonAgregarProducto.classList.add("boton-azul");
        botonAgregarProducto.classList.add("boton");

        cabezalSeccion.appendChild(botonAgregarProducto);
    }

    const listaProductos = document.createElement("ul");
    listaProductos.classList.add("seccion__todos-los-productos__lista-productos");

    clientServices.listaProductos()
        .then((data) => {
            data.forEach((producto) => {
                const contenedorProducto =
                    crearNuevoContenedorProducto(producto.urlImagen, producto.nombre, producto.precio, producto.id);
                listaProductos.appendChild(contenedorProducto);
            });
        })
        .catch((e) => console.log(e));

    seccionTodosLosProductos.appendChild(cabezalSeccion);
    seccionTodosLosProductos.appendChild(listaProductos);

    main.appendChild(seccionTodosLosProductos);
};

export const crearNuevoContenedorProducto = (urlImagen, nombre, precio, id) => {
    const itemLista = document.createElement("li");
    itemLista.classList.add("producto__contenedor");

    itemLista.innerHTML = `
                    <div class="producto__imagen"><img src=${urlImagen} alt="Imagen Producto">
                    </div>
                    <h3 class="producto__nombre">${nombre}</h3>
                    <h3 class="producto__precio">$${precio}</h3>
                    <a href="./producto.html?id=${id}" class="producto__enlace-ver-producto">Ver producto</a>
    `;

    if (admin) {
        const accionesAdmin = document.createElement("div");
        accionesAdmin.classList.add("producto__acciones");
        accionesAdmin.innerHTML =
            `
            <button class="producto__acciones__borrar-producto" id="${id}"></button>
            <a href="./actualizar_producto.html?id=${id}">
                <img src="./assets/img/icono__editar-producto.svg" alt="Ícono Editar Producto">
            </a>
            `;

        const btn = accionesAdmin.querySelector("button");
        btn.addEventListener("click", () => {
            const id = btn.id;
            clientServices
                .eliminarProducto(id)
                .then(() => itemLista.remove())
                .catch((err) => {
                    console.log(err);
                    window.location.href = "./error.html";
                });
        });

        // Agregar elementos de acciones de administrador al contenedor de productos
        itemLista.querySelector(".producto__imagen").appendChild(accionesAdmin);
    }
    return itemLista;
};

generarSeccionHeader();
generarSeccionTodosLosProductos();
