import React, { useState } from 'react';
import './Services.css';
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import im4 from '../assets/im4.jpg';
import im5 from '../assets/im5.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const popupContent = {
  "Application Development": (
    <>
      <h2>Application Development</h2>
      <p>We create seamless, high-performance mobile applications tailored for Android and iOS users. Whether native or cross-platform, our apps are robust, responsive, and built using modern frameworks like Flutter and React Native.</p>
      <ul>
        <li>✔️ UI/UX optimized mobile applications</li>
        <li>✔️ Real-time data sync with cloud backend</li>
        <li>✔️ Secure authentication and offline mode</li>
      </ul>
    </>
  ),
  "Website Development": (
    <>
      <h2>Website Development</h2>
      <p>We design and develop responsive, scalable websites using the latest web technologies. Our solutions enhance user engagement and support business growth through custom dashboards, SEO optimization, and CMS integrations.</p>
      <ul>
        <li>✔️ Modern frontend stacks: React, Vue, Angular</li>
        <li>✔️ Responsive design for all devices</li>
        <li>✔️ SEO-friendly and fast-loading</li>
      </ul>
    </>
  ),
  "Industrial Visit for Students": (
    <>
      <h2>Industrial Visit for Students</h2>
      <p>Our IV programs provide students a first-hand look into the software development lifecycle. With guided tours, expert talks, and live demos, students understand the practical aspects of tech industries.</p>
      <ul>
        <li>✔️ Exposure to real-time projects</li>
        <li>✔️ Q&A with software professionals</li>
        <li>✔️ Hands-on activity sessions</li>
      </ul>
    </>
  ),
"Tech Meetup": (
  <>
    <h2>Schedule a Tech Meetup</h2>
    <form
      className="popup-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
          const response = await fetch('http://localhost:5000/api/schedule-meetup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            alert("Meeting request sent successfully!");
            e.target.reset();
          } else {
            alert("Failed to send request.");
          }
        } catch (error) {
          alert("Server error. Try again later.");
        }
      }}
    >
      <label>Meetup Topic:<input type="text" name="topic" required /></label>
      <label>Date:<input type="date" name="date" required /></label>
      <label>Time:<input type="time" name="time" required /></label>
      <label>Host Name:<input type="text" name="host" required /></label>
      <label>Mode:
        <select name="mode">
          <option>Online</option>
          <option>Offline</option>
        </select>
      </label>
      <label>Description:<textarea name="description" rows="4" required /></label>
      <button type="submit" className="schedule-btn">Schedule Now</button>
    </form>
  </>
),

"Internship Program": (
  <>
    <h2>Apply for Internship</h2>
    <form
      className="popup-form"
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
          const response = await fetch('http://localhost:5000/api/apply-internship', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            alert("Application submitted successfully!");
            e.target.reset();
          } else {
            alert("Failed to submit application.");
          }
        } catch (error) {
          alert("Server error. Try again later.");
        }
      }}
    >
      <label>Full Name:<input type="text" name="name" required /></label>
      <label>Email:<input type="email" name="email" required /></label>
      <label>Phone:<input type="tel" name="phone" required /></label>
      <label>LinkedIn:<input type="url" name="linkedin" /></label>
      <label>GitHub/Portfolio:<input type="url" name="portfolio" /></label>
      <label>Domain:
        <select name="domain">
          <option>Frontend</option>
          <option>Backend</option>
          <option>Fullstack</option>
        </select>
      </label>
      <label>Why you want to join:<textarea name="reason" rows="4" required /></label>
      <button type="submit" className="apply-btn">Apply Now</button>
    </form>
  </>
)

};

const Services = () => {
  const [popupTitle, setPopupTitle] = useState(null);

  const handleLearnMore = (title) => {
    setPopupTitle(title);
  };

  const closePopup = () => {
    setPopupTitle(null);
  };

  return (
    <>
      <Navbar />
      <div className="services-page">
        <h1 className="services-title">OUR SERVICES</h1>

        <div className="services-container">
          {[
            {
              image: im1,
              title: "Website Development",
              desc: "Responsive and interactive web solutions for modern businesses",
              items: [
                "⭐ Scalable enterprise websites",
                "⭐ SEO-optimized and fast loading",
                "⭐ CMS integration with admin dashboard",
              ]
            },
            {
              image: im2,
              title: "Application Development",
              desc: "Building seamless mobile apps for Android and iOS platforms",
              items: [
                "⭐ Native apps with high performance and UX",
                "⭐ Cross-platform apps using latest frameworks",
                "⭐ PWA solutions for faster deployment and reach",
              ]
            },
            {
              image: im3,
              title: "Industrial Visit for Students",
              desc: "Educational tours designed to expose students to real-world IT workflows",
              items: [
                "⭐ Guided walkthrough of our development process",
                "⭐ Interactive sessions with software engineers",
                "⭐ Insight into latest tools and technologies",
              ]
            },
            {
              image: im4,
              title: "Internship Program",
              desc: "Practical learning experience for aspiring developers and designers",
              items: [
                "⭐ Hands-on training with live projects",
                "⭐ Mentorship from experienced professionals",
                "⭐ Certification and career guidance",
              ]
            },
            {
              image: im5,
              title: "Tech Meetup",
              desc: "Regular community events to explore emerging tech trends",
              items: [
                "⭐ Sessions led by industry experts",
                "⭐ Networking with tech professionals",
                "⭐ Hackathons and coding challenges",
              ]
            }

          ].map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image"><img className="service-imagen" src={service.image} alt={service.title} /></div>
              <h4 className="service-heading">{service.title}</h4>
              <p>{service.desc}</p>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                className="learn-more"
                onClick={() => handleLearnMore(service.title)}
              >
                {service.title === "Tech Meetup" ? "Schedule Now" :
                 service.title === "Internship Program" ? "Apply Now" :
                 "Learn More"}
              </button>
            </div>
          ))}
        </div>

        {popupTitle && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <button className="popup-close" onClick={closePopup}>✖</button>
              {popupContent[popupTitle] || <p>No additional information.</p>}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Services;
