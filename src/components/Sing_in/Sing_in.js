import React, { useState, useEffect, useRef } from 'react';
import { validarGeneroCurp } from '../Cursos/utils/CorroborarCURP';
import TerminosCondicionesModal from '../TerminosCondiciones/TerminosCondicionesModal';

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
    const [curpError, setCurpError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [aceptarTerminos, setAceptarTerminos] = useState(false);

    // Ref para el alert de error o éxito
    const alertRef = useRef(null);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleCheckboxChange = (event) => {
        setAceptarTerminos(event.target.checked);
    };

    // Validaciones
    const soloLetras = (texto) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(texto);
    const validarEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validarTelefono = (telefono) => /^\d{10}$/.test(telefono);
    const validarPasswordSegura = (password) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de nombre y apellido
        if (!soloLetras(nombre) || !nombre) {
            setError('El nombre solo puede contener letras y no puede estar vacío.');
            return;
        }
        if (!soloLetras(apellido) || !apellido) {
            setError('El apellido solo puede contener letras y no puede estar vacío.');
            return;
        }

        // Validación de CURP
        try {
            const genero = validarGeneroCurp(curp);
            if (genero !== 'Mujer') {
                setError('Solo se permiten registros de mujeres.');
                return;
            }
            setCurpError(''); // Si la CURP es válida, limpia el error
        } catch (error) {
            setCurpError(error.message);
            return;
        }

        // Validación de email
        if (!validarEmail(email)) {
            setError('El correo electrónico no tiene un formato válido.');
            return;
        }

        // Validación de teléfono
        if (!validarTelefono(telefono)) {
            setError('El número de teléfono debe contener solo 10 dígitos numéricos.');
            return;
        }

        // Validación de contraseñas
        if (!validarPasswordSegura(password)) {
            setError('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return;
        }

        // Validación de términos y condiciones
        if (!aceptarTerminos) {
            setError('Debes aceptar los términos y condiciones.');
            return;
        }

        console.log('Datos del formulario:', { nombre, apellido, curp, email, telefono, password });

        // Limpiar el formulario y mostrar el mensaje de éxito
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
        if (error || success) {
            // Realizar scroll automático hacia el alert
            alertRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Desaparecer el alert después de 3 segundos
            const timer = setTimeout(() => {
                setError('');
                setSuccess(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [error, success]);  // Se ejecutará cada vez que error o success cambien

    return (
        <section className="hero-section">
            <div className="container">
                <h1 className="display-4">Regístrate</h1>

                {/* Mostrar los alertas si hay error o éxito */}
                <div ref={alertRef}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {success && <div className="alert alert-success">Registro exitoso! Ahora puedes iniciar sesión.</div>}
                </div>

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
                            onChange={(e) => {
                                setCurp(e.target.value);
                                try {
                                    validarGeneroCurp(e.target.value);  // Validar género
                                    setCurpError(''); // Limpiar error si la CURP es válida
                                } catch (error) {
                                    setCurpError(error.message);  // Mostrar el error en tiempo real
                                }
                            }}
                            required
                        />
                        {curpError && (
                            <div className="alert alert-danger mt-2" role="alert">
                                {curpError}
                            </div>
                        )}
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
                    <div className="mb-3">
                        <input
                            type='checkbox'
                            id='terminos'   
                            checked={aceptarTerminos}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor='terminos'>Acepto los <a href="#" onClick={handleShowModal}>Términos y Condiciones</a></label>
                    </div>   
                    <div className="cta-buttons">
                        <button type="submit" className="btn btn-accent">Registrarse</button>
                    </div>
                </form>
                <TerminosCondicionesModal show={showModal} handleClose={handleCloseModal} />
            </div>
        </section>
    );
};

export default Sing_in;
