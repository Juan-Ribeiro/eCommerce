import {clientServices} from "../../service/client-service.js";
import {mostrarProductos} from "../client.product.controller.js";


clientServices.listaProductos()
    .then((data) => mostrarProductos(data))
    .catch((err) => {
        console.log(err);
    });