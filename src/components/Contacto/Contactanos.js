// src/components/Footer.js
import React from 'react';

const Contactanos = () => {

    return (
        <main>
            <section class="hero-section-contactanos">
                <div class="container justify-content-center">
                    <h6 class="display-4 mb-4">¿En qué podemos ayudarte?</h6>
                    <p class="lead" id="Parrafo"> Si tienes alguna pregunta, sugerencia o necesitas más información, no
                        dudes en contactarnos. Estamos aquí para ayudarte. </p>
                </div>
            </section>

            <div class="container-fluid d-flex align-items-center justify-content-center">
                <div class="row w-75 shadow-lg rounded overflow-hidden">
                    <div class="col-md-5 bg-dark text-white p-5 d-flex flex-column justify-content-center">
                        <h1 class="mb-4 text-center">CONTÁCTANOS</h1>
                        <div class="data text-center">
                            <p><i class="fas fa-phone-alt"></i> +52 555 555 555</p>
                            <p><i class="fas fa-envelope"></i> sincache@mail.com </p>
                            <p><i class="fas fa-map-marker-alt"></i> Av. Insurgentes Sur 1079, Col del Valle Sur, Benito Juárez, 03720 Ciudad de México, CDMX</p>
                        </div>
                    </div>

                    <div class="col-md-7 bg-purple-light p-5 d-flex flex-column justify-content-center">
                        <form action="https://formsubmit.co/sincahe@mail.com" method="POST" id="contactForm"> 
                        
                        {/* <!-- Campo Nombre --> */}
                        <div class="mb-3">
                            <label for="nombre" class="form-label">Nombre</label> 
                            <input type="text" name="nombre" class="form-control" id="nombre" placeholder="Escribe tu nombre completo"
                                required></input>
                        </div>

                        {/* <!-- Campo Correo Electrónico --> */}
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo Electrónico</label>
                            <input type="email"  name="email"  class="form-control" id="email" placeholder="tucorreo@ejemplo.com"
                                required></input>
                        </div>

                        {/* <!-- Campo Teléfono --> */}
                        <div class="mb-3">
                            <label for="telefono" class="form-label">Teléfono</label>
                            <input type="number"  name="telefono" class="form-control" id="telefono"
                                placeholder="(Opcional) Tu número de teléfono"></input>
                        </div>

                        {/* <!-- Campo Mensaje --> */}
                        <div class="mb-3">
                            <label for="mensaje" class="form-label">Mensaje</label>
                            <textarea name="mensaje" class="form-control" id="mensaje" rows="4"
                                placeholder="Escribe tu mensaje aquí..." required></textarea>
                        </div>

                        {/* <!-- Botón de Enviar --> */}
                        
                        <button id="enviar-formulario" type="submit" class="btn btn-accent mt-3">Enviar Mensaje</button>

                        </form>


                    </div>

                </div>
            </div>

        </main>


    );
};

export default Contactanos;
