// src/components/About.js
import React from 'react';
import chicaTecnologica from '../assets/images/chica_tecnologica.png'

const About = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h6 className="text-accent">El Equipo</h6>
          <h1 className="display-4 mb-4">¿Quiénes somos?</h1>
          <p className="lead col-md-8">
            TechWomen Academy es una plataforma de e-commerce que ofrece cursos en línea, talleres y certificaciones
            diseñados especialmente para mujeres interesadas en tecnología. La propuesta se enfoca en áreas como
            programación, ciberseguridad, inteligencia artificial y desarrollo de software, impartidos por mujeres
            destacadas en el sector. Además, fomenta una comunidad para compartir experiencias y recibir mentorías.
          </p>
        </div>
      </section>

      {/* Mission Section */}
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
                  src={chicaTecnologica}
                  alt="Mujer en tecnología"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Nuestro equipo</h2>
            <p>Conoce a las expertas que harán posible tu desarrollo profesional</p>
          </div>
          <div className="row g-4">
            {/* Puedes crear un componente separado para las tarjetas de equipo para reutilización.
                Por ahora se muestran algunos ejemplos directamente. */}
            
            {/* Card 1 */}
            <div className="col-md-3 col-sm-6">
              <div className="card team-card text-center h-100">
                <img
                  src="/api/placeholder/300/300"
                  className="card-img-top"
                  alt="Team member"
                />
                <div className="card-body">
                  <h5 className="card-title">Full Name</h5>
                  <p className="card-subtitle mb-2 text-muted">Job Title</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 col-sm-6">
              <div className="card team-card text-center h-100">
                <img
                  src="/api/placeholder/300/300"
                  className="card-img-top"
                  alt="Team member"
                />
                <div className="card-body">
                  <h5 className="card-title">Full Name</h5>
                  <p className="card-subtitle mb-2 text-muted">Job Title</p>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="social-links">
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
