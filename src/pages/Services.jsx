import React, { useState, useEffect, useRef } from 'react';
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
      <p>We create seamless, high-performance mobile applications tailored for Android and iOS users...</p>
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
      <p>We design and develop responsive, scalable websites using the latest web technologies...</p>
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
      <p>Our IV programs provide students a first-hand look into the software development lifecycle...</p>
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
      <form className="popup-form" onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        try {
          const res = await fetch('https://api.acutixsoft.com/api/schedule-meetup', { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          if (res.ok) {
            alert("Meeting request sent!");
            e.target.reset();
          } else alert("Failed to send request.");
        } catch {
          alert("Server error.");
        }
      }}>
        <label>Meetup Topic:<input type="text" name="topic" required /></label>
        <label>Date:<input type="date" name="date" required /></label>
        <label>Time:<input type="time" name="time" required /></label>
        <label>Host Name:<input type="text" name="host" /></label>
        <label>Mode:<select name="mode"><option>Online</option><option>Offline</option></select></label>
        <label>Description:<textarea name="description" rows="4" /></label>
        <button type="submit" className="schedule-btn">Schedule Now</button>
      </form>
    </>
  ),
  "Internship Program": (
    <>
      <h2>Apply for Internship</h2>
      <form className="popup-form" onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        try {
          const res = await fetch('"https://api.acutixsoft.com/api/apply-internship', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          });
          if (res.ok) {
            alert("Application submitted!");
            e.target.reset();
          } else alert("Failed to apply.");
        } catch {
          alert("Server error.");
        }
      }}>
        <label>Full Name:<input type="text" name="name" required /></label>
        <label>Email:<input type="email" name="email" required /></label>
        <label>Phone:<input type="tel" name="phone" required /></label>
        <label>College:<input type="text" name="college" /></label>
        <label>Department:<input type="text" name="department" /></label>
        <label>Year:<input type="number" name="year" /></label>
        <label>Domain:<select name="domain" required>
          <option value="">Select Domain</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select></label>
        <label>Why you want to join:<textarea name="message" rows="4" /></label>
        <button type="submit" className="apply-btn">Apply Now</button>
      </form>
    </>
  )
};

const imageSlides = {
  "Website Development": [im1, im1],
  "Application Development": [im2, im2],
  "Industrial Visit for Students": [im3, im3],
  "Internship Program": [im4, im4],
  "Tech Meetup": [im5, im5]
};

const Services = () => {
  const [popupTitle, setPopupTitle] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setVisibleCards(prev => [...new Set([...prev, index])]);
        }
      });
    }, { threshold: 0.2 });

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const handleLearnMore = (title) => setPopupTitle(title);
  const closePopup = () => setPopupTitle(null);
  const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});
document.querySelectorAll('.service-card').forEach(card => observer.observe(card));


  const serviceData = [
    {
      title: "Website Development",
      desc: "Responsive and interactive web solutions for modern businesses",
      items: [
        "⭐ Scalable enterprise websites",
        "⭐ SEO-optimized and fast loading",
        "⭐ CMS integration with admin dashboard",
      ]
    },
    {
      title: "Application Development",
      desc: "Building seamless mobile apps for Android and iOS platforms",
      items: [
        "⭐ Native apps with high performance and UX",
        "⭐ Cross-platform apps using latest frameworks",
        "⭐ PWA solutions for faster deployment and reach",
      ]
    },
    {
      title: "Industrial Visit for Students",
      desc: "Educational tours designed to expose students to real-world IT workflows",
      items: [
        "⭐ Guided walkthrough of our development process",
        "⭐ Interactive sessions with software engineers",
        "⭐ Insight into latest tools and technologies",
      ]
    },
    {
      title: "Internship Program",
      desc: "Practical learning experience for aspiring developers and designers",
      items: [
        "⭐ Hands-on training with live projects",
        "⭐ Mentorship from experienced professionals",
        "⭐ Certification and career guidance",
      ]
    },
    {
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
          {serviceData.map((service, index) => {
            const isVisible = visibleCards.includes(index);
            return (
              <div
                className={`service-card ${isVisible ? 'animate-in' : ''}`}
                key={index}
                data-index={index}
                ref={el => cardsRef.current[index] = el}
              >
                <div className="slideshow-image">
                  <img src={imageSlides[service.title][0]} alt={service.title} />
                </div>
                <h4 className="service-heading">{service.title}</h4>
                <p>{service.desc}</p>
                <ul>
                  {service.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <button className="learn-more" onClick={() => handleLearnMore(service.title)}>
                  {service.title === "Tech Meetup" ? "Schedule Now" :
                   service.title === "Internship Program" ? "Apply Now" : "Learn More"}
                </button>
              </div>
            );
          })}
        </div>
        {popupTitle && (
          <div className="popup-overlay" onClick={closePopup}>
            <div className="popup-content" onClick={e => e.stopPropagation()}>
              <button className="popup-close" onClick={closePopup}>✖</button>
              {popupContent[popupTitle]}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Services;
