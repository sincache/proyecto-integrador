// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';  // Importamos Link para la navegación

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Mi Sitio</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">Acerca de</Link>
              </li>
              {/* Agrega más enlaces según necesites */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
