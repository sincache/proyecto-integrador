import React from 'react';

const Sing_in = () => {
    return (
    <section class="hero-section">
        <div class="container">
            <h1 class="display-4">Regístrate</h1>
            <form id="registerForm">
                <div class="mb-3">
                    <label for="nombre" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Nombre completo" required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Correo Electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="tucorreo@ejemplo.com" required/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input type="password" class="form-control" id="password" placeholder="Crea una contraseña" required/>
                </div>
                <button type="submit" class="btn btn-accent">Registrarse</button>
            </form>
        </div>
    </section>

    );
}

export default Sing_in;