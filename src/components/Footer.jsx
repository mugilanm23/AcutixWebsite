import React from 'react';
import './Footer.css';
import acutixlogo from '../assets/AcutixLogo.jpg';
import linkedinIcon from '../assets/linkedin.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={acutixlogo} alt="Acutix Logo" />
        </div>
<div className="footer-section">
  <h3>Pages</h3>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/career">Careers</Link></li>
    <li><Link to="/about">About us</Link></li>
    <li><Link to="/contact">Contact us</Link></li>
  </ul>
</div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">Software development</Link></li>
            <li><Link to="/services">Application development</Link></li>
            <li><Link to="/services">Tech meetup</Link></li>
            <li><Link to="/services">Industrial visit for students</Link></li>
            <li><Link to="/services">Internship training</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Acutix Soft LLP,<br /> No: 4/110, 4th Cross,<br /> Kalathumettu Street, Kottivakkam, <br />Chennai 600041</p>
          <p>proprietor@digitaltouchcorp.com</p>
          <p>+91 6369936706</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/acutix-soft-llp/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/acutixsoft?igsh=YXNxZ2I1aGR2Nm44" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©2025 Acutix Soft Llp. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
