import React from 'react'
import './Services.css'
import im1 from '../assets/im1.jpg';
import im2 from '../assets/im2.jpg';
import im3 from '../assets/im3.jpg';
import im4 from '../assets/im4.jpg';
import im5 from '../assets/im5.jpg';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="services-page">
        <h1 className="services-title">OUR SERVICES</h1>

        <div className="services-container">
          {[
              {
                image: im1,
                title: "Software Development",
                desc: "Tailored software solutions to boost your business efficiency",
                items: [
                  "⭐ Scalable enterprise software tailored to your needs",
                  "⭐ Web platforms with modern, responsive UI",
                  "⭐ Robust desktop solutions for all major operating systems",
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
              <div className="service-image"><img className="service-imagen" src={service.image}/></div>
              <h4 className="service-heading">{service.title}</h4>
              <p>{service.desc}</p>
              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button className="learn-more">Learn More</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Services
