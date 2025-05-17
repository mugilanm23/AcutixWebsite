import React from 'react';
import './Footer.css';
import acutixlogo from '../assets/AcutixLogo.jpg';
import linkedinIcon from '../assets/linkedin.png';
/* import xIcon from '../assets/x.png';
import youtubeIcon from '../assets/youtube.png'; */
import instagramIcon from '../assets/instagram.png';
// import pinterestIcon from '../assets/pinterest.png';
import facebookIcon from '../assets/facebook.png';

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
            <li>Home</li>
            <li>Services</li>
            <li>Carrers</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Software development</li>
            <li>Application development</li>
            <li>Tech meetup</li>
            <li>Industrial visit for students</li>
            <li>Internship training</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Acutix Soft LLP,<br /> No: 4/110, 4th Cross,<br /> Kalathumettu Street, Kottivakkam, <br />Chennai 600041</p>
          <p>proprietor@digitaltouchcorp.com</p>
          <p>+91 6369936706</p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
{/*             <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src={youtubeIcon} alt="YouTube" />
            </a> */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            {/* <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src={pinterestIcon} alt="Pinterest" />
            </a> */}
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
