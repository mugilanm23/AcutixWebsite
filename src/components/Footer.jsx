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
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><Link to="/services">Software Development</Link></li>
            <li><Link to="/services">Application Development</Link></li>
            <li><Link to="/services">Tech Meetup</Link></li>
            <li><Link to="/services">Industrial Visit for Students</Link></li>
            <li><Link to="/services">Internship Training</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <address>
            Acutix Soft LLP,<br />
            No: 4/110, 4th Cross,<br />
            Kalathumettu Street, Kottivakkam,<br />
            Chennai 600041
          </address>
          <p>Email: <a href="mailto:proprietor@digitaltouchcorp.com">proprietor@digitaltouchcorp.com</a></p>
          <p>Phone: <a href="tel:+916369936706">+91 6369936706</a></p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Acutix Soft LLP. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
