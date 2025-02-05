// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css'; // Tus estilos personalizados



// Importa tus componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';     // Componente de la página de inicio
import About from './components/About';   // Componente "Acerca de"

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* Puedes agregar más rutas aquí */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
