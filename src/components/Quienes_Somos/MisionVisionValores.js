import React from 'react';
import ChicaTecnologica from '../../assets/images/chica_tecnologica.png';

const MisionVisionValores = () => {
    return (
        <section className="mission-section">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>Misión, Visión y Valores</h2>
                    <p>Empoderando a mujeres en tecnología a través de educación de calidad</p>
                </div>
                <div className="row">
                    <div className="col-md-6" id='container-acordeon'>
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                           
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        MISIÓN
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        TechWomen Academy busca empoderar a las mujeres a través de la educación en tecnología. Ofrecemos cursos, certificaciones y mentorías diseñadas para abrir nuevas oportunidades en el mundo digital. Creemos que el conocimiento transforma vidas y fomenta la equidad en la industria.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        VISIÓN
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Queremos ser la comunidad líder en formación tecnológica para mujeres. Aspiramos a un futuro donde más mujeres ocupen espacios clave en la innovación digital. A través del aprendizaje, buscamos cerrar brechas y crear un impacto duradero.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        VALORES
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Inclusión: Promovemos la diversidad y el acceso igualitario a la educación en tecnología.<br />
                                        Innovación: Fomentamos la creatividad y el aprendizaje continuo para la transformación digital.<br />
                                        Colaboración: Construimos redes de apoyo para el crecimiento profesional de cada estudiante.<br />
                                        Empoderamiento: Brindamos herramientas para fortalecer la confianza y el desarrollo profesional.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="mission-image">
                            <img
                                src={ChicaTecnologica}
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