import React from 'react';


const Register = () => {
    return (
        <section id="hero-register" class="hero-section">
        <div id="register-container" class="container">
            <h1 class="display-4">Regístrate</h1>
            <form id="registerForm">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Nombre completo" required />
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
        </div>
    </section>
    );
}

export default Register