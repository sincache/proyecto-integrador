import React from 'react';
import PortadaHome from '../../assets/images/Portada_Home.jpg';
import LogoTWA from '../../assets/images/Logo_TWA_Sin_Fondo.png';

const Home = () => {
    return (
        <>
        <section class="hero">
            <img id="imagen-presentacion" src={PortadaHome} alt="Imagen de presentación" />
            <div class="container row-2 align-items-center">
                <section class="hero-content col-md-6">
                    <h1>
                        Mujeres en Tecnología: Empodera tu futuro
                    </h1>
                    <p>
                        En TechWomen Academy, nuestra misión es empoderar a las mujeres a través de la educación en tecnología. Ofrecemos cursos y certificaciones que abren puertas a nuevas oportunidades en el mundo digital.
                    </p>
                    <div class="cta-buttons">
                        <a href="#" class="btn btn-primary">
                            Explorar
                        </a>
                        <a href="#" class="btn btn-secondary">
                            Únete
                        </a>
                    </div>
                </section>
            </div>
        </section>
        
        <main>
            <section class="features">
                <div class="container">
                    <h2>
                        Cursos diseñados para inspirar, empoderar y transformar.
                    </h2>
                    <div class="features-grid">
                    <article class="feature-card">
                        <h3>Talleres Interactivos</h3>
                        <p>Talleres interactivos que fomentan el aprendizaje práctico y la colaboración.</p><br/>
                        <a href="#" class="link-arrow">Inscríbete</a>
                    </article>
                    <article class="feature-card">
                        <h3>Contenido Exclusivo</h3>
                        <p>Accede a contenido exclusivo y recursos de aprendizaje de alta calidad.</p><br/>
                        <a href="#" class="link-arrow">Únete</a>
                    </article>
                    <article class="feature-card">
                        <h3>Mentoría Personalizada</h3>
                        <p>Mentoría personalizada para guiarte en tu camino profesional en tecnología.</p><br/>
                        <a href="#" class="link-arrow">Comenzar</a>
                    </article>
                </div>
                </div>
            </section>
            
            <section class="benefits">
                <div class="container">
                    <div class="benefits-content">
                        <h2>Descubre los beneficios de unirte a TechWomen Academy hoy mismo</h2>
                        <ul class="benefits-list">
                            <li>Acceso a mentores con experiencia en la industria</li>
                            <li>Aprendizaje flexible que se adapta a tu horario</li>
                            <li>Una comunidad de apoyo para mujeres en tecnología</li>
                            <li>Contenido mensual</li>
                        </ul>
                    </div>
                    <div class="logo-container">
                        <img id="logo" src={LogoTWA} alt="TechWomen Academy Logo" class="logo" />
                    </div>
                </div>
            </section>
            
            <section class="enrollment">
                <div class="container">
                    <h2>¿Cómo inscribirte a los cursos y talleres?</h2>
                    <div class="enrollment-grid">
                        <article class="enrollment-step">
                            <h3>Participación en Talleres y Certificaciones</h3>
                            <p>Una vez inscrita, recibirás toda la información necesaria para comenzar.</p>
                        </article>
                        <article class="enrollment-step">
                            <h3>Acceso a Materiales y Recursos</h3><br/>
                            <p>Tendrás acceso a materiales exclusivos para tu aprendizaje.</p>
                        </article>
                        <article class="enrollment-step">
                            <h3>Certificación al Completar el Curso</h3>
                            <p>Al finalizar, recibirás una certificación que valida tus habilidades.</p>
                        </article>
                    </div>
                    <div class="cta-buttons">
                        <a href="#" class="btn btn-primary">Saber Más</a>
                    </div>
                </div>
            </section>
        </main>
        </>

    );
};

export default Home;