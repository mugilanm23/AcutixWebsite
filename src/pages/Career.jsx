import React from 'react';
import './Career.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img9 from '../assets/img9.jpg';

const Career = () => {
  const linkedInJobsUrl = 'https://www.linkedin.com/company/acutix-soft-llp/';

  const jobOpenings = [
    {
      title: 'Senior Full Stack Developer',
      details: '5+ years experience · Full-time',
      description: 'Lead development of core products',
      applyUrl: linkedInJobsUrl,
    },
    {
      title: 'UX/UI Designer',
      details: '3+ years experience · Onsite · Full-time',
      description: 'Create engaging user experiences and web interfaces',
      applyUrl: linkedInJobsUrl,
    },
    {
      title: 'DevOps Engineer',
      details: '4+ years experience · Full-time',
      description: 'Implement CI/CD pipelines, containerization, and cloud architecture',
      applyUrl: linkedInJobsUrl,
    },
  ];

  const benefits = [
    {
      title: 'Flexible Work Schedule',
      desc: 'Choose working hours that suit productivity while ensuring team collaboration and deadlines.',
    },
    {
      title: 'Fast Career Growth Opportunities',
      desc: 'Gain rapid exposure to real projects, clients, and cross-functional roles for accelerated growth.',
    },
    {
      title: 'Annual Learning Budget',
      desc: 'Funds for courses, certifications, conferences, and workshops to support continuous learning.',
    },
    {
      title: 'Employee Wellness Program',
      desc: 'Support physical and mental health via gyms, therapy, checkups, or meditation apps.',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="careers-page">
        <h1 className="team-heading">JOIN OUR TEAM</h1>
        <p className="team-subtext">Build the future of technology with us</p>

        <button
          className="open-btn"
          onClick={() => window.open(linkedInJobsUrl, '_blank')}
        >
          View Open Positions
        </button>

        <h2 className="section-title">Current Job Openings</h2>
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
                Apply Now
              </a>
            </div>
          ))}
        </div>

        <h2 className="section-title">Tech Meetups & Company Life</h2>
        <p className="team-subtext">
          At Acutix Soft LLP, we believe that great tech is built by happy, connected teams.
          From engaging tech meetups to lively team activities, our culture thrives on collaboration,
          creativity, and continuous learning. Here’s a glimpse into life at Acutix!
        </p>
        <div className="gallery-grid">
          {[img1, img2, img3, img4, img5, img6, img7, img9].map((img, i) => (
            <img key={i} src={img} alt={`Company life ${i + 1}`} />
          ))}
        </div>

        <h2 className="section-title">Perks and Benefits</h2>
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
