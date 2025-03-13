import React from 'react';
import PortadaHome from '../../assets/images/Portada_Home (3).jpg';
import LogoTWA from '../../assets/images/Logo_TWA_Sin_Fondo.png';
import VideoTWA from '../../assets/Video/VideoTWA.mp4';

const Home = () => {
    return (
        <>

            <section className="hero">
                <video id="VideoTWA" src={VideoTWA} autoPlay loop muted playsInline className="video-background"></video>

            </section>

            <div id="cita" className="cita-container">
                <div className="cita-content">
                    <p className="cita-text">
                        Las mujeres representan sólo el
                        <span className="dato-clave"> 26%</span> de todos los puestos informáticos, y en el caso de las mujeres negras y latinas, las estadísticas son aún peores: combinadas, representan aproximadamente el
                        <span className="dato-clave"> 5%</span> de todos los puestos informáticos.
                    </p>
                    <p className="cita-dato">
                        Foro Económico Mundial (2023)
                    </p>
                </div>
            </div>



            <div class="container row-2 align-items-center">
                <section class="hero-content col-md-6">
                    <h1>
                        Mujeres en Tecnología: Empodera tu futuro
                    </h1>
                    <p>
                        En TechWomen Academy, nuestra misión es empoderar a las mujeres a través de la educación en tecnología. Ofrecemos cursos y certificaciones que abren puertas a nuevas oportunidades en el mundo digital.
                    </p>
                    <div class="cta-buttons">
                        <a href="/Cursos" class="btn btn-primary">
                            Explorar
                        </a>
                        <a href="/Unirse" class="btn btn-secondary">
                            Únete
                        </a>
                    </div>
                </section>
            </div>


            <main>
                <section class="features">
                    <div class="container">
                        <h2>
                            Cursos diseñados para inspirar, empoderar y transformar.
                        </h2>
                        <div class="features-grid">
                            <article class="feature-card">
                                <h3>Talleres Interactivos</h3>
                                <p>Talleres interactivos que fomentan el aprendizaje práctico y la colaboración.</p><br />
                                <a href="#" class="link-arrow">Inscríbete</a>
                            </article>
                            <article class="feature-card">
                                <h3>Contenido Exclusivo</h3>
                                <p>Accede a contenido exclusivo y recursos de aprendizaje de alta calidad.</p><br />
                                <a href="#" class="link-arrow">Únete</a>
                            </article>
                            <article class="feature-card">
                                <h3>Mentoría Personalizada</h3>
                                <p>Mentoría personalizada para guiarte en tu camino profesional en tecnología.</p><br />
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
                            <img id="logo-body" src={LogoTWA} alt="TechWomen Academy Logo" class="logo" />
                        </div>
                    </div>
                </section>

                <section class="enrollment">
                    <div class="container">
                    <h2>¿Cómo inscribirte a los cursos y comenzar tu camino al exito en las TI?</h2>
                        <div class="enrollment-grid">
                            <article class="enrollment-step">
                            <h3>Registro, rapido, seguro y exclusivo</h3>
                                <p>Para comenzar a disfrutar de todos los beneficios y herramientas que TechWomenpuede ofrecerte solo debes llenar un rapido registro diseñado para cuidar a nuestras usuarias y mantener una comunidad especial para todas...</p>
                           </article>
                            <article class="enrollment-step">
                                <h3>Acceso a Materiales y Recursos, Pensados en ti</h3><br />
                                <p>Tendrás acceso a materiales para mejorar tu desarollo tanto con tus compañeros de cursos, como poder solicitar assorias personalizadascon nuestro maravilloso equipo listo para apoyarte y resolver tus dudas. </p>
                            </article>
                            <article class="enrollment-step">
                                <h3>Certifica tu conocimiento</h3>
                                <p>Al finalizar, recibirás una certificación que validara tus habilidades adqueridas, dichos certificados le daran mas formalidad y respaldo de tus HARD SKINS (Habilidades Tecnicas).
                                    Algo fundamental y diferenciador en el competitivo mundo laboral actual.</p>
                            </article>
                            <article class="enrollment-step">
                                <h3>Un Espacio pensado para las Mujeres de Hoy</h3>
                                <p>Por que no solo se trata de un curso mas!, Nuestras asesorias no solo son pensadas para las HARD SKINS, si no que tambien estan pensadas en apoyarte con Habilidades Blandas, como prsentar tu CV, Consejos para entrevistas y secretos que te haran dar un plus a tu presentacion laboral para captar la atencion de las empresas independintemente de tu desarollo y crecimiento a futuro</p>
                            </article>
                            <article class="enrollment-step">
                                <h3>La Mejor parte?.... Todo esto es GRATUITO</h3>
                                <p> Asi es, Nuestra Mision y principal objetivo es que las mujeres tengan las herramientas necesarias para su desarrollo profesional y para esto no se tiene precio, debido a esto nuestros cursos y materiales son GRATUITOS para todas nuestras miembros</p>
                                </article>

                                <article class="enrollment-step">
                                <h3>TechWomen y el Exito las esperan</h3>
                                <p>"Las mujeres son la mayor reserva de talento sin explotar del mundo". - Hillary Clinton     </p>                          
                                <p>“El éxito de cada mujer debería ser una inspiración para otra. Somos más fuertes cuando nos alentamos mutuamente”. —Serena Williams</p>
                                <p>“En el futuro no habrá mujeres líderes. Sólo habrá líderes”. —Sheryl Sandberg</p>                          
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