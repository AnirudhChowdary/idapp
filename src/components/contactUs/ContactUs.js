import React, { useState } from 'react';
import './ContactUs.css'; // Make sure the path is correct
import contactUsImage from '../../images/work_image2.jpg'; // Ensure this path matches your file structure
import Footer from '../Footer'; // Ensure this path matches your file structure
// Import FontAwesomeIcon and specific icons if you're using FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  // State for each input field
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [requirements, setRequirements] = useState('');

  // Handle input changes
  const handleInputChange = (e, setter) => setter(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the submission, like sending the data to a backend server
    console.log({ firstName, lastName, email, phone, message, requirements });
    // Optionally, reset the form fields here
  };

  return (

    <div className='contactUs'>
      <div className="container">
      <div className="content-area">
          <div className="contact-info">
            <h2 className="contact-title">Have Any Questions?</h2>
            <p>Lorem ipsum is a dummy text used to replace text in some areas just for the purpose of an example. It can be used in publishing and graphic design. The lorem ipsum text is usually a section of a Latin text by Cicero with words altered, added and removed to make it nonsensical.</p>
          </div>
          <img src={contactUsImage} alt="Contact Us" />
        </div>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <h2>Contact Us</h2>
            <div>
              <label>First Name:</label>
              <input type="text" value={firstName} onChange={(e) => handleInputChange(e, setFirstName)} />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => handleInputChange(e, setLastName)} />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => handleInputChange(e, setEmail)} />
            </div>
            <div>
              <label>Phone:</label>
              <input type="tel" value={phone} onChange={(e) => handleInputChange(e, setPhone)} />
            </div>
            <div>
              <label>Message:</label>
              <textarea value={message} onChange={(e) => handleInputChange(e, setMessage)}></textarea>
            </div>
            <div>
              <label>Requirements:</label>
              <textarea value={requirements} onChange={(e) => handleInputChange(e, setRequirements)}></textarea>
            </div>
            <button className="submitButton" type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
