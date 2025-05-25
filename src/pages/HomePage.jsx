import React from 'react';
import './HomePage.css';
import whyim from '../assets/why.jpg';
import whoim from '../assets/who.jpg';
import whatim from '../assets/what.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useLocation } from 'react-router-dom';

function HomePage() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Navbar />

      <section className="intro">
        <div className="intro-content">
          <h1>ACUTIX SOFT LLP</h1>
          <p>Transforming and Empowering Small Businesses through Digitalization</p>
        </div>
      </section>

      <div className="homepage">
        <section className="section-grid">
          <div className="text-block">
            <h1>Why Acutix</h1>
            <ul className="wholist">
              <li>Provide transformative software solutions with honest, transparent pricing.</li>
              <li>Offer complete, end-to-end development services under one roof.</li>
              <li>Deliver rapid results through agile development and expert execution.</li>
              <li>Ensure personalized client attention with dedicated support and regular updates.</li>
              <li>Empower local talent and contribute to India's growing tech ecosystem.</li>
            </ul>
          </div>
          <div className="image-container">
            <img src={whyim} loading="lazy" alt="Why Acutix" className="image-block1" />
          </div>
        </section>

        <section className="section-grid reverse">
          <div className="text-block">
            <h1>Who We Are</h1>
            <ul className="wholist">
              <li>Help small businesses thrive in the digital age.</li>
              <li>Offer affordable, modern tech solutions tailored for startups.</li>
              <li>Understand the challenges of limited budgets and resources.</li>
              <li>Deliver high-quality services at pocket-friendly prices.</li>
              <li>Create a strong digital foundation for entrepreneurs.</li>
            </ul>
          </div>
          <div className="image-container">
            <img src={whoim} loading="lazy" alt="Who We Are" className="image-block2" />
          </div>
        </section>

        <section className="section-grid">
          <div className="text-block">
            <h1>What We Do</h1>
            <ul>
              <li>Design & develop websites and digital tools.</li>
              <li>Provide custom solutions for business efficiency.</li>
              <li>Support industrial-academic collaboration:</li>
              <ul>
                <li>Internships for students</li>
                <li>Guest lectures by industry experts</li>
                <li>Tech meetups and sessions</li>
              </ul>
              <li>Bridge the gap between industry and academia.</li>
            </ul>
          </div>
          <div className="image-container">
            <img src={whatim} loading="lazy" alt="What We Do" className="image-block1" />
          </div>
        </section>

        <section className="cta-grid">
          <div className="cta-box">
            <p>
              At Acutix Soft LLP, we’re not just providing services — we’re solving real problems with smart, scalable digital solutions.
              From website development to enterprise automation, we tailor every solution to meet our clients’ unique needs.
              Our commitment to quality and innovation has earned us the trust of growing businesses across industries.
            </p>
            <Link className={isActive('/services') ? 'active' : ''} to="/services">
              <button>Explore Services</button>
            </Link>
          </div>

          <div className="cta-box">
            <p>
              Whether you're a startup looking for reliable tech partners or a passionate individual seeking to grow your career in tech,
              Acutix is the place to thrive. Join us as a client or as a team member — and be a part of something impactful.
            </p>
            <Link className={isActive('/careers') ? 'active' : ''} to="/career">
              <button>Explore Careers</button>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default HomePage;
