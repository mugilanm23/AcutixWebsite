import React, { useRef, useEffect } from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const scrollRef = useRef();

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') scrollByAmount(300);
      else if (e.key === 'ArrowLeft') scrollByAmount(-300);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          } else {
            entry.target.classList.remove('animate-slide-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        <h1 className="section-title">About Us</h1>
        <p className="section-subtext">
         At Acutix Soft LLP, we are passionate about driving digital transformation for small businesses. Our expert team is dedicated to provide innovative, affordable, and customer-focused solutions that help businesses thrive in today’s competitive world. Our journey is defined by a commitment to excellence, continuous learning, and the pursuit of impactful technology solutions.
        </p>

        <div className="vision-mission">
          <div className="card animate-on-scroll">
            <h2>Our Vision</h2>
            <p>To become the go-to partner for small businesses seeking digital transformation, known for our expertise, affordability, and customer-centric approach.</p>
          </div>
          <div className="card animate-on-scroll">
            <h2>Our Mission</h2>
            <p>To empower small businesses through affordable technology solutions, enhancing their operational efficiency and driving growth.</p>
          </div>
        </div>

        <h1 className="section-title">Our Values</h1>
        <p className="section-subtext">
          We are driven by a set of core values that shape every aspect of our work. These values inspire us to create meaningful solutions for our clients, foster a collaborative environment, and continuously improve in everything we do.
        </p>

        <div className="values-section">
          {[
            {
              title: "Excellence",
              description: "We are committed to delivering top-tier quality in everything we do. Excellence is not just a goal—it’s a standard.",
            },
            {
              title: "Innovation",
              description: "We believe in pushing boundaries and thinking ahead. Our culture encourages creative problem-solving and smart solutions.",
            },
            {
              title: "Education",
              description: "We value learning as a continuous journey. By fostering curiosity and growth, we invest in knowledge and long-term success.",
            },
            {
              title: "Collaboration",
              description: "We grow stronger together. Open communication and teamwork are the foundation of our progress and innovation.",
            },
          ].map((value, index) => (
            <div className="value-card animate-on-scroll" key={index}>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <h1 className="section-title">Director's Desk</h1>
        <div className="directors-desk animate-on-scroll">
          <div className="quote-box">
            <span className="quote-icon">❝</span>
            <em>"The best way to predict the future is to create it." — Peter Drucker</em>
          </div>

          <div className="director-content">
            <div className="director-photo">Director Photo</div>
            <div className="director-message">
              <p>
                At Acutix Soft LLP, we are more than just a technology solutions provider — we are passionate believers in the transformative power of digitalization.
              </p>
              <p>
                I’ve witnessed firsthand how small businesses, with the right tools and support, can turn their dreams into thriving realities. Our mission is to empower entrepreneurs who often face the weight of limited resources and tight budgets, offering them the technology and expertise they need to succeed without compromise.
              </p>
              <p>
                We understand the hurdles small businesses face because we’ve been there too. That's why we're dedicated to delivering cutting-edge solutions at prices that won’t break the bank. Every service, every tool we offer is crafted with your growth in mind.
              </p>
              <p>
                But our vision extends beyond just providing technology. We are deeply committed to fostering partnerships between industry and academia because we believe the future of innovation lies in collaboration.
              </p>
              <p>
                Through our internship programs, tech meetups, and guest lectures by seasoned experts, we aim to inspire and nurture the next generation of leaders.
              </p>
              <p>
                Together, we can build a community where small businesses flourish, future talent thrives, and technology becomes the bridge to endless possibilities. Thank you for being part of this journey — we are here to help you every step of the way.
              </p>
              <p className="signature">
                Regards,<br />
                <strong>Director, <span className="highlighted-text">Acutix Soft LLP</span></strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="section-title">Testimonials</h1>
      <div className="testimonial-scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scrollByAmount(-300)}>&lt;</button>
        <div className="testimonial-scroll-container" ref={scrollRef}>
          {[
            {
              letter: 'P',
              name: 'Prathab Singh',
              review: "I have worked as freelancer with Acutix soft LLP( formerly Digital Touch IT Solutions ), and it has been a fantastic experience. It's a great place to work and make meaningful contributions. Their internship support for students is highly commendable. For small businesses, they are the ideal choice for software solutions.",
              rating: 4,
            },
            {
              letter: 'R',
              name: 'Rishi Krishna',
              review: "We had the privilege of collaborating with an expert from Acutix soft LLP( formerly Digital Touch IT Solutions ) for an event organized by CIT (HackFusion-24). The panel member carefully assessed all participants' projects and identified the best ones.",
              rating: 5,
            },
            {
              letter: 'D',
              name: 'Dinesh Vasudevan',
              review: "I collaborated with Acutix soft LLP( formerly Digital Touch IT Solutions ) to develop websites for my cricket coaching center. Their team delivered an impressive website at a reasonable cost. Definitely a reliable company for your software needs!",
              rating: 5,
            },
            {
              letter: 'S',
              name: 'Suriyakumar CR',
              review: "Skilled software professionals, their expertise and dedication made a significant impact on clients' project. They get into the requirements well and delivering high-quality solutions.",
              rating: 5,
            },
            {
              letter: 'N',
              name: 'Nithisha J',
              review: "I collaborated with experts from Acutix soft LLP( formerly Digital Touch IT Solutions ) to conduct a knowledge-sharing session on IoT and Blockchain. They delivered an insightful and highly valuable session.",
              rating: 4,
            },
          ].map((t, i) => (
            <div className="testimonial-card animate-on-scroll" key={i}>
              <div className="testimonial-avatar">{t.letter}</div>
              <h4>{t.name}</h4>
              <p className="testimonial-review">"{t.review}"</p>
              <div className="stars">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className={idx < t.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scrollByAmount(300)}>&gt;</button>
      </div>

      <Footer />
    </>
  );
};

export default About;
