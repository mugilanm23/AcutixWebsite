import React from 'react';
import './About.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const testimonials = [
  {
    letter: 'P',
    name: 'Prathab Singh',
    review:
      "I have worked as freelancer with Acutix Soft LLP (formerly Digital Touch IT Solutions), and it has been a fantastic experience. It's a great place to work and make meaningful contributions. Their internship support for students is highly commendable. For small businesses, they are the ideal choice for software solutions.",
    rating: 4,
  },
  {
    letter: 'R',
    name: 'Rishi Krishna',
    review:
      "We had the privilege of collaborating with an expert from Acutix Soft LLP (formerly Digital Touch IT Solutions) for an event organized by CIT (HackFusion-24). The panel member carefully assessed all participants' projects and identified the best ones.",
    rating: 5,
  },
  {
    letter: 'D',
    name: 'Dinesh Vasudevan',
    review:
      "I collaborated with Acutix Soft LLP (formerly Digital Touch IT Solutions) to develop websites for my cricket coaching center. Their team delivered an impressive website at a reasonable cost. Definitely a reliable company for your software needs!",
    rating: 5,
  },
  {
    letter: 'S',
    name: 'Suriyakumar CR',
    review:
      "Skilled software professionals, their expertise and dedication made a significant impact on clients' projects. They get into the requirements well and deliver high-quality solutions.",
    rating: 5,
  },
  {
    letter: 'N',
    name: 'Nithisha J',
    review:
      "I collaborated with experts from Acutix Soft LLP (formerly Digital Touch IT Solutions) to conduct a knowledge-sharing session on IoT and Blockchain. They delivered an insightful and highly valuable session.",
    rating: 4,
  },
];

const About = () => {
  const scrollTestimonials = (direction) => {
    const container = document.getElementById('testimonial-scroll');
    const scrollAmount = 300;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        <h1 className="section-title">About Us</h1>
        <p className="section-subtext">
          At Acutix Soft LLP, we are passionate about driving digital transformation for small businesses.
          Our expert team is dedicated to provide innovative, affordable, and customer-focused solutions that help businesses thrive in today’s competitive world.
          Our journey is defined by a commitment to excellence, continuous learning, and the pursuit of impactful technology solutions.
        </p>

        <div className="vision-mission">
          <div className="card">
            <h2>Our Vision</h2>
            <p>
              To become the go-to partner for small businesses seeking digital transformation,
              known for our expertise, affordability, and customer-centric approach.
            </p>
          </div>
          <div className="card">
            <h2>Our Mission</h2>
            <p>
              To empower small businesses through affordable technology solutions,
              enhancing their operational efficiency and driving growth.
            </p>
          </div>
        </div>

        <h1 className="section-title">Our Values</h1>
        <p className="section-subtext">
          We are driven by a set of core values that shape every aspect of our work.
          These values inspire us to create meaningful solutions for our clients,
          foster a collaborative environment, and continuously improve in everything we do.
        </p>

        <div className="values-section">
          {[
            {
              title: 'Excellence',
              description: 'We are committed to delivering top-tier quality in everything we do. Excellence is not just a goal—it’s a standard.',
            },
            {
              title: 'Innovation',
              description: 'We believe in pushing boundaries and thinking ahead. Our culture encourages creative problem-solving and smart solutions.',
            },
            {
              title: 'Education',
              description: 'We value learning as a continuous journey. By fostering curiosity and growth, we invest in knowledge and long-term success.',
            },
            {
              title: 'Collaboration',
              description: 'We grow stronger together. Open communication and teamwork are the foundation of our progress and innovation.',
            },
          ].map((value, index) => (
            <div className="value-card" key={index}>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

        <h1 className="section-title">Director's Desk</h1>
        <div className="directors-desk">
          <div className="quote-box">
            <span className="quote-icon">❝</span>
            <em>"The best way to predict the future is to create it." — Peter Drucker</em>
          </div>

          <div className="director-content">
            <div className="director-photo">Director Photo</div>
            <div className="director-message">
              <p>
                At Acutix Soft LLP, we are more than just a technology solutions provider —
                we are passionate believers in the transformative power of digitalization.
              </p>
              <p>
                I’ve witnessed firsthand how small businesses, with the right tools and support,
                can turn their dreams into thriving realities. Our mission is to empower entrepreneurs
                who often face the weight of limited resources and tight budgets, offering them the technology
                and expertise they need to succeed without compromise.
              </p>
              <p>
                We understand the hurdles small businesses face because we’ve been there too.
                That's why we're dedicated to delivering cutting-edge solutions at prices that won’t break the bank.
              </p>
              <p>
                But our vision extends beyond just providing technology. We are deeply committed
                to fostering partnerships between industry and academia because we believe the future
                of innovation lies in collaboration.
              </p>
              <p>
                Through our internship programs, tech meetups, and guest lectures by seasoned experts,
                we aim to inspire and nurture the next generation of leaders.
              </p>
              <p>
                Together, we can build a community where small businesses flourish, future talent thrives,
                and technology becomes the bridge to endless possibilities.
              </p>
              <p className="signature">
                Regards,<br />
                <strong>Director, <span className="highlighted-text">Acutix Soft LLP</span></strong>
              </p>
            </div>
          </div>
        </div>

        <section className="testimonial-section">
          <h1 className="testimonial-heading">What Our Clients Say</h1>
          <div className="testimonial-controls">
            <button onClick={() => scrollTestimonials('left')} className="scroll-button">←</button>

            <div className="testimonial-scroll-wrapper" id="testimonial-scroll">
              <div className="testimonial-scroll-container">
                {testimonials.map((item, index) => (
                  <div className="testimonial-card" key={index}>
                    <p className="testimonial-text">{item.review}</p>
                    <div className="testimonial-footer">
                      <div className="user-info">
                        <div className="user-avatar"><h3>{item.letter}</h3></div>
                        <div>
                          <div className="user-name">{item.name}</div>
                          <div className="user-title">{item.title}</div>
                        </div>
                      </div>
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < item.rating ? 'star filled' : 'star'}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => scrollTestimonials('right')} className="scroll-button">→</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
