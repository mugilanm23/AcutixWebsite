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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');
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
          <button className="contact-btn">Contact Us</button>
          <button className="contact-btn">Schedule a Call</button>
        </div>

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
          <select name="helpType" value={formData.helpType} onChange={handleChange} required>
            <option value="">Select a purpose</option>
            <option value="web">Website Development</option>
            <option value="software">Software Solutions</option>
            <option value="tech_meetup">Request a Tech Meetup</option>
            <option value="industrial_visit">Industrial Visit (for Students)</option>
            <option value="internship">Internship Opportunity</option>
          </select>

          <label>Additional Information</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows="5"
          ></textarea>

          <button type="submit" className="submit-btn">Submit Form</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
