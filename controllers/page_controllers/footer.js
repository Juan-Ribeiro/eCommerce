const generarSeccionesFooter = () => {
    const footer = document.querySelector("footer");
    footer.innerHTML =
        `
            <section class="seccion__about">
                <div class="seccion__about__links">
                    <div class="seccion__about__logo"></div>
                    <ul class="seccion__about__links__lista">
                        <li class="about__enlace"><a href="#">Quiénes somos</a></li>
                        <li class="about__enlace"><a href="#">Política de privacidad</a></li>
                        <li class="about__enlace"><a href="#">Programa de fidelidad</a></li>
                        <li class="about__enlace"><a href="#">Nuestras tiendas</a></li>
                        <li class="about__enlace"><a href="#">Quiero ser franquiciado</a></li>
                        <li class="about__enlace"><a href="#">Anúncie aquí</a></li>
                    </ul>
                </div>
                <form class="seccion__contacto__formulario">
                    <h3>Hable con nosotros</h3>
                    <fieldset>
                        <div class="formulario__campo">
                            <label for="input-nombre" class="formulario-contacto__label" type="text">Nombre</label>
                            <input id="input-nombre" class="formulario__input" data-tipo="nombre" type="text"
                                   maxlength="40" pattern="^(?!\\s*$).+" required>
                            <span class="formulario__input__mensaje-error"></span>
                        </div>
                        <div class="formulario__campo">
                            <label for="input-mensaje" class="formulario-contacto__label">Escribe tu mensaje</label>
                            <textarea id="input-mensaje" class="formulario__input" data-tipo="mensaje" type="text"
                                      required rows="4" maxlength="120"></textarea>
                            <span class="formulario__input__mensaje-error"></span>
                        </div>
                    </fieldset>
                    <button id="boton-enviar" class="boton-azul boton">Enviar mensaje</button>
                </form>
            </section>
            <section class="footer__creditos">
                <a href="https://github.com/Juan-Ribeiro" class="footer__creditos__texto">Desarrollado por Juan Elias Ribeiro <br> 2022</a>
            </section>
        `
}

generarSeccionesFooter();