import React from 'react';

const Contactanos = () => {
    return (
        <main>
            <section className="hero-section-contactanos">
                <div className="container justify-content-center">
                    <h6 className="display-4 mb-4">¿En qué podemos ayudarte?</h6>
                    <p className="lead" id="Parrafo">
                        Si tienes alguna pregunta, sugerencia o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte.
                    </p>
                </div>
            </section>

            <div className="container-fluid d-flex align-items-center justify-content-center">
                <div className="row w-75 shadow-lg rounded overflow-hidden">
                    {/* Sección de Contacto */}
                    <div className="col-md-5 bg-dark text-white p-5 d-flex flex-column justify-content-center">
                        <h1 className="mb-4 text-center">CONTÁCTANOS</h1>
                        <div className="data text-center">
                            <p><i className="fas fa-phone-alt"></i> +52 555 555 555</p>
                            <p><i className="fas fa-envelope"></i> sincache@mail.com </p>
                            <p><i className="fas fa-map-marker-alt"></i> Av. Insurgentes Sur 1079, Col del Valle Sur, Benito Juárez, 03720 Ciudad de México, CDMX</p>
                        </div>
                    </div>

                    {/* Formulario de Contacto */}
                    <div className="col-md-7 p-5 d-flex flex-column justify-content-center" style={{ backgroundColor: "#f3e5f5" }}>
                        <form action="https://formsubmit.co/sincahe@mail.com" method="POST" id="contactForm"> 
                        
                            {/* Campo Nombre */}
                            <div className="mb-3">
                                <label htmlFor="nombre" className="form-label">Nombre</label> 
                                <input 
                                    type="text" 
                                    name="nombre" 
                                    className="form-control" 
                                    id="nombre" 
                                    placeholder="Escribe tu nombre completo"
                                    required 
                                />
                            </div>

                            {/* Campo Correo Electrónico */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input 
                                    type="email"  
                                    name="email"  
                                    className="form-control" 
                                    id="email" 
                                    placeholder="tucorreo@ejemplo.com"
                                    required 
                                />
                            </div>

                            {/* Campo Teléfono */}
                            <div className="mb-3">
                                <label htmlFor="telefono" className="form-label">Teléfono</label>
                                <input 
                                    type="number"  
                                    name="telefono" 
                                    className="form-control" 
                                    id="telefono"
                                    placeholder="(Opcional) Tu número de teléfono" 
                                />
                            </div>

                            {/* Campo Mensaje */}
                            <div className="mb-3">
                                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                <textarea 
                                    name="mensaje" 
                                    className="form-control" 
                                    id="mensaje" 
                                    rows="4"
                                    placeholder="Escribe tu mensaje aquí..." 
                                    required
                                ></textarea>
                            </div>

                            {/* Botón de Enviar */}
                            <button id="enviar-formulario" type="submit" className="btn btn-primary mt-3">
                                Enviar Mensaje
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contactanos;
