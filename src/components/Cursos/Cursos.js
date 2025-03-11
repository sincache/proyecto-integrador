import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaStar } from 'react-icons/fa';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoritos, setFavoritos] = useState({});
  const navigate = useNavigate();

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

  const toggleFavorite = (cursoID) => {
    setFavoritos((prev) => ({
      ...prev,
      [cursoID]: !prev[cursoID],
    }));
  };
  // Función para generar estrellas
  const generarEstrellas = (calificacionPromedio) => {
    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
      // Si la calificación promedio es mayor o igual al índice de la estrella, la pintamos de amarillo
      estrellas.push(
        <FaStar 
          key={i} 
          className={i <= calificacionPromedio ? "text-warning" : "text-secondary"} // Amarillo si es menor o igual
        />
      );
    }
    return estrellas;
  };

  // Función para redirigir al componente Opiniones
  const manejarClickEstrellas = (idCurso, tituloCurso) => {
    navigate(`/Opiniones/${idCurso}`, { state: { titulo: tituloCurso } });
  };


  if (loading) return <p className="text-center mt-5">Cargando cursos...</p>;
  if (cursos.length === 0) return <p className="text-center mt-5">No hay cursos disponibles.</p>;

  return (
    <main>
      <section className="container my-5">
      <div className="container">
  <div className="row mb-4 text-center text-md-start" id="cursos_btn">
    <div className="col-12 col-md-auto">
      <h2>Nuestros Cursos</h2>
    </div>
    <div className="col-12 col-md-auto mt-2 mt-md-0">
      <Link to="/Cursos/Agregar" className="btn btn-primary w-100 w-md-auto">
        Agregar Nuevo Curso
      </Link>
    </div>
  </div>
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
                  <div className="card-body d-flex flex-column text-white">
                    {/* boton de favoritos*/}
                  <button
                    onClick={() => toggleFavorite(curso.ID)}
                    className={`heart-button ${favoritos[curso.ID] ? "favorite" : ""}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="heart-icon"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                  
                    <h5 className="card-title">{curso.TITULO}</h5>
                    <p className="card-text">{curso.DESCRIPCION}</p>
                    <ul className="list-unstyled mt-3">
                      <li><strong>Categoría:</strong> {curso.CATEGORIA}</li>
                      <li><strong>Tema:</strong> {curso.TEMA}</li>
                      <li><strong>Plataforma:</strong> {curso.PLATAFORMA}</li>
                      <li><strong>Duración:</strong> {curso.TIEMPO}</li>
                      <li><strong>Nivel:</strong> {curso.NIVEL}</li>
                      <li><strong>Precio:</strong> {curso.PRECIO === 0 ? 'Gratis' : `${curso.PRECIO || "Gratuito"}`}</li>
                      <li>
                        <strong>Opiniones:</strong>
                        <span 
                          className="ms-2 cursor-pointer" 
                          onClick={() => manejarClickEstrellas(curso.ID, curso.TITULO)}
                        >
                          {generarEstrellas(curso.CALIFICACION)}
                        </span>
                      </li>
                    </ul>
                    <a href={curso.ENLACE} target="_blank" rel="noopener noreferrer" className="btn btn-accent mt-auto">
                      Más Información
                    </a>
                    <Link to={`/Cursos/Editar/${curso.ID}`} className="btn mt-2"><FaEdit /> </Link>
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
