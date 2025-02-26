import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import LogoTWA from '../../assets/images/TWA.navbar.png';


const Header = ({ onLogout }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // Cierra el menú al hacer clic en un enlace
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  //Cierra sesion
  const handleLogout = () => {
    onLogout();
    navigate('/Iniciar');
    closeMenu();
  }
;
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(storedUser);
  }, []);
  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-background-color">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          <img src={LogoTWA} alt="Logo" id="logo-header" height="40" />
        </Link>
        {/* Botón hamburguesa */}
        <button
          className={`navbar-toggler ${menuOpen ? "" : "collapsed"}`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Menú */}
        <div
          ref={menuRef}
          className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav mx-auto text-center gap-3">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/QuienesSomos" onClick={closeMenu}>¿Quiénes somos?</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cursos" onClick={closeMenu}>Cursos/Talleres</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contactanos" onClick={closeMenu}>Contáctanos</Link>
            </li>
          </ul>
          {/* Botones de acción */}
          <div className="d-flex justify-content-center gap-3 mt-3 mt-lg-0">
          {user ? (
              <>
                <span className="nav-link text-white">Bienvenido, <strong>{user}</strong></span>
                <button onClick={handleLogout} className="btn btn-primary">Cerrar sesión</button>
              </>
            ) : (
              <>
                <Link to="/Unirse" className="btn btn-primary" onClick={closeMenu}>Unirse</Link>
                <Link to="/Iniciar" className="btn btn-outline-light" onClick={closeMenu}>Iniciar</Link>
              </>
            )}          
            </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;