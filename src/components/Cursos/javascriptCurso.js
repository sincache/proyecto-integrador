import React from "react";

const JavaScriptCurso = () => {
    return (
        <div className="javascript-curso">
            <main className="Contenido del curso">
                <h1>Curso de Java: desde cero a experto.</h1>
                <section className="introduccion-curso">
                    <h2>Domina el JavaScript moderno.</h2>
                    <p>Aprenda JavaScript desde los conceptos básicos hasta los conceptos avanzados con proyectos prácticos.</p>
                </section>

                <section className="caracteristicas-curso">
                    <div className="caracteristica-card">
                        <h3>Aspectos destacados del curso:</h3>
                        <ul>
                            <li>Características de ES6+.</li>
                            <li>Programación asincrónica.</li>
                            <li>Manipulación del DOM.</li>
                            <li>Marcos de trabajo agiles.</li>
                        </ul>
                    </div>

                    <div className="caracteristica-card">
                        <h3>Lo que aprenderás:</h3>
                        <ul>
                            <li>Variables.</li>
                            <li>Tipos de datos.</li>
                            <li>Funciones.</li>
                            <li>Objetos.</li>
                            <li>Arrays.</li>
                            <li>Loops.</li>
                            <li>Manejo de errores.</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default JavaScriptCurso;