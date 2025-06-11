import React, { useEffect } from 'react';
import './Career.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img9 from "../assets/img9.jpg";

const Career = () => {
  const linkedInJobsUrl = "https://www.linkedin.com/company/acutix-soft-llp/";

  const jobOpenings = [
    {
      title: "Senior Full stack Developer",
      details: "5+ years experience , Full time work",
      description: "lead development of core products",
      applyUrl: linkedInJobsUrl
    },
    {
      title: "UX/UI Designer",
      details: "3+ years of experience , onsite, fulltime",
      description: "create engaging user experience and web interfaces",
      applyUrl: linkedInJobsUrl
    },
    {
      title: "Devops Engineer",
      details: "4+ years experiences , full time",
      description: "implement CI/CD pipelines, containerization, cloud etc.",
      applyUrl: linkedInJobsUrl
    }
  ];

  const benefits = [
    {
      title: "Flexible Work Schedule",
      desc: "Empower employees with autonomy—choose working hours that suit their productivity, while ensuring team collaboration and deadlines are met."
    },
    {
      title: "Fast Career Growth Opportunities",
      desc: "Startups offer rapid exposure to real projects, client interaction, and cross-functional roles, accelerating skill development and promotions."
    },
    {
      title: "Annual Learning Budget",
      desc: "Allocate funds for online courses, certifications, tech conferences, or workshops, helping employees stay updated and advance their skills."
    },
    {
      title: "Employee Wellness Program",
      desc: "Provide physical and mental health support through gym memberships, therapy sessions, health checkups, or meditation app subscriptions."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const jobCards = document.querySelectorAll('.job-card');
    const benefitCards = document.querySelectorAll('.benefit-card');
    const galleryImgs = document.querySelectorAll('.gallery-grid img');

    [...jobCards, ...benefitCards, ...galleryImgs].forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="careers-page">
        <h1 className="team-heading">JOIN OUR TEAM</h1>
        <p className="team-subtext">build the future of technology with us</p>

        <button
          className="open-btn"
          onClick={() => window.open(linkedInJobsUrl, '_blank')}
        >
          View open positions
        </button>

        <h1 className="section-title">CURRENT JOB OPENINGS</h1>
        <div className="job-listings">
          {jobOpenings.map((job, index) => (
            <div className="job-card" key={index}>
              <h4>{job.title}</h4>
              <p className="job-details">{job.details}</p>
              <p className="job-desc">{job.description}</p>
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-now"
              >
                APPLY NOW
              </a>
            </div>
          ))}
        </div>

        <h1 className="section-title">TECH MEETUPS & COMPANY LIFE</h1>
        <p className="team-subtext">
          At Acutix Soft LLP, we believe that great tech is built by happy, connected teams. 
          From engaging tech meetups to lively team activities, our culture thrives on collaboration, 
          creativity, and continuous learning. Here’s a glimpse into life at Acutix!
        </p>

        <div className="gallery-grid">
          {[img1, img2, img3, img4, img5, img6, img7, img9].map((src, i) => (
            <img src={src} alt={`Gallery ${i + 1}`} key={i} />
          ))}
        </div>

        <h1 className="section-title">PERKS AND BENEFITS</h1>
        <div className="benefits-section">
          {benefits.map((item, index) => (
            <div className="benefit-card" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
