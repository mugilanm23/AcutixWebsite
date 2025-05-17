import React, { useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png'; // replace with your actual logo

function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
        <span className="company-name">ACUTIX</span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link className={isActive('/') ? 'active' : ''} to="/">Home</Link></li>
        <li><Link className={isActive('/services') ? 'active' : ''} to="/services">Services</Link></li>
        <li><Link className={isActive('/careers') ? 'active' : ''} to="/career">Careers</Link></li>
        <li><Link className={isActive('/about') ? 'active' : ''} to="/about">About Us</Link></li>
        <li><Link className={isActive('/contact') ? 'active' : ''} to="/contact">Contact Us</Link></li>
      </ul>
      <button className="navbar-toggle" onClick={handleToggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

export default Navbar;
