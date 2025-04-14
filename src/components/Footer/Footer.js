// src/components/Footer.js
import React from 'react';
import LogoTWA from '../../assets/images/Logo_TWA_Sin_Fondo.png';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="newsletter-section">
          <img id="logo-header" src={LogoTWA} alt="Logo" />
            <p>Únete a nuestro boletín para estar al tanto de novedades y lanzamientos.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Introduce tu correo" required />
              <button type="submit">Suscribirse</button>
            </form>
            <p className="mt-2" style={{ fontSize: '0.75rem' }}>
              Al suscribirte, aceptas nuestra Política de Privacidad y consientes recibir actualizaciones.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h6>Columna Uno</h6>
              <a href="#">Enlace Uno</a>
              <a href="#">Enlace Dos</a>
              <a href="#">Enlace Tres</a>
              <a href="#">Enlace Cuatro</a>
              <a href="#">Enlace Cinco</a>
            </div>

            <div className="footer-column">
              <h6>Columna Dos</h6>
              <a href="#">Enlace Seis</a>
              <a href="#">Enlace Siete</a>
              <a href="#">Enlace Ocho</a>
              <a href="#">Enlace Nueve</a>
              <a href="#">Enlace Diez</a>
            </div>

            <div className="footer-column">
              <h6>Síguenos</h6>
              <div className="social-links">
                <a href="#" title="Facebook"><i className="fab fa-facebook"></i></a>
                <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                <a href="#" title="X"><i className="fab fa-x-twitter"></i></a>
                <a href="#" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="#" title="YouTube"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-4">
          <p>© 2024 Relume. Todos los derechos reservados.</p>
          <div className="links mt-2">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
            <a href="#">Configuración de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
