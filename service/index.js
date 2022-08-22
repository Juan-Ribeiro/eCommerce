import {clientServices} from "./client-service.js";
import {mostrarProductos} from "../controllers/client.product.controller.js";

clientServices.listaProductos()
    .then((data) => mostrarProductos(data))
    .catch((err) => {
        console.log(err);
    });