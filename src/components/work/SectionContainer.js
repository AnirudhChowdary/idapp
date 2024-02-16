import React, { useEffect, useRef } from 'react';
import './SectionContainer.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mainImage from '../../images/work_image1.jpg';
import galleryImage1 from '../../images/work_image2.jpg';
import galleryImage2 from '../../images/work_image3.jpg';

gsap.registerPlugin(ScrollTrigger);

const SectionContainer = () => {
  const galleryImages = [
    { src: galleryImage1, style: { marginTop: '-20px' } },
    { src: galleryImage2, style: { marginTop: '90px' } },
    { src: galleryImage1, style: { marginTop: '20px' } },
    // ... add more image objects with src and alignment
  ];

  const galleryRef = useRef([]);

  useEffect(() => {
    galleryRef.current.forEach((el, index) => {
        // Conditionally setting the initial y value based on the index
        const initialY = index === 2 || index === 3 ? 0 : 50;
    
        gsap.fromTo(el,
          { y: initialY, autoAlpha: 0 },
          {
            duration: 1,
            y: 0,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom-=100',
              end: 'bottom top+=100',
              toggleActions: 'play none none reverse',
              markers: false, // Set to true if you want to see the start and end points
            }
          }
        );
      });
    }, []);

  return (
    <div className="section-container">
      {/* Top Section */}
      <div className="top-section">
        {/* Title and Description */}
        <div className="text-content">
          <h1>Projects with a DrElegancee signature</h1>
          <p>We are proud of every interior and custom project to which we put the first and final touches. A selection of our recent achievements.</p>
        </div>
        {/* Main Image */}
        <div className="main-image">
          <img src={mainImage} alt="Main Project" />
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-image" style={image.style} ref={el => galleryRef.current[index] = el}>
            <img src={image.src} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionContainer;
