// ScrollEffect.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScrollEffect.css';
import smallImage from '../images/homepage_smallimage.jpg';
import largeImage from '../images/homepage_largeimage.jpg';
import arrow from '../images/arrow-up-right.svg';

const ScrollEffect = () => {
    let navigate = useNavigate();
    const navigateToContact = () => navigate('/contact');

    return (
        <div className="scroll-effect-container">
            <div className="content-wrapper">
                <div className="moving-content">
                    {/* Moving content goes here */}
                    <div className='text-block'>
                        <div className='text-block_header'>
                            <h2>A small or large project?</h2>
                            <h2>Authenticity prevails.</h2>
                        </div>
                        <div className='text-block_content'>
                            <p>Each design is focused on the personal taste and needs of the user. Whether it concerns a custom cupboard or staircase, or the overall picture of your interior: your name will always be invisibly printed on it.</p>
                        </div>
                        <div className='text-block_footer'>
                            <button onClick={navigateToContact}>
                                I am looking for customization
                                <img src={arrow} alt="Customization" className="button-icon" />
                            </button>
                            <button onClick={navigateToContact}>
                                I want a complete furnishing
                                <img src={arrow} alt="Furnishing" className="button-icon" />
                            </button>
                        </div>
                    </div>
                    <div className='image_block'>
                        <img src={smallImage} alt="Small Visual" className='smallImage'/>
                    </div>
                    {/* More content here to ensure scrolling */}
                </div>
                <div className="fixed-content">
                    <img src={largeImage} alt="Large Visual" />
                </div>
            </div>
        </div>
    );
};

export default ScrollEffect;
