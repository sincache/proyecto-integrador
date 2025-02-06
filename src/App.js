// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; // Estilos generales de bootstrap



// Se deben importar los componentes de cada pagina
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';     // Componente de la página de inicio
// import About from './components/About';   // Componente "Acerca de", este componente se separo en 3 componentes para modificacion individual
import QuienesSomos from './components/QuienesSomos';
import MisionVisionValores from './components/MisionVisionValores';
import TarjetaPresentacion from './components/TarjetasPresentacion';

function HomePage() {
  return (
    <>
      <Home />
      <QuienesSomos />
      <MisionVisionValores />
      <TarjetaPresentacion />
    </>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route index element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
