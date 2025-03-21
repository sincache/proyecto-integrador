import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEdit, FaStar } from 'react-icons/fa';

const Cursos = () => {
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoritos, setFavoritos] = useState({});
  const navigate = useNavigate();

  // Obtener todos los cursos desde el backend
  const fetchCursos = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/courses/obtenercursos'); // Ruta del backend
      if (!response.ok) throw new Error('Error al obtener los cursos');
      const data = await response.json();
      setCursos(data);
      localStorage.setItem('cursos', JSON.stringify(data));
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // 🔎 Llamar al backend al cargar el componente
  useEffect(() => {
    fetchCursos();
  }, []);

  //  Código para el funcionamiento de "Mis Cursos"
  const toggleFavorite = (cursoID) => {
    const favoritos = JSON.parse(localStorage.getItem('misFavoritos')) || [];
    let nuevosFavoritos;
    if (favoritos.includes(cursoID)) {
      nuevosFavoritos = favoritos.filter(idCursos => idCursos !== cursoID);
    } else {
      nuevosFavoritos = [...favoritos, cursoID];
    }
    localStorage.setItem('misFavoritos', JSON.stringify(nuevosFavoritos));
    setFavoritos((prev) => ({
      ...prev,
      [cursoID]: !prev[cursoID],
    }));
  };

  // Generar estrellas de calificación
  const generarEstrellas = (calificacionPromedio) => {
    return [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={i < calificacionPromedio ? "text-warning" : "text-secondary"}
      />
    ));
  };

  // Redirigir al componente Opiniones
  const manejarClickEstrellas = (idCurso, tituloCurso) => {
    navigate(`/Opiniones/${idCurso}`, { state: { titulo: tituloCurso } });
  };

  if (loading) return <p className="text-center mt-5">Cargando cursos...</p>;
  if (cursos.length === 0) return <p className="text-center mt-5">No hay cursos disponibles.</p>;

  return (
    <main>
      <section className="container my-5">
        <div className="row mb-4">
          <div className="col">
            <h2>Nuestros Cursos</h2>
          </div>
          <div className="col text-end">
            <Link to="/Cursos/Agregar" className="btn btn-primary">
              Agregar Nuevo Curso
            </Link>
          </div>
        </div>

        <div className="row">
          {cursos.map((curso) => (
            <div className="col-lg-4 col-md-6 mb-4" key={curso.id}>
              <div className="card">
                <img 
                  src={curso.image || 'https://via.placeholder.com/300x200'} 
                  className="card-img-top" 
                  alt={curso.title} 
                />
                <div className="card-body">
                  <button 
                    onClick={() => toggleFavorite(curso.id)} 
                    className={`btn ${favoritos[curso.id] ? 'btn-danger' : 'btn-outline-danger'}`}
                  >
                    {favoritos[curso.id] ? '-' : '+'}
                  </button>
                  <h5 className="card-title">{curso.name}</h5>
                  <p className="card-text">{curso.duration}</p>
                  <p><strong>Nivel:</strong> {curso.level}</p>
                  <p><strong>Precio:</strong> Gratis </p>
                  <p>
                    <strong>Opiniones:</strong>
                    <span 
                      className="ms-2 cursor-pointer" 
                      onClick={() => manejarClickEstrellas(curso.id, curso.title)}
                    >
                      {generarEstrellas(curso.rating)}
                    </span>
                  </p>
                  <Link to={`/Cursos/Editar/${curso.id}`} className="btn btn-warning">
                    <FaEdit /> Editar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Cursos;
