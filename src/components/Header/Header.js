
// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para la navegación
import LogoTWA from '../../assets/images/Logo_TWA_Sin_Fondo.png';

const Header = () => {
  // Estado para controlar la visibilidad del menú en pantallas pequeñas
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-container">
        {/* LOGO y MENÚ HAMBURGUESA */}
        <div className="navbar-brand-container">
          <Link className="navbar-brand" to="/"><img id="logo-header" src={LogoTWA} alt="Logo" /></Link>
          <button className="navbar-toggle" onClick={toggleMenu}>☰</button>
        </div>

        {/* Contenedor de enlaces y botones */}
        <div className="navbar-right">
          <div className={`navbar-links ${menuActive ? "active" : ""}`}>
            <Link className="nav-link" to="/">Inicio</Link>
            <Link className="nav-link" to="/QuienesSomos">¿Quiénes somos?</Link>
            <Link className="nav-link" to="/Cursos">Cursos/Talleres</Link>
            <Link className="nav-link" to="/Contactanos">Contactanos</Link>
          </div>
          <div className={`navbar-buttons ${menuActive ? "active" : ""}`}>
            <button className="btn btn-unirse"><Link className="nav-link" to="/Unirse">Unirse</Link></button>
            <button className="btn btn-iniciar"><Link className="nav-link" to="/Iniciar">Iniciar</Link></button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
