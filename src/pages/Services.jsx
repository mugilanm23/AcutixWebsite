import React, { useState } from 'react';
import './Services.css';
import im1 from '../assets/im1.jpg';
import im2 from '../assets/App.jpg';
import im3 from '../assets/ivstudents.jpg';
import im4 from '../assets/internprg.jpg';
import im5 from '../assets/techmeetup.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const popupContent = {
  "Application Development": (
    <>
      <h2>Application Development</h2>
      <p>We create seamless, high-performance mobile applications tailored for Android and iOS users using modern frameworks like Flutter and React Native.</p>
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
      <p>We design and develop responsive, scalable websites using the latest web technologies with SEO optimization and CMS integrations.</p>
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
      <p>Our IV programs provide students hands-on experience with real-time projects and guided tours.</p>
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
      <MeetupForm />
    </>
  ),
  "Internship Program": (
    <>
      <h2>Apply for Internship</h2>
      <InternshipForm />
    </>
  )
};

const MeetupForm = () => (
  <form
    className="popup-form"
    onSubmit={async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      try {
        const res = await fetch('https://api.digitaltouchcorp.com/api/schedule-meetup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        alert(res.ok ? "Meeting request sent successfully!" : "Failed to send request.");
        if (res.ok) e.target.reset();
      } catch {
        alert("Server error. Try again later.");
      }
    }}
  >
    <label>Meetup Topic:<input type="text" name="topic" required /></label>
    <label>Date:<input type="date" name="date" required /></label>
    <label>Time:<input type="time" name="time" required /></label>
    <label>Host Name:<input type="text" name="host" /></label>
    <label>Mode:
      <select name="mode">
        <option>Online</option>
        <option>Offline</option>
      </select>
    </label>
    <label>Description:<textarea name="description" rows="4" /></label>
    <button type="submit" className="schedule-btn">Schedule Now</button>
  </form>
);

const InternshipForm = () => (
  <form
    className="popup-form"
    onSubmit={async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      try {
        const res = await fetch('https://api.digitaltouchcorp.com/api/apply-internship', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        alert(res.ok ? "Application submitted successfully!" : "Failed to submit application.");
        if (res.ok) e.target.reset();
      } catch {
        alert("Server error. Try again later.");
      }
    }}
  >
    <label>Full Name:<input type="text" name="name" required /></label>
    <label>Email:<input type="email" name="email" required /></label>
    <label>Phone:<input type="tel" name="phone" required /></label>
    <label>College:<input type="text" name="college" /></label>
    <label>Department:<input type="text" name="department" /></label>
    <label>Year:<input type="number" name="year" /></label>
    <label>Domain:
      <select name="domain" required>
        <option value="">Select Domain</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Fullstack</option>
      </select>
    </label>
    <label>Why you want to join:<textarea name="message" rows="4" /></label>
    <button type="submit" className="apply-btn">Apply Now</button>
  </form>
);

const Services = () => {
  const [popupTitle, setPopupTitle] = useState(null);

  const servicesList = [
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
  ];

  return (
    <>
      <Navbar />
      <div className="services-page">
        <h1 className="services-title">OUR SERVICES</h1>
        <div className="services-container">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-image">
                <img className="service-imagen" src={service.image} alt={service.title} />
              </div>
              <h4 className="service-heading">{service.title}</h4>
              <p>{service.desc}</p>
              <ul>
                {service.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <button
                className="learn-more"
                onClick={() => setPopupTitle(service.title)}
              >
                {service.title === "Tech Meetup" ? "Schedule Now" :
                 service.title === "Internship Program" ? "Apply Now" : "Learn More"}
              </button>
            </div>
          ))}
        </div>

        {popupTitle && (
          <div className="popup-overlay" onClick={() => setPopupTitle(null)}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <button className="popup-close" onClick={() => setPopupTitle(null)}>✖</button>
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
