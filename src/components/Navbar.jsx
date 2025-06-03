import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Acutix Logo" className="logo" />
        <span className="company-name">ACUTIX</span>
      </div>

      <button
        className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={handleToggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>Home</Link></li>
        <li><Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`} onClick={closeMenu}>Services</Link></li>
        <li><Link to="/career" className={`nav-link ${isActive('/career') ? 'active' : ''}`} onClick={closeMenu}>Careers</Link></li>
        <li><Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>About Us</Link></li>
        <li><Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
