import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SectionContainer.css'; // Ensure this CSS is correctly set up as described earlier

// Import images
import mainImage from '../../images/work_image1.jpg';
import galleryImage1 from '../../images/work_image2.jpg';
import galleryImage2 from '../../images/work_image3.jpg';
import Footer from '../Footer';

gsap.registerPlugin(ScrollTrigger);

const SectionContainer = () => {
    useEffect(() => {
        gsap.utils.toArray('.gs_reveal').forEach(elem => {
            gsap.set(elem, { autoAlpha: 0 }); // Initially hide the element

            ScrollTrigger.create({
                trigger: elem,
                start: "top 80%",
                end: "bottom 20%",
                onEnter: () => animateFrom(elem),
                onEnterBack: () => animateFrom(elem, -1),
                onLeave: () => hide(elem) // Ensure that the element is hidden when scrolled into view
            });
        });
    }, []);

    // Animation function
    function animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }
        gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }

    function hide(elem) {
        gsap.set(elem, { autoAlpha: 0 });
    }

    return (
        <div className="cInnerContent">
            {/* Top Section */}
            <div className="top-section gs_reveal">
                {/* Title and Description */}
                <div className="text-content">
                    <h1 className="header-section gs_reveal ipsType_center">Projects with a DrElegancee signature</h1>
                    <p>We are proud of every interior and custom project to which we put the first and final touches. A selection of our recent achievements.</p>
                </div>
                {/* Main Image */}
                <div className="main-image gs_reveal gs_reveal_fromRight">
                    <img src={mainImage} alt="Main Project" />
                </div>
            </div>

            {/* Gallery Section */}
            <div className="features">
                <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone gs_reveal">
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                        <div className="card">
                            <img width="479" src={galleryImage1} alt="" />
                            <p>work space </p>
                        </div>
                    </div>
                    <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                        <div className="card">
                            <img width="479" src={galleryImage1} alt="" />
                            <p>kitchen space </p>
                        </div>
                    </div>
                </div>

                {/* Additional sections as needed */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SectionContainer;
