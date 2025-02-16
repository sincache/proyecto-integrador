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


function HomePage() {
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
      <div>
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

/* function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Home />
          <HomePage />
          <Register />
        </main>
        <Footer />
      </div>
    </Router>
  );
} */


export default App;
