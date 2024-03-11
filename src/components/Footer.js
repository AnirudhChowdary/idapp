// Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file for styling
import logo from '../images/Testimonal_1.jpg'; // Path to your logo image
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; // Path to your Instagram logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMobileAlt, faAt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (

    
    <footer className="site-footer">
      <div className="footer-logo">
        <img src={logo} alt="Renner Interieur" />
      </div>
      <div className="footer-content">
        <div className="footer-contact">
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} /><p>Klein Boom 35, 2580 Putte</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faAt} /><p>info@renner-interieur.be</p>
          </div>
          <div className="contact-item">
          <FontAwesomeIcon icon={faMobileAlt} /><p>+32 015 68 54 50</p>
          </div>
        </div>
        <div className="footer-links">
          <a href="https://www.instagram.com/drelegance_interior?igsh=MWMxbHhnODYwYzFyNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <FontAwesomeIcon icon={faInstagram} size="2x" /> </a>
          <a href="https://www.instagram.com/drelegance_interior?igsh=MWMxbHhnODYwYzFyNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <FontAwesomeIcon icon={faTwitter} size="2x" /> </a>
          <a href="https://www.instagram.com/drelegance_interior?igsh=MWMxbHhnODYwYzFyNg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="instagram-link">
            <FontAwesomeIcon icon={faFacebook} size="2x" /> </a>

        </div>
        <div className="footer-nav">
          <a href="//contact">contact</a>
          <a href="/total-concept">total concept</a>
          <a href="/realizations">realizations</a>
          <a href="/about">about us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
