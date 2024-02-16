import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling
import serviceImage1 from '../images/our_service_home_1.jpg';
import serviceImage2 from '../images/our_service_home_2.jpg';
import serviceImage3 from '../images/our_service_home_3.jpg';

const Services = () => {
    return (
        <div>
            <div className="image-container">
                <div className="service-imgbx">
                    <img src={serviceImage1} alt="service 1" class="uniform-size" />
                    <div className="service-txtx">
                        <h4>Service Title</h4>
                        <span>Short Service Description</span>
                    </div>
                </div>
                <div className="service-imgbx">
                    <img src={serviceImage2} alt="service 2" class="uniform-size" />
                    <div className="service-txtx">
                        <h4>Service Title</h4>
                        <span>Short Service Description</span>
                    </div>
                </div>
                <div className="service-imgbx">
                    <img src={serviceImage3} alt="service 3" class="uniform-size" />
                    <div className="service-txtx">
                        <h4>Service Title</h4>
                        <span>Short Service Description</span>
                    </div>
                </div>
                <div className="service-imgbx">
                    <img src={serviceImage3} alt="service 3" class="uniform-size" />
                    <div className="service-txtx">
                        <h4>Service Title</h4>
                        <span>Short Service Description</span>
                    </div>
                </div>
                <div className="service-imgbx">
                    <img src={serviceImage3} alt="service 3" class="uniform-size" />
                    <div className="service-txtx">
                        <h4>Service Title</h4>
                        <span>Short Service Description</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;