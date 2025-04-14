import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EliminarCurso = () => {
  const [idBusqueda, setIdBusqueda] = useState('');
  const [cursoEncontrado, setCursoEncontrado] = useState(null);
  const [errorBusqueda, setErrorBusqueda] = useState('');
  const navigate = useNavigate();

  // Función para buscar el curso por ID
  const buscarCurso = (e) => {
    e.preventDefault();
    setErrorBusqueda('');
    setCursoEncontrado(null);

    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const curso = cursosGuardados.find(c => c.ID === idBusqueda);

    if (curso) {
      setCursoEncontrado(curso);
    } else {
      setErrorBusqueda('No se encontró ningún curso con ese ID.');
    }
  };

  // Función para eliminar el curso encontrado
  const eliminarCurso = () => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    const cursosActualizados = cursosGuardados.filter(curso => curso.ID !== cursoEncontrado.ID);

    localStorage.setItem('cursos', JSON.stringify(cursosActualizados));
    alert('Curso eliminado correctamente.');
    navigate('/Cursos');
  };

  return (
    <main className="container my-5">
      <h2 className="mb-4">Eliminar Curso</h2>

      <form onSubmit={buscarCurso} className="mb-4">
        <div className="input-group">
          <input 
            type="text" 
            placeholder="ID del curso a buscar" 
            className="form-control" 
            value={idBusqueda} 
            onChange={(e) => setIdBusqueda(e.target.value)} 
            required
          />
          <button 
            type="submit" 
            className="btn btn-primary"
          >
            Buscar Curso
          </button>
        </div>
      </form>

      {errorBusqueda && (
        <p className="text-danger">{errorBusqueda}</p>
      )}

      {cursoEncontrado && (
        <section className="container my-5">
          <div className="row">
            <div className="col-md-4 mb-4" key={cursoEncontrado.ID}>
              <div className="card team-card h-100">
                <img 
                  src={cursoEncontrado.IMAGEN || 'https://via.placeholder.com/300x200'} 
                  className="card-img-top" 
                  alt={cursoEncontrado.TITULO} 
                />
                <div className="card-body d-flex flex-column text-white">
                  <h5 className="card-title">{cursoEncontrado.TITULO}</h5>
                  <p className="card-text">{cursoEncontrado.DESCRIPCION}</p>
                  <ul className="list-unstyled mt-3">
                    <li><strong>Categoría:</strong> {cursoEncontrado.CATEGORIA}</li>
                    <li><strong>Tema:</strong> {cursoEncontrado.TEMA}</li>
                    <li><strong>Plataforma:</strong> {cursoEncontrado.PLATAFORMA}</li>
                    <li><strong>Duración:</strong> {cursoEncontrado.TIEMPO}</li>
                    <li><strong>Nivel:</strong> {cursoEncontrado.NIVEL}</li>
                    <li><strong>Precio:</strong> {cursoEncontrado.PRECIO === 0 ? 'Gratis' : `$${cursoEncontrado.PRECIO}`}</li>
                  </ul>
                  <a href={cursoEncontrado.ENLACE} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-auto">
                    Más Información
                  </a>
                  <button 
                    className="btn btn-danger mt-3" 
                    onClick={eliminarCurso}
                  >
                    Confirmar Eliminación
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default EliminarCurso;
