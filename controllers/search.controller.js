const formulario = document.querySelector("#formulario-busqueda");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const busqueda = formulario.querySelector("#texto-busqueda").value;
    if (busqueda !== "" && busqueda.length > 0) {
        localStorage.setItem("search", JSON.stringify(busqueda));
        window.location.href = "../resultados_busqueda.html";
    }
});