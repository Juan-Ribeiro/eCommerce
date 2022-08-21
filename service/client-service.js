const apiURL = "https://62f8d0fc3eab3503d1dbb530.mockapi.io/";

const listaProductos = () => {
    return fetch(apiURL + "products")
        .then((respuesta) => respuesta.json());
};

// CREATE
const agregarProducto = (categoria, urlImagen, nombre, precio, descripcion) => {
    return fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({categoria, urlImagen, nombre, precio, descripcion, id: uuid.v4(),}),
    });
}

const eliminarProducto = (id) => {
    return fetch(apiURL + `products/${id}`, {
        method: "DELETE",
    });
};

const detalleProducto = (id) => {
    return fetch(apiURL + `products/${id}`)
        .then((respuesta) => respuesta.json())
        .catch((err) => console.log(err));
};

const actualizarProducto = (categoria, urlImagen, nombre, precio, descripcion, id) => {
    return fetch((apiURL + `products/${id}`), {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({categoria, urlImagen, nombre, precio, descripcion}),
    })
        .then((respuesta) => respuesta)
        .catch((err) => console.log(err));
};

const listaProductosPorNombre = async (nombre) => {
    const productos = [];
    const data = await listaProductos();

    data.forEach((producto) => {
        if (producto.nombre === nombre) {
            productos.push(producto);
        }
    });

    return productos;
};

const obtenerUsuarios = () => {
    return fetch(apiURL + "users",)
        .then((respuesta) => respuesta.json())
};

const autenticarUsuario = async (usuario) => {
    try {
        const data = await obtenerUsuarios();
        data.forEach((user) => {
            if (user.email === user.email && usuario.password === usuario.password) {
                return true;
            }
        });
    } catch (e) {
        console.log("Email o clave inválidos. Intente nuevamente.");
    }
    return false;
};

export const clientServices = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    listaProductosPorNombre,
    obtenerUsuarios,
    autenticarUsuario,
};