import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usersData from '../../assets/usuarios.json'
////Importar el json

//import bcrypt from 'bcryptjs';


const Iniciar =({setUser})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = usersData.find((u) => u.username === username);
        if(!userData){
            setError('Usuario no encontrado');
            return; 
        }
    
        
        const passwordMatch = userData.password === password;
        if(passwordMatch){
            //setUser(userData.username);
            localStorage.setItem('user', userData.username);
            setError('');
            navigate('/Cursos');
        }else{
            setError('Contraseña incorrecta');
        }
    };


    return(

        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200'>
            <form onSubmit={handleSubmit} className='flex bg-black p-5 rounded-x1 shadow-lg space-x-8'>
                <h2 className='text-xl font-bold md-4 text-center'>
                    Iniciar sesion
                </h2> 

                <input type='text'placeholder='Usuario' value={username} onChange={(e) => setUsername(e.target.value)} className="w-full mb-4 p-2 border rounded-x1" required />  
                <input type='password' placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} className="w-full mb-4 p-2 border rounded-x1"/>
                {error && <p className='text-red-500 text-sm mb-2'>{error}</p>} 
                <button 
                    type='submit' 
                    className='bg-blue 500 text-pink p-2 rounded-md hover:bg-blue-600'
                > 
                    Ingresar 
                </button>
            </form>
            
        </div>
        
    );
}


export default Iniciar;