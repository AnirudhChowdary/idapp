import React from 'react';
import './Home.css'; // Make sure to create this CSS file for styling
import backgroundImage from '../images/Background_home.jpg'
import { Link } from 'react-router-dom';
import Services from './Services'
import Testimonials from './Testimonials';
import Footer from './Footer';
import ScrollEffect from './ScrollEffect';

const Home = () => {
  return (
    <div className="homePage">
      <section className="introSection" style={{ backgroundImage: `url(${backgroundImage})` }}>
      </section>
      <section className="aboutUs">
        <div className='custom-font'>Creating inspired interior</div>
        <p>Welcome to Illuminare Staging & Design. We specialize in crafting unique, inspirational spaces through strategic and creative interior design. We’re based in Denton, TX and serve clients throughout the DFW area and beyond. Learn more about us, our style, and what we can offer you. We’re so glad you’ve stopped by.</p>
        <Link to="/contact" className="btn get-quote-button">Get A Quote</Link>
      </section>


      <section className="ourServices">
        <div className='custom-font'>our services</div>
        <p>REDESIGN AND STAGING</p>
        <Services/>
      </section>

      <ScrollEffect></ScrollEffect>


      <section className="TESTIMONIALS">
      <Testimonials/>
      </section>

      {/* You can continue adding other sections here following the structure above */}

      <section className='Footer'>
        <Footer></Footer>
      </section>
    </div>
  );
};

export default Home;
