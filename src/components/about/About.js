import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import mainImage from '../../images/work_image1.jpg';
import arrow from '../../images/arrow-up-right.svg';

const About = () => {
    let navigate = useNavigate();
    const navigateToContact = () => navigate('/contact');

    return (
        <div className='About'>
            <div className='moto'>
                <div className='title'> <p>We create your craving from a shared love for customization.</p></div>
                <div className='description'><p>Renner is the story of interior architect Petra Roks and carpenter John Rommens. The creative duo complement each other perfectly in the field of smart customization: Petra with her eye for aesthetics and functionality, John with his skilled hand and masterful precision. Since 2018, they have combined their talents to offer a total service from interior design to realization.</p></div>
            </div>

            <div className='together'>
                <div className='left'>

                    <p>How does that work in his (custom) work?</p>
                    <ul className="together-list">
                        <li>We meet during a completely non-binding introductory meeting . During such a digital meeting, Petra listens to your story and we go through a possible architectural plan. After this conversation you will receive a tailor-made interior design quote. </li>
                        <li>The real design starts. We discuss everything in detail during an extensive face-to-face conversation. The target? Designing an interior that completely adapts to you and your way of life.</li>
                        <li>The design is supported with photorealistic 3D images, an extensive 2D floor plan, 2D views and even lighting plans.</li>
                        <li>Based on the design, you will receive a tailor-made quote for the realization of the custom work, stairs, parquet, interior doors,...</li>
                        <li>Let's build it! Technical plans, site follow-up, communication with architect and other parties,... to ultimately deliver your interior dream and custom cabinets with a big bow!</li>
                    </ul>
                </div>

                <div className='right'>
                    <img src={mainImage} alt="together" />
                </div>
                <button className='btn-scall' onClick={navigateToContact}>book a digital get-together <img src={arrow} alt="Furnishing" className="button-icon" /></button>
            </div>
            
            <div className='individuals'>
                <div className='first'>
                    <div className='left'>
                        <img src={mainImage} alt="together" />
                    </div>
                    <div className='right'>
                        <p>Fifteen years ago I found my calling as a carpenter.”</p>
                        <p> I have been fascinated by woodworking since I was little. After my studies, I knew: I wanted to do something with it. Since the start of Renner, I have been able to use my favorite material every day to create interiors and custom work. Starting with a chainsaw and ending with fine sandpaper to turn an oak trunk into a beautiful staircase or desk, I love it</p>
                    </div>
                </div>
                <div className='second'>

                    <div className='left'>
                        <p>Fifteen years ago I found my calling as a carpenter.”</p>
                        <p> I have been fascinated by woodworking since I was little. After my studies, I knew: I wanted to do something with it. Since the start of Renner, I have been able to use my favorite material every day to create interiors and custom work. Starting with a chainsaw and ending with fine sandpaper to turn an oak trunk into a beautiful staircase or desk, I love it</p>

                    </div>
                    <div className='right'>
                        <img src={mainImage} alt="together" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
