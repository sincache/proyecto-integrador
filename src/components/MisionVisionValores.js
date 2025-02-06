import React from 'react';

const MisionVisionValores = () => {
    return (
            <section className="mission-section">
            <div className="container">
            <div className="text-center mb-5">
                <h2>Misión, Visión y Valores</h2>
                <p>Empoderando a mujeres en tecnología a través de educación de calidad</p>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6">
                <h3>Nuestra Misión</h3>
                <p>
                    Brindar educación tecnológica de calidad y crear una comunidad de apoyo para mujeres en tecnología.
                </p>
                <ul className="feature-list">
                    <li>
                    <i className="fas fa-check-circle"></i> Acceso a mentores con experiencia en la industria
                    </li>
                    <li>
                    <i className="fas fa-check-circle"></i> Aprendizaje flexible que se adapta a tu horario
                    </li>
                    <li>
                    <i className="fas fa-check-circle"></i> Una comunidad de apoyo para mujeres en tecnología
                    </li>
                    <li>
                    <i className="fas fa-check-circle"></i> Contenido ilimitado
                    </li>
                </ul>
                </div>
                <div className="col-md-6">
                <div className="mission-image">
                    <img
                    src="../assets/images/chica_tecnologica.png"
                    alt="Mujer en tecnología"
                    className="img-fluid"
                    />
                </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default MisionVisionValores;