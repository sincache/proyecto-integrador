import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { linkImage } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const AgregarCurso = () => {
  const [nuevoCurso, setNuevoCurso] = useState({
    courseId: '',
    name: '',
    duration: '',
    CATEGORIA: '',
    level: '',
    linkImage: '',
    dateAdded: '',
  });

  const [error, setError] = useState(null); // Estado para manejar errores
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoCurso({ ...nuevoCurso, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ValcourseIdar datos de entrada
    if (!nuevoCurso.courseId || !nuevoCurso.name || !nuevoCurso.CATEGORIA) {
      setError('Por favor, completa los campos obligatorios.');
      return;
    }

    // ValcourseIdar que el courseId sea único
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const cursoExistente = cursosGuardados.find((curso) => curso.courseId === nuevoCurso.courseId);
    if (cursoExistente) {
      setError('El courseId del curso ya existe. Por favor, usa un courseId único.');
      return;
    }

    // ValcourseIdar que el texto solo contenga letras (opcional)
    const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
    if (!soloLetras(nuevoCurso.CATEGORIA)) {
      setError('La categoría contiene caracteres no permitcourseIdos.');
      return;
    }

    try {
      // Petición API para guardar el curso en la base de datos
      const response = await fetch('http://localhost:8080/api/v1/courses/crearcurso', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCurso), // Enviar el nuevo curso al backend
      });

      if (!response.ok) {
        throw new Error('Error al guardar el curso en la base de datos');
      }

      const data = await response.json();
      console.log('Curso guardado en la base de datos:', data);

      // Guardar en localStorage
      const cursosActualizados = [...cursosGuardados, nuevoCurso];
      localStorage.setItem('cursos', JSON.stringify(cursosActualizados));

      // Redirigir a la página de cursos
      navigate('/Cursos');
    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    }
  };

  return (
    <main className="container my-5">
      <h2 className="mb-4">Agregar Nuevo Curso</h2>
      {error && <Alert variant="danger">{error}</Alert>} {/* Mostrar errores */}
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row g-3">
          <div className="col-md-2">
            <input
              type="text"
              name="courseId"
              placeholder="courseId"
              className="form-control"
              value={nuevoCurso.courseId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              name="CATEGORIA"
              placeholder="Categoría"
              className="form-control"
              value={nuevoCurso.CATEGORIA}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              placeholder="Título"
              className="form-control"
              value={nuevoCurso.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <textarea
              name="duration"
              placeholder="Descripción"
              className="form-control"
              value={nuevoCurso.duration}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="IMAGEN"
              placeholder="URL de la imagen"
              className="form-control"
              value={nuevoCurso.IMAGEN}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="TIEMPO"
              placeholder="Duración"
              className="form-control"
              value={nuevoCurso.TIEMPO}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="level"
              placeholder="level"
              className="form-control"
              value={nuevoCurso.level}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-12">
            <input
              type="text"
              name="linkImage"
              placeholder="linkImage (opcional)"
              className="form-control"
              value={nuevoCurso.linkImage}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-success">
              Guardar Curso
            </button>
          </div>
          <div className="col-md-12 text-end">
            <linkImage to="/Cursos/Eliminar" className="btn btn-danger m-0">
              Eliminar Curso
            </linkImage>
          </div>
        </div>
      </form>
    </main>
  );
};

export default AgregarCurso;