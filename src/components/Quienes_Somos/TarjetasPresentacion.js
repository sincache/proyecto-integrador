import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import ChristianImg from '../../assets/images/members/christian-sandoval.jpeg';
import EdgarImg from '../../assets/images//members/edgar-vilchis.jpeg';
import AlejandraOlveraImg from '../../assets/images/members/alejandra-olvera.jpeg';
import AlejandraOrdaz from '../../assets/images/members/alejandra-ordaz.jpeg';
import ArelyHernandez from '../../assets/images/members/arely-hernandez.jpeg';
import BryanVargas from '../../assets/images/members/bryan-vargas.jpg';
import EmilianoFlores from '../../assets/images/members/emiliano-flores.jpeg';
import ErikaFlores from '../../assets/images/members/erika-martinez-corregida.jpeg';
import JacobVargas from '../../assets/images/members/jacob-vargas.jpeg';
import LilianaGonzález from '../../assets/images/members/liliana-gonzalez.jpeg';
import PaoletTorres from '../../assets/images/members/paolet-torres.jpeg'



const TarjetaPresentacion = () => {
    return (
        <section className="py-5">
            <div className="title-card">
                <h2>Nuestro Equipo</h2>
                <p>Conoce a las expertas/os que harán posible tu desarrollo profesional</p>
            </div>

            <div class="row g-4">
                {/* <div class="row g-4"> */}
                    {/* Card 1 */}
                    <div class="col-md-3 col-sm-6">
                        <div class="card team-card text-center h-100">
                            <img src={ChristianImg} class="card-img-top" alt="Team member" />
                            <div class="card-body">
                                <h5 class="card-title">Christian Sandoval</h5>
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">Desarrollador Junior con experiencia en el área administrativa y gestión urbana, apasionado por la gestión empresarial y el mundo tecnológico.</p>
                                <div class="social-links">
                                    <a href='https://www.linkedin.com/in/christian-jean-paul-sandoval-olvera?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><FontAwesomeIcon icon={faLinkedin}/></a>
                                    <a href="#https://github.com/chrissanolv"><FontAwesomeIcon icon={faGithub}/></a>
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
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">Me especializo en crear soluciones digitales que no solo resuelven problemas, sino que generan conexiones significativas.</p>
                                <div class="social-links">
                                <a href='https://www.linkedin.com/in/edjvr/'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/EddyVyld"><FontAwesomeIcon icon={faGithub}/></a>
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
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">Apasionada por la tecnología y el desarrollo web. Combino mi creatividad y habilidades como mercadóloga para encontrar soluciones atractivas e innovadoras.</p>
                                <div class="social-links">
                                <a href='https://www.linkedin.com/in/vaob/'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/Ale-Olvera99"><FontAwesomeIcon icon={faGithub}/></a>
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
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Deveolper</p>
                                <p class="card-text">
                                    Soy una persona motivada por el aprendizaje, este impulso me ha llevado a adentrarme en la programación e involucrarme en el fascinante mundo de la tecnología.</p>
                                <div class="social-links">
                                <a href='http://www.linkedin.com/in/karen-paolet-torres-arrieta'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/PaoletTorres"><FontAwesomeIcon icon={faGithub}/></a>
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
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">Apasionado por crear aplicaciones web dinámicas/ Conocimiento de Css/ Conocimiento de JavaScript/ Conocimiento de Html.</p>
                                <div class="social-links">
                                <a href='http://www.linkedin.com/in/jacob-vargasm'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/mistertlatoani"><FontAwesomeIcon icon={faGithub}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div class="col-md-3 col-sm-6">
                        <div class="card team-card text-center h-100">
                            <img src={LilianaGonzález} class="card-img-top" alt="Team member" />
                            <div class="card-body">
                                <h5 class="card-title">Liliana González</h5>
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">
                                    Apasionada por la lingüística y la tecnología, disfruto crear proyectos que me permitan seguir aprendiendo a la par de generar un impacto positivo en mi entorno.</p>
                                <div class="social-links">
                                <a href='https://www.linkedin.com/in/liliana-gonz%C3%A1lez30/'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/lilianglezdj"><FontAwesomeIcon icon={faGithub}/></a>
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
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">
                                    Me motiva el desafío constante y el aprendizaje continuo para seguir creciendo y aportando innovación al mundo tecnológico.</p>
                                <div class="social-links">
                                <a href='https://www.linkedin.com/in/arely-hdz-cuellar/'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/Arely423"><FontAwesomeIcon icon={faGithub}/></a>
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
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">
                                    "Desarrollo soluciones tecnológicas, combinando creatividad, enfoque analítico y atención al detalle en cada proyecto."</p>
                                <div class="social-links">
                                <a href='http://www.linkedin.com/in/alejandra-ordaz'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/Ale1510-eng"><FontAwesomeIcon icon={faGithub}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}


                {/* Fila centrada para las últimas 3 tarjetas */}
                <div class="row g-3 d-flex justify-content-center">
                    {/* Últimas 3 tarjetas */}
                    <div class="col-sm-3 col-sm-3">
                        <div class="card team-card text-center h-100">
                            <img src={BryanVargas} class="card-img-top" alt="Team member" />
                            <div class="card-body">
                                <h5 class="card-title">Bryan Vargas</h5>
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">
                                    Siempre buscando aprender de nuevas tecnologías y buscar soluciones a problemas que aún no las tienen o pueden mejorarse.
                                </p>
                                <div class="social-links">
                                <a href='#'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="#"><FontAwesomeIcon icon={faGithub}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3 col-sm-3">
                        <div class="card team-card text-center h-100">
                            <img src={ErikaFlores} class="card-img-top" alt="Team member" />
                            <div class="card-body">
                                <h5 class="card-title">Erika Martinez</h5>
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">
                                    Administradora con gusto por la programación, mi objetivo es desarrollarme profesionalmente en esta área tecnológica.</p>
                                <div class="social-links">
                                <a href='http://www.linkedin.com/in/erika-martinez-mutzan'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/erikamutzan"><FontAwesomeIcon icon={faGithub}/></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-3 col-sm-3">
                        <div class="card team-card text-center h-100">
                            <img src={EmilianoFlores} class="card-img-top" alt="Team member" />
                            <div class="card-body">
                                <h5 class="card-title">Emiliano Flores</h5>
                                <p class="card-subtitle mb-2 text-muted">Full-Stack Developer</p>
                                <p class="card-text">
                                    Geofísico de profesión, desarrollador por pasión, con un hambre insaciable por conocimientos en tecnología e informática.</p>
                                <div class="social-links">
                                <a href='https://www.linkedin.com/in/jemiliano-flores/'><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://github.com/jemilianofl"><FontAwesomeIcon icon={faGithub}/></a>
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