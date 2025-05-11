import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaStar } from 'react-icons/fa';

const CursosAgregados = () => {
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


  //codigo para el funcionamiento para "MIS CURSOS"
  const toggleFavorite = (cursoID) => {
    const favoritos = JSON.parse(localStorage.getItem('misFavoritos'))||[];
    let nuevosFavoritos;
    if (favoritos.includes(cursoID)){ //si ya existe como favorito, lo eliminamos
      nuevosFavoritos = favoritos.filter (idCursos => idCursos !== cursoID)
    } else { // si no existe, lo agregamos
      nuevosFavoritos = [...favoritos, cursoID] 
    }
    localStorage.setItem ('misFavoritos', JSON.stringify(nuevosFavoritos))

    setFavoritos((prev) => ({
      ...prev,
      [cursoID]: !prev[cursoID],
    }));
  };
  const MisCursos=JSON.parse(localStorage.getItem('misFavoritos'))||[]; //obtenemos los cursos que el usuario ha agregado a favoritos
  console.log(MisCursos);
  const cursosRender = cursos.filter(curso => MisCursos.includes(curso.ID));

  
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
        <h2>Mis Cursos</h2>
        </div>
    </div>
  </div>

        <section className="container my-5">
          <div className="row">
            {cursosRender.map((curso) => (
              <div className="col-md-4 mb-4" key={curso.ID}>
                <div className="card team-card h-100">
                  <img 
                    src={curso.IMAGEN || 'https://via.placeholder.com/300x200'} 
                    className="card-img-top" 
                    alt={curso.TITULO} 
                  />
                  <div className="card-body d-flex flex-column text-white">


                    {/* boton de favoritos*/}

                    <button onClick={() => toggleFavorite(curso.ID)} className={`plus-button favorite`}>
                      // Ícono de "-"
                    <svg width="32" height="32" viewBox="0 0 32 32" className="plus-icon" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="15" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
                    <rect x="7" y="13" width="18" height="6" fill="currentColor"/>
                    </svg>
                    
                    </button>
                    
                    <h5 className="card-title">{curso.TITULO}</h5>
                    <p className="card-text">{curso.DESCRIPCION}</p>
                    <ul className="list-unstyled mt-3">
                      <li><strong>Categoría:</strong> {curso.CATEGORIA}</li>
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
                    <a href={curso.ENLACE} target="_blank" rel="noopener noreferrer"  className="btn btn-accent mt-auto">
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

export default CursosAgregados;