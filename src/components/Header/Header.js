import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTWA from '../../assets/images/Logo_TWA_Sin_Fondo.png';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);
  const closeMenu = () => setMenuActive(false); // Cierra el menú al hacer clic en un enlace

  return (
    <nav className="navbar-custom">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img id="logo-header" src={LogoTWA} alt="Logo" />
        </Link>
      </div>

      <div className="hamburguer">
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>

      <div className={`navbar-menu ${menuActive ? "active" : ""}`}>
        <ul className="navbar-links">
          <li><Link className="nav-link" to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link className="nav-link" to="/QuienesSomos" onClick={closeMenu}>¿Quiénes somos?</Link></li>
          <li><Link className="nav-link" to="/Cursos" onClick={closeMenu}>Cursos/Talleres</Link></li>
          <li><Link className="nav-link" to="/Contactanos" onClick={closeMenu}>Contáctanos</Link></li>
        </ul>

        <div className="navbar-buttons">
          <Link to="/Unirse" className="btn btn-unirse" onClick={closeMenu}>Unirse</Link>
          <Link to="/Iniciar" className="btn btn-iniciar" onClick={closeMenu}>Iniciar</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
