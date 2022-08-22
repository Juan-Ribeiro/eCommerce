const crearNuevoContenedorProducto = (urlImagen, nombre, precio) => {
    const itemLista = document.createElement("li");
    itemLista.classList.add("producto__contenedor");

    itemLista.innerHTML = `
                    <div class="producto__imagen"><img src=${urlImagen} alt="Imagen Producto">
                    </div>
                    <h3 class="producto__nombre">${nombre}</h3>
                    <h3 class="producto__precio">$${precio}</h3>
                    <a href="" class="producto__enlace-ver-producto">Ver producto</a>
    `;

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
            <a href="#" class="seccion__linea-de-productos__enlace-ver-todo__link">Ver todo</a>
            <img src="../assets/img/icono__flecha.svg" alt="Flecha">
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
                    .appendChild(crearNuevoContenedorProducto(producto.urlImagen, producto.nombre, producto.precio));
            }
        });
        main.appendChild(seccionHTML);
    }
};