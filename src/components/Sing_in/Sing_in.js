import React, { useState, useEffect } from 'react';
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

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleCheckboxChange = (event) => {
        setAceptarTerminos(event.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            // Intentar validar la CURP
            const genero = validarGeneroCurp(curp); // Aquí se obtiene el género
            if (genero !== 'Mujer') {
                setError('Solo se permiten registros de mujeres');
                return; // Detener el submit si el género no es mujer
            }
            setCurpError(''); // Si la CURP es válida, limpia el error
        } catch (error) {
            // Si ocurre un error, mostrarlo como alerta de Bootstrap
            setCurpError(error.message);
            return; // Detener el submit si hay un error en la CURP
        }

        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        if (!nombre || !apellido || !curp || !email || !telefono || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        if (!aceptarTerminos) {
            setError('Debes aceptar los términos y condiciones');
            return; //Hola!, aqui nomas para saludar
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
                        <label htmlFor='terminos'>Acepto los <a href="#" onClick={handleShowModal}>Términos y Condiciones</a>
                        </label>
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