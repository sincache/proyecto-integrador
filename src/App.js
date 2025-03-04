// src/App.js
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; // Estilos generales de bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'; //menu de hamburguesa
// Se deben importar los componentes de cada pagina
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';     // Componente de la página de inicio
// import About from './components/About';   // Componente "Acerca de", este componente se separo en 3 componentes para modificacion individual
import QuienesSomos from './components/Quienes_Somos/QuienesSomos';
import MisionVisionValores from './components/Quienes_Somos/MisionVisionValores';
import TarjetasPresentacion from './components/Quienes_Somos/TarjetasPresentacion';
import Register from './components/Register/Register';
import Sing_in from './components/Sing_in/Sing_in';
import Cursos from './components/Cursos/Cursos';
import Contactanos from './components/Contacto/Contactanos';
import AgregarCurso from './components/Cursos/AgregarCursos';
import EliminarCurso from './components/Cursos/EliminarCurso';
import EditarCurso from './components/EditarCurso/EditarCurso';
import Iniciar from './components/Iniciar/Iniciar';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Opiniones from './components/Opiniones/Opiniones.jsx';


function QuienesSomosCompleta() {
  return (
    <>
      <QuienesSomos />
      <MisionVisionValores />
      <TarjetasPresentacion />
    </>
  );
}

function App() {
  //Obtener la sesion de las cookies
  const [user, setUser] = useState(localStorage.getItem('user') || '');
  //Recuperar la sesion cada que se recargue la pagina
  useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if(storedUser){
        setUser(storedUser);
      }
    },[]
  );

  const handleLogout = () => {
    setUser('');
    localStorage.removeItem('user');
  }
  return (
    <Router>
      <Header user={user} onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<QuienesSomosCompleta />} />
        <Route path="/Unirse" element={<Sing_in />} />
        <Route path='/Iniciar' element={user?<Cursos/>:<Iniciar setUser={setUser}/>} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Cursos/Agregar" element={user?<AgregarCurso/>:<Iniciar/>}/> 
        <Route path="/Cursos/Eliminar" element={<ProtectedRoute user={user}><EliminarCurso /></ProtectedRoute>} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Cursos/Editar/:id" element={<EditarCurso />} /> 
        <Route path="/Opiniones/:idCurso" element={<Opiniones />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
