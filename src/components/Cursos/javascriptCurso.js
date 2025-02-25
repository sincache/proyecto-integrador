import React from "react";

const JavaScriptCurso = () => {
    return (
        <div className="javascript-curso">
            <main className="contenido-curso">
                <h1>Curso de JavaScript: desde cero a experto.</h1>
                <section className="introduccion">
                    <h2>Domina JavaScript moderno.</h2>
                    <p>Aprende JavaScript desde los conceptos básicos hasta los más avanzados con proyectos prácticos.</p>
                </section>

                <section className="caracteristicas">
                    <div className="caracteristica-card">
                        <h3>Aspectos destacados del curso:</h3>
                        <ul>
                            <li>Características de ES6+.</li>
                            <li>Programación asincrónica.</li>
                            <li>Manipulación del DOM.</li>
                            <li>Frameworks modernos.</li>
                        </ul>
                    </div>

                    <div className="caracteristica-card">
                        <h3>Lo que aprenderás:</h3>
                        <ul>
                            <li>Variables y tipos de datos.</li>
                            <li>Funciones y objetos.</li>
                            <li>Arrays y loops.</li>
                            <li>Manejo de errores.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default JavaScriptCurso;
