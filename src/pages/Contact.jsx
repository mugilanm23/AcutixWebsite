import './Contact.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    helpType: '',
    additionalInfo: ''
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    type: 'Call',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleScheduleChange = (e) => {
    const { name, value } = e.target;
    setScheduleData(prev => ({ ...prev, [name]: value }));
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    console.log('Schedule Request:', scheduleData);
    alert('Schedule request submitted!');
    setPopupOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1 className="contact-heading">Contact Acutix</h1>
        <p className="contact-desc">
          Have a project idea, a partnership proposal, or just a few questions? We'd love to hear from you!
          Whether you're a business seeking digital solutions or an individual looking for opportunities, 
          our team is here to help. Fill out the form below, and we’ll get back to you promptly.
        </p>

        <div className="contact-buttons">
          <button className="contact-btn" onClick={() => setPopupOpen(true)}>Schedule a Call</button>
        </div>

        {popupOpen && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Schedule a Meeting or Call</h3>
              <form className="popup-form" onSubmit={handleScheduleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={scheduleData.name} onChange={handleScheduleChange} required />
                <input type="email" name="email" placeholder="Email" value={scheduleData.email} onChange={handleScheduleChange} required />
                <select name="type" value={scheduleData.type} onChange={handleScheduleChange}>
                  <option value="Call">Call</option>
                  <option value="Meet">Meeting</option>
                </select>
                <input type="date" name="date" value={scheduleData.date} onChange={handleScheduleChange} required />
                <input type="time" name="time" value={scheduleData.time} onChange={handleScheduleChange} required />
                <textarea name="additionalInfo" placeholder="Additional message" value={formData.additionalInfo} onChange={handleChange} rows="4" />

                <div className="popup-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" className="cancel" onClick={() => setPopupOpen(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}

        <h3 className="form-title">Let us know your purpose</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Purpose</label>
          <select name="helpType" value={formData.helpType} onChange={handleChange}  required  >
            <option value="" disabled hidden>
              Select your purpose
            </option>
            <option value="web">Website Development</option>
            <option value="software">Software Solutions</option>
            <option value="tech_meetup">Request a Tech Meetup</option>
            <option value="industrial_visit">Industrial Visit (for Students)</option>
            <option value="internship">Internship Opportunity</option>
          </select>

          <label>Additional Information</label>
          <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} rows="5" />

          <button type="submit" className="submit-btn">Submit Form</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
