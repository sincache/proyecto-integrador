import React, { useEffect, useState } from 'react';

const Cursos = () => {
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    //Hay que descomentar este useEffect y eliminar el otro cuando ya tengamos la API

    // useEffect(() => {
    //     fetch('https://api') // Hay que reemplazar por la API a utilizar
    //         .then(response => {
    //             if (!response.ok) throw new Error('Error al obtener los cursos');
    //             return response.json();
    //         })
    //         .then(data => {
    //             setCursos(data); // Se espera un array con la estructura proporcionada
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error('Error:', error);
    //             setLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        const mockCursos = [
            {
                "ID": "1",
                "CATEGORIA": "Back end",
                "TEMA": "Java",
                "TITULO": "Curso de Java: desde cero a experto",
                "PLATAFORMA": "Edutin Academy",
                "DESCRIPCION": "En este curso de Java aprenderás a manejar de manera eficiente los conceptos y técnicas de programación en Java, y dominar de manera práctica los elementos de la sintaxis del lenguaje, la programación orientada a objetos, estructuras de datos, y el desarrollo de aplicaciones avanzadas.",
                "IMAGEN": "/cursos/imagenesCursos/java.png",
                "TIEMPO": "8 horas aprox.",
                "NIVEL": "Básico-Experto",
                "PRECIO": 0,
                "ENLACE": "https://edutin.com/curso-de-java"
              },
              {
                "ID": "2",
                "CATEGORIA": "Back end",
                "TEMA": "Python",
                "TITULO": "Introducción a la programación con Python",
                "PLATAFORMA": "Santander Open Academy",
                "DESCRIPCION": "Este curso te guiará desde un nivel básico hasta una comprensión sólida de los fundamentos de Python. Aprenderás a escribir código de forma clara y eficiente a través de lecciones interactivas, ejercicios prácticos y problemas reales.",
                "IMAGEN": "/cursos/imagenesCursos/pyton.png",
                "TIEMPO": "8 horas aprox.",
                "NIVEL": "Básico",
                "PRECIO": 0,
                "ENLACE": "https://www.santanderopenacademy.com/es/courses/introduction_to_python_programming.html"
              },
              {
                "ID": "3",
                "CATEGORIA": "Front end",
                "TEMA": "HTML/CSS y JS",
                "TITULO": "Curso de HTML5, CSS3 e Javascript",
                "PLATAFORMA": "Supercursos",
                "DESCRIPCION": "Conviértete en un desarrollador web completo aprendiendo HTML, CSS y JavaScript. Descubre cómo crear páginas web atractivas, interactivas y responsive que se ven geniales en cualquier dispositivo.",
                "IMAGEN": "/cursos/imagenesCursos/frontend.jpg",
                "TIEMPO": "20 horas aprox.",
                "NIVEL": "Básico-Avanzado",
                "PRECIO": 0,
                "ENLACE": "https://supercursos.thinkific.com/courses/curso-gratis-html-css-javascript?utm_source=chatgpt.com"
              },
              {
                "ID": "4",
                "CATEGORIA": "Front end",
                "TEMA": "React",
                "TITULO": "React JS para principiantes",
                "PLATAFORMA": "Cursa.app",
                "DESCRIPCION": "Aprende a construir interfaces de usuario modernas y dinámicas con React, una biblioteca de JavaScript popular y ampliamente utilizada en el desarrollo web. Este curso te guiará desde los conceptos básicos hasta la creación de aplicaciones web avanzadas.",
                "IMAGEN": "/cursos/imagenesCursos/React.jpg",
                "TIEMPO": "2 horas",
                "NIVEL": "Básico",
                "PRECIO": 0,
                "ENLACE": "https://cursa.app/en/free-course/react-js-for-beginners-egg"
              },
              {
                "ID": "5",
                "CATEGORIA": "Database",
                "TEMA": "MongoDB",
                "TITULO": "Curso de MongoDB",
                "PLATAFORMA": "Edutin Academy",
                "DESCRIPCION": "En este curso de MongoDB, comprenderás desde los fundamentos y modelado de datos hasta la optimización del rendimiento y ejecución de consultas avanzadas.",
                "IMAGEN": "/cursos/imagenesCursos/MongoDB.jpg",
                "TIEMPO": "8 horas aprox.",
                "NIVEL": "Avanzado",
                "PRECIO": 0,
                "ENLACE": "https://edutin.com/curso-de-mongodb/"
              },
              {
                "ID": "6",
                "CATEGORIA": "Database",
                "TEMA": "MYSQL",
                "TITULO": "Introducción a SQL",
                "PLATAFORMA": "Data Camp",
                "DESCRIPCION": "Empezarás este curso cubriendo la organización de los datos, las tablas y las mejores prácticas para la construcción de bases de datos.",
                "IMAGEN": "/cursos/imagenesCursos/SQL.jpg",
                "TIEMPO": "2 horas",
                "NIVEL": "Básico",
                "PRECIO": 0,
                "ENLACE": "https://www.datacamp.com/es/courses/introduction-to-sql/"
              }
        ];
        setCursos(mockCursos);
        setLoading(false);
    }, []);
    

    if (loading) return <p className="text-center mt-5">Cargando cursos...</p>;
    if (cursos.length === 0) return <p className="text-center mt-5">No hay cursos disponibles.</p>;

    return (
        <main>
            <section className="hero-section">
                <div className="container">
                    <h1 className="display-4">Nuestros Cursos</h1>
                    <p className="lead">Descubre nuestra oferta de cursos diseñados para empoderarte en tecnología.</p>
                </div>
            </section>

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
        </main>
    );
};

export default Cursos;
