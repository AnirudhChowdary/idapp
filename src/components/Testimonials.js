// Testimonials.js
import React from 'react';
import './Testimonials.css';
import TestimonalImg from '../images/Testimonal_1.jpg' 

// Example testimonials data
const testimonials = [
  {
    id: 1,
    text: "Mary Ann came in and brought happy to our home...Mary Ann came in and brought happy to our home...Mary Ann came in and brought happy to our home...Mary Ann came in and brought happy to our home...Mary Ann came in and brought happy to our home...Mary Ann came in and brought happy to our home...Mary Ann came in and brought happy to our home...",
    imageSrc: TestimonalImg,
    alt: "Interior Design 1"
  },
  {
    id: 2,
    text: "Mary Anne Smiley is the group to call when you are wanting to achieve...",
    imageSrc: TestimonalImg,
    alt: "Interior Design 2"
  },
  {
    id: 3,
    text: "Mary Anne Smiley is the group to call when you are wanting to achieve...",
    imageSrc: TestimonalImg,
    alt: "Interior Design 2"
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>TESTIMONIALS</h2>
      <div className="testimonials-container">
        {testimonials.map(({ id, text, imageSrc, alt }) => (
          <div key={id} className="testimonial">
            <img src={imageSrc} alt={alt} className="testimonial-image" />
            <p className="testimonial-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
