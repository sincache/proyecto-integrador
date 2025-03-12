import React, { useState, useEffect } from 'react';
import opinionesData from '../../assets/opiniones.json';
import { useLocation } from 'react-router-dom';

const Opiniones = () => {
  const [opiniones, setOpiniones] = useState([]);
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [calificacion, setCalificacion] = useState(5);
  const [formVisible, setFormVisible] = useState(false); // Controla si el formulario es visible
  const location = useLocation(); // Aquí obtenemos el objeto de ubicación
  const { titulo } = location.state || {}; // Accedemos al título desde el estado

  // Cargar opiniones desde el JSON
  useEffect(() => {
    setOpiniones(opinionesData);
  }, []);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!nombre || !comentario) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear una nueva opinión
    const nuevaOpinion = {
      id: opiniones.length + 1,
      nombre,
      fecha: new Date().toISOString().split('T')[0],
      comentario,
      calificacion: parseInt(calificacion)
    };

    // Actualizar el estado con la nueva opinión
    setOpiniones([nuevaOpinion, ...opiniones]);

    // Limpiar el formulario
    setNombre('');
    setComentario('');
    setCalificacion(5);
  };

  return (
    <section className="container my-5">
         <h2>{titulo}</h2>

      {/* Botón para mostrar/ocultar el formulario */}
      <button 
        className="btn btn-primary mb-3" // Estilo igual al botón de enviar
        onClick={() => setFormVisible(!formVisible)} // Cambia el estado de formVisible
      >
        {formVisible ? 'Cancelar' : 'Calificar'}
      </button>

      {/* Formulario para agregar opinión, solo visible cuando formVisible es true */}
      {formVisible && (
        <form onSubmit={handleSubmit} className="mb-5">
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Tu nombre" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <textarea 
              className="form-control" 
              placeholder="Escribe tu opinión" 
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              required 
            />
          </div>
          <div className="mb-3">
            <label>Calificación: </label>
            <select 
              className="form-select w-auto d-inline ms-2" 
              value={calificacion}
              onChange={(e) => setCalificacion(e.target.value)}
            >
              <option value="5">5 - Excelente</option>
              <option value="4">4 - Muy bueno</option>
              <option value="3">3 - Bueno</option>
              <option value="2">2 - Regular</option>
              <option value="1">1 - Malo</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Enviar Opinión</button>
        </form>
      )}

      {/* Listado de opiniones */}
      <ul className="list-group">
        {opiniones.map((opinion) => (
          <li key={opinion.id} className="list-group-item color-list-group">
            <h5>{opinion.nombre}</h5>
            <small>{opinion.fecha}</small>
            <p>{opinion.comentario}</p>
            <p>Calificación: {'⭐'.repeat(opinion.calificacion)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Opiniones;
