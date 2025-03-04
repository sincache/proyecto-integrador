import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import usersData from '../../assets/usuarios.json'
////Importar el json

//import bcrypt from 'bcryptjs';


const Iniciar = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = usersData.find((u) => u.username === username);
        if (!userData) {
            setError('Usuario no encontrado');
            return;
        }


        const passwordMatch = userData.password === password;
        if (passwordMatch) {
            setUser(userData.username);
            localStorage.setItem('user', userData.username);
            setError('');
            navigate('/Cursos');
        } else {
            setError('Contraseña incorrecta');
        }
    };


    return (

        <div className='d-flex vh-100 vw-100 align-items-center justify-content-center bg-gray-200' id='Login'>
            <form onSubmit={handleSubmit} className='bg-black p-4 rounded shadow-lg w-100' style={{ maxWidth: "600px" }}>
                <h2 className='text-center text-white mb-4'>
                    Iniciar sesión
                </h2>
                <div className='mb-3'>
                    <input type='text' placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" required />
                </div>
                <div className='mb-3'>
                    <input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" required />
                </div>

                {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
                <button
                    type='submit'
                    className='btn btn-primary w-100'
                >
                    Ingresar
                </button>
            </form>
        </div>

        
    );
}


export default Iniciar;