import React, { useState } from 'react';

const Contactanos = () => {
  // Estado para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState([]);
  const [exito, setExito] = useState(false); // Estado para manejar el mensaje de éxito

  // Funciones de validación
  const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
  const validarEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validarTelefono = (telefono) => /^\d{10}$/.test(telefono);

  // Función para manejar la validación antes de enviar
  const validarCampos = (e) => {
    e.preventDefault(); // Prevenir el envío por defecto

    let erroresValidacion = [];

    // Validaciones para cada campo
    if (!soloLetras(nombre)) {
      erroresValidacion.push('El campo nombre solo puede contener letras y espacios.');
    }

    if (!validarEmail(email)) {
      erroresValidacion.push('El formato del correo electrónico es inválido.');
    }

    if (telefono && !validarTelefono(telefono)) {
      erroresValidacion.push('El campo Teléfono debe contener solo 10 dígitos numéricos.');
    }

    // Si no hay errores, se procede con el envío
    if (erroresValidacion.length === 0) {
      setExito(true); // Activar el mensaje de éxito
      // Limpiar los campos del formulario
      setNombre('');
      setEmail('');
      setTelefono('');
      setMensaje('');
      setErrores([]); // Limpiar los errores
    } else {
      setExito(false); // No hubo éxito, desactivar el mensaje de éxito
      setErrores(erroresValidacion); // Mostrar los errores
    }
  };

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
              <p><i className="fas fa-envelope"></i> sincache@mail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Av. Insurgentes Sur 1079, Col del Valle Sur, Benito Juárez, 03720 Ciudad de México, CDMX</p>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="col-md-7 p-5 d-flex flex-column justify-content-center" style={{ backgroundColor: "#f3e5f5" }}>
            {/* Mostrar alerta de éxito */}
            {exito && (
              <div className="alert alert-success" role="alert">
                ¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.
              </div>
            )}

            {/* Mostrar alerta de errores */}
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
              {/* Campo Nombre */}
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

              {/* Campo Correo Electrónico */}
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

              {/* Campo Teléfono */}
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

              {/* Campo Mensaje */}
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

              {/* Botón de Enviar */}
              <button type="submit" className="btn btn-primary mt-3">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contactanos;
