import React, { useState } from 'react';

const Contactanos = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState([]);
  const [exito, setExito] = useState(false);

  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
  const validarEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validarTelefono = (telefono) => /^\d{10}$/.test(telefono);

  const validarCampos = (e) => {
    e.preventDefault();

    let erroresValidacion = [];

    if (!soloLetras(nombre)) {
      erroresValidacion.push('El campo nombre solo puede contener letras y espacios.');
    }

    if (!validarEmail(email)) {
      erroresValidacion.push('El formato del correo electrónico es inválido.');
    }

    if (telefono && !validarTelefono(telefono)) {
      erroresValidacion.push('El campo Teléfono debe contener solo 10 dígitos numéricos.');
    }

    if (erroresValidacion.length === 0) {
      setExito(true);
      setNombre('');
      setEmail('');
      setTelefono('');
      setMensaje('');
      setErrores([]);
    } else {
      setExito(false);
      setErrores(erroresValidacion);
    }
  };

  return (
    <main className="contactanos-container">
      <section className="hero-section-contactanos">
        <div className="container">
          <h6 className="display-4 mb-4">¿En qué podemos ayudarte?</h6>
          <p className="lead" id="Parrafo">
            Si tienes alguna pregunta, sugerencia o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      <div className="container-fluid">
        <div className="row w-75 shadow-lg rounded overflow-hidden">
          {/* Sección de Contacto */}
          <div className="col-md-5 bg-purple-light p-5 d-flex flex-column justify-content-center seccion-contacto">
            <h2 className="mb-4 ml-4 text-center">CONTÁCTANOS</h2>
            <div className="data text-center">
              <p><i className="fas fa-phone-alt"></i> +52 555 555 555</p>
              <p><i className="fas fa-envelope"></i> sincache@mail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Av. Insurgentes Sur 1079, Col del Valle Sur, Benito Juárez, 03720 Ciudad de México, CDMX</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="col-md-7 p-5 d-flex flex-column justify-content-center formulario-contacto">
            {exito && (
              <div className="alert alert-success" role="alert">
                ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
              </div>
            )}

            {errores.length > 0 && (
              <div className="alert alert-danger" role="alert">
                <ul>
                  {errores.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={validarCampos} id="contactForm">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  className="form-control"
                  id="nombre"
                  placeholder="Escribe tu nombre completo"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input
                  type="number"
                  name="telefono"
                  className="form-control"
                  id="telefono"
                  placeholder="(Opcional) Tu número de teléfono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea
                  name="mensaje"
                  className="form-control"
                  id="mensaje"
                  rows="4"
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary mt-3">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contactanos;