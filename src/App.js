// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; // Estilos generales de bootstrap

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
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/QuienesSomos" element={<QuienesSomosCompleta />} />
        <Route path="/Unirse" element={<Sing_in />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Cursos/Agregar" element={<AgregarCurso />} />
        <Route path="/Contactanos" element={<Contactanos />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;
