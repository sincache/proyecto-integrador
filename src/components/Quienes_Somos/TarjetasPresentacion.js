import React from 'react';
import ChristianImg from '../../assets/images/members/christian-sandoval.jpeg';
import EdgarImg from '../../assets/images//members/edgar-vilchis.jpeg';
import AlejandraOlveraImg from '../../assets/images/members/alejandra-olvera.jpeg';
import AlejandraOrdaz from '../../assets/images/members/alejandra-ordaz.jpeg';
import ArelyHernandez from '../../assets/images/members/arely-hernandez.jpeg';
import BryanVargas from '../../assets/images/members/bryan-vargas.jpg';
import EmilianoFlores from '../../assets/images/members/emiliano-flores.jpeg';
import ErikaFlores from '../../assets/images/members/erika-martinez.jpeg';
import JacobVargas from '../../assets/images/members/jacob-vargas.jpeg';
import LilianaTorres from '../../assets/images/members/liliana-gonzalez.jpeg';
import PaoletTorres from '../../assets/images/members/paolet-torres.jpeg'


const TarjetaPresentacion = () => {
    return (
        <section className="py-5">
            <div className="container">
                <h2>Nuestro Equipo</h2>
                <p>Conoce a las expertas/os que harán posible tu desarrollo profesional</p>
            </div>

                <div class="row g-4">
                    <div class="row g-4">
                        {/* Card 1 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={ChristianImg} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Christian Sandoval</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrollador Full Stack Junior con experiencia en el área administrativa y gestión urbana, apasionado por la gestión empresarial y el mundo tecnológico.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* Card 2 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={EdgarImg} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Edgar Vilchis</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Me especializo en crear soluciones digitales que no solo resuelven problemas, sino que generan conexiones significativas.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* Card 3 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={AlejandraOlveraImg} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Alejandra Olvera</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrolladora Full-Stack
                                    Apasionada por la tecnología y el desarrollo web. Combino mi creatividad y habilidades como mercadóloga para encontrar soluciones atractivas e innovadoras.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* Card 4 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={PaoletTorres} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Paolet Torres</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Deveolper</p>
                                    <p class="card-text">Desarrolladora Full-Satck 
                                    Soy una persona motivada por el aprendizaje y por el poder comprender cómo funciona el mundo que me rodea. Este impulso me ha llevado a adentrarme en la programación e involucrarme en el fascinante mundo de la tecnología.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={JacobVargas} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Jacob Vargas</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrollador JavaScript Jr| Apasionado por crear aplicaciones web dinámicas/ Conocimiento de Css/ Conocimiento de JavaScript/ Conocimiento de Html.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* Card 6 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={LilianaTorres} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Liliana González</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrolladora Full Stack
                                    Soy licenciada en lenguas, apasionada por la lingüística y la tecnología. Disfruto crear proyectos que me permitan seguir aprendiendo a la par de generar un impacto positivo en mi entorno.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* Card 7 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={ArelyHernandez} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Arely Hernandez</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrolladora full stack
                                        Me motiva el desafío constante y el aprendizaje continuo para seguir creciendo y aportando innovación al mundo tecnológico.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        {/* Card 8 */}
                        <div class="col-md-3 col-sm-6">
                            <div class="card team-card text-center h-100">
                                <img src={AlejandraOrdaz} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Alejandra Ordaz</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrolladora Java Full-Stack
                                    "Desarrollo soluciones tecnológicas, combinando creatividad, enfoque analítico y atención al detalle en cada proyecto."</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                

                {/* Fila centrada para las últimas 3 tarjetas */}
                    <div class="row g-4 d-flex justify-content-center">
                        {/* Últimas 3 tarjetas */}
                        <div class="col-sm-3 col-sm-3">
                            <div class="card team-card text-center h-100">
                                <img src={BryanVargas} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Bryan Vargas</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrollador Full-Stack y matemático
                                        Siempre buscando aprender de nuevas tecnologías y buscar soluciones a problemas que aún no las tienen o pueden mejorarse.
                                    </p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3 col-sm-3">
                            <div class="card team-card text-center h-100">
                                <img src={ErikaFlores} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Erika Martinez</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrolladora Java Full-Stack
                                    Administradora con gusto por la programación, mi objetivo es desarrollarme profesionalmente en esta área tecnológica.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3 col-sm-3">
                            <div class="card team-card text-center h-100">
                                <img src={EmilianoFlores} class="card-img-top" alt="Team member" />
                                <div class="card-body">
                                    <h5 class="card-title">Emiliano Flores</h5>
                                    <p class="card-subtitle mb-2 text-muted">Java Developer</p>
                                    <p class="card-text">Desarrollador Full-Stack
                                    Geofísico de profesión, desarrollador por pasión, con un hambre insaciable por conocimientos en tecnología e informática.</p>
                                    <div class="social-links">
                                        <a href="#"><i class="fab fa-linkedin"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </section>
    );
};

export default TarjetaPresentacion;