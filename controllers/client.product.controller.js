import {clientServices} from "../service/client-service.js";

const admin = clientServices.verificarAdmin();

const crearNuevoContenedorProducto = (urlImagen, nombre, precio, id) => {
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

const crearNuevaSeccionDeProductos = (categoria) => {
    const seccionDeProductos = document.createElement("section");
    seccionDeProductos.classList.add("seccion__linea-de-productos");

    const contenedorSeccion = document.createElement("div");

    const cabezalSeccion = document.createElement("div");
    cabezalSeccion.classList.add("seccion__linea-de-productos__cabezal");
    cabezalSeccion.innerHTML = `
        <h2 class="seccion__linea-de-productos__cabezal__titulo">${categoria}</h2>
        <div class="seccion__linea-de-productos__enlace-ver-todo">
            <a href="./todos_los_productos.html" class="seccion__linea-de-productos__enlace-ver-todo__link">Ver todo</a>
            <img src="./assets/img/icono__flecha.svg" alt="Flecha">
        </div>
    `

    const listaDeProductos = document.createElement("ul");
    listaDeProductos.classList.add("seccion__linea-de-productos__lista-de-productos");

    contenedorSeccion.appendChild(cabezalSeccion);
    contenedorSeccion.appendChild(listaDeProductos);
    seccionDeProductos.appendChild(contenedorSeccion);

    return seccionDeProductos;
};

export const mostrarProductos = (data) => {
    const main = document.querySelector("main");
    const categorias = [];

    data.forEach((producto) => {
        if (!(producto.categoria in categorias))
            categorias.push(producto.categoria);
    });

    const secciones = {};
    categorias.forEach((categoria) => {
        secciones[categoria] = crearNuevaSeccionDeProductos(categoria);
    });

    for (let seccion in secciones) {
        const seccionHTML = secciones[seccion];
        const listaDeProductos = seccionHTML.querySelector(".seccion__linea-de-productos__lista-de-productos");

        data.forEach((producto) => {
            if (producto.categoria === seccion) {
                listaDeProductos
                    .appendChild
                    (crearNuevoContenedorProducto(producto.urlImagen, producto.nombre, producto.precio, producto.id));
            }
        });
        main.appendChild(seccionHTML);
    }
};