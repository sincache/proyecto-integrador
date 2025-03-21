import React, {useState} from 'react';
import TerminosCondicionesModal from '../TerminosCondiciones/TerminosCondicionesModal';

const Register = () => {
    const [showModal, setShowModal] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleCheckboxChange = (event) => {
        setAcceptedTerms(event.target.checked);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!acceptedTerms) {
        alert('Debes aceptar los términos y condiciones');
        return;
        }
    
    };

    return (
        
        <section id="hero-register" class="hero-section">
        <div id="register-container" class="container">
            <h1 class="display-4">Regístrate</h1>
            <form id="registerForm">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label> 
                    <input type="text" class="form-control" id="nombre" placeholder="Nombre completo" required/> 
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="tucorreo@ejemplo.com" required />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Crea una contraseña" required />
                </div>
                <div class="cta-buttons">
                    <button type="submit" class="btn btn-accent">Registrarse</button>
                </div>
            </form>
            <TerminosCondicionesModal show={showModal} handleClose={handleClose}/>
        </div>
    </section>
    );
};

export default Register