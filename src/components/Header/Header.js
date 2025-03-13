import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoTWA from "../../assets/images/TWA.navbar.png"; 

const Header = ({ user, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    onLogout();
    navigate("/Iniciar");
    closeMenu();
  };

  // Cerrar el menú al hacer clic fuera de él
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
    <nav className="Navbar">
      {/* Logo */}
      <Link className="navbar-logo" to="/" onClick={closeMenu}>
        <img src={LogoTWA} alt="Logo" className="logo" />
      </Link>

      {/* Botón hamburguesa */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          className="list_icon"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>

      {/* Menú de navegación */}
      <ul className={`nav ${menuOpen ? "open" : ""}`} ref={menuRef}>
        <li className="nav-item">
          <Link className="nav-link" to="/" onClick={closeMenu}>
            Inicio
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cursos" onClick={closeMenu}>
            Cursos/Talleres
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/QuienesSomos" onClick={closeMenu}>
            ¿Quiénes somos?
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contactanos" onClick={closeMenu}>
            Contáctanos
          </Link>
        </li>

        {/* Botones */}
        <div className="nav-buttons">
          {user ? (
            <>
              <span className="nav-link text-white">
                Bienvenido, <strong>{user}</strong>
              </span>
              <button onClick={handleLogout} className="nav-btn-Unirse">
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/Unirse" className="nav-btn-Unirse" onClick={closeMenu}>
                Unirse
              </Link>
              <Link to="/Iniciar" className="nav-btn-iniciar" onClick={closeMenu}>
                Iniciar
              </Link>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Header;