const apiURL = "https://62f8d0fc3eab3503d1dbb530.mockapi.io/";

const listaProductos = () => {
    return fetch(apiURL + "products")
        .then((respuesta) => respuesta.json());
};

const agregarProducto = (categoria, urlImagen, nombre, precio, descripcion) => {
    return fetch(apiURL + "products", {
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
        const data = await obtenerUsuarios();+
        data.forEach((user) => {
            if (user.email === user.email && usuario.password === usuario.password) {
                establecerCookie(user.id);
                return true;
            }
        });
        return false;
    } catch (e) {
        console.log("Email o clave inválidos. Intente nuevamente.");
    }
    return false;
};

const verificarAdmin = async () => {
    try {
        const cookieID = obtenerCookie("admin");
        const data = await obtenerUsuarios();
        data.forEach((user) => {
            if (user.id === cookieID) {
                return true;
            }
        });
    } catch (e) {
        console.log(e);
    }
    return false;
};

const establecerCookie = (id) => {
    document.cookie = `admin=${id}`;
};

const obtenerCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const clientServices = {
    listaProductos,
    agregarProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
    listaProductosPorNombre,
    obtenerUsuarios,
    autenticarUsuario,
    establecerCookie,
    verificarAdmin,
};