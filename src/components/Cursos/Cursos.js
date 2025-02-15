import React from 'react';

const Cursos = () => {
    return(
    <main>
    <section class="hero-section">
        <div class="container">
            <h1 class="display-4">Nuestros Cursos</h1>
            <p class="lead">Descubre nuestra oferta de cursos diseñados para empoderarte en tecnología.</p>
        </div>
    </section>
    <section class="container my-5">
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card team-card">
                    <img src="assets/images/curso1.jpg" class="card-img-top" alt="Desarrollo Web"/>
                    <div class="card-body">
                        <h5 class="card-title">Desarrollo Web</h5>
                        <p class="card-text">Aprende a crear sitios web modernos con HTML, CSS y JavaScript.</p>
                        <a href="#" class="btn btn-accent">Más Información</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card team-card">
                    <img src="assets/images/curso2.jpg" class="card-img-top" alt="Data Science"/>
                    <div class="card-body">
                        <h5 class="card-title">Data Science</h5>
                        <p class="card-text">Domina el análisis de datos con Python y herramientas avanzadas.</p>
                        <a href="#" class="btn btn-accent">Más Información</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card team-card">
                    <img src="assets/images/curso3.jpg" class="card-img-top" alt="Inteligencia Artificial"/>
                    <div class="card-body">
                        <h5 class="card-title">Inteligencia Artificial</h5>
                        <p class="card-text">Introducción a la IA y machine learning con Python.</p>
                        <a href="#" class="btn btn-accent">Más Información</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>

    );
}

export default Cursos;