import React from 'react';
import './Career.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Career = () => {
  const jobOpenings = [
    {
      title: "Senior Full stack Developer",
      details: "5+ years experience , Full time work",
      description: "lead development of core products",
    },
    {
      title: "UX/UI Designer",
      details: "3+ years of experience , onsite, fulltime",
      description: "create engaging user experience and web interfaces",
    },
    {
      title: "Devops Engineer",
      details: "4+ years experiences , full time",
      description: "implement CI?CD pipelines, containerization , clout etc..",
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
      desc: "annual budget of internship coursesAllocate funds for online courses, certifications, tech conferences, or workshops, helping employees stay updated and advance their skills."
    },
    {
      title: "Employee Wellness Program",
      desc: "Provide physical and mental health support through gym memberships, therapy sessions, health checkups, or meditation app subscriptions."
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="careers-page">
      <h1 className="team-heading">JOIN OUR TEAM</h1>
      <p className="team-subtext">build the future of technology with us</p>
      <button className="open-btn">View open positions</button>

      <h1 className="section-title">CURRENT JOB OPENINGS</h1>
      <div className="job-listings">
        {jobOpenings.map((job, index) => (
          <div className="job-card" key={index}>
            <h4>{job.title}</h4>
            <p className="job-details">{job.details}</p>
            <p className="job-desc">{job.description}</p>
            <a href="#" className="apply-now">APPLY NOW</a>
          </div>
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
    <Footer/>
    </>
  )
}

export default Career
