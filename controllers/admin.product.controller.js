import {clientServices} from "../service/client-service.js";

const crearNuevoContenedorProducto = (urlImagen, nombre, precio, id) => {
    const itemLista = document.createElement("li");
    itemLista.classList.add("producto__contenedor");

    itemLista.innerHTML = `
                    <div class="producto__imagen">
                        <div class="producto__acciones">
                            <button class="producto__acciones__borrar-producto" id="${id}">
                                <img src="../assets/img/icono__borrar-producto.svg" alt="Ícono Borrar Producto">
                            </button>
                            <a href="../screens/actualizar_producto.html?id=${id}">
                                <img src="../assets/img/icono__editar-producto.svg" alt="Ícono Editar Producto">
                            </a>
                        </div>
                        <img src=${urlImagen} alt="Imagen Producto">                        
                    </div>
                    <h3 class="producto__nombre">${nombre}</h3>
                    <h3 class="producto__precio">$${precio}</h3>
    `;

    const btn = itemLista.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        clientServices
            .eliminarProducto(id)
            .then(() => itemLista.remove())
            .catch((err) => {
                console.log(err);
                window.location.href = "../screens/error.html";
            });
    });

    return itemLista;
};

const listaDeProductos = document.querySelector("#todos-los-productos");

clientServices
    .listaProductos()
    .then((data) => {
        data.forEach(({urlImagen, nombre, precio, id}) => {
            listaDeProductos.appendChild(crearNuevoContenedorProducto(urlImagen, nombre, precio, id));
        });
    })
    .catch((err) => console.log(err));