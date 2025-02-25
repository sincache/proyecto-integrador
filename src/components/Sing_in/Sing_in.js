import React, { useState, useEffect } from 'react';

const Sing_in = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [curp, setCurp] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        if (!nombre || !apellido || !curp || !email || !telefono || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        console.log('Datos del formulario:', { nombre, apellido, curp, email, telefono, password });

        setNombre('');
        setApellido('');
        setCurp('');
        setEmail('');
        setTelefono('');
        setPassword('');
        setConfirmPassword('');
        setError('');
        setSuccess(true);
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [success]);

    return (
        <section className="hero-section">
            <div className="container">
                <h1 className="display-4">Regístrate</h1>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">Registro exitoso!</div>}
                <form id="registerForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre(s):</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Pon aquí tu nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">Apellido(s):</label>
                        <input
                            type="text"
                            className="form-control"
                            id="apellido"
                            placeholder="Pon aquí tu apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="curp" className="form-label">CURP:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="curp"
                            placeholder="Pon aquí tu CURP"
                            value={curp}
                            onChange={(e) => setCurp(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="tucorreo@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Número teléfonico:</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="telefono"
                            placeholder="5511223344"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Crea una contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password-confirm" className="form-label">Confirmar contraseña:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password-confirm"
                            placeholder="Confirma la contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="cta-buttons">
                        <button type="submit" className="btn btn-accent">Registrarse</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Sing_in;