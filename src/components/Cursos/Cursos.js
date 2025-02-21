import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos'));

    if (cursosGuardados && cursosGuardados.length > 0) {
      setCursos(cursosGuardados);
      setLoading(false);
    } else {
      fetch("/cursos/cursos.json")
        .then(response => {
          if (!response.ok) throw new Error('Error al obtener los cursos');
          return response.json();
        })
        .then(data => {
          setCursos(data);
          localStorage.setItem('cursos', JSON.stringify(data));
          setLoading(false);
        })
        .catch(error => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  }, []);

  if (loading) return <p className="text-center mt-5">Cargando cursos...</p>;
  if (cursos.length === 0) return <p className="text-center mt-5">No hay cursos disponibles.</p>;

  return (
    <main>
      <section className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Nuestros Cursos</h2>
          <Link to="/Cursos/Agregar" className="btn btn-primary">Agregar Nuevo Curso</Link>
        </div>

        <section className="container my-5">
                <div className="row">
                    {cursos.map((curso) => (
                        <div className="col-md-4 mb-4" key={curso.ID}>
                            <div className="card team-card h-100">
                                <img 
                                    src={curso.IMAGEN || 'https://via.placeholder.com/300x200'} 
                                    className="card-img-top" 
                                    alt={curso.TITULO} 
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{curso.TITULO}</h5>
                                    <p className="card-text">{curso.DESCRIPCION}</p>
                                    <ul className="list-unstyled mt-3">
                                        <li><strong>Categoría:</strong> {curso.CATEGORIA}</li>
                                        <li><strong>Tema:</strong> {curso.TEMA}</li>
                                        <li><strong>Plataforma:</strong> {curso.PLATAFORMA}</li>
                                        <li><strong>Duración:</strong> {curso.TIEMPO}</li>
                                        <li><strong>Nivel:</strong> {curso.NIVEL}</li>
                                        <li><strong>Precio:</strong> {curso.PRECIO === 0 ? 'Gratis' : `$${curso.PRECIO}`}</li>
                                    </ul>
                                    <a href={curso.ENLACE} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-auto">
                                        Más Información
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
      </section>
    </main>
  );
};

export default Cursos;
