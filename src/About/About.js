import React from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import profilepic from '../images/propic.png'

const About = () => {
    AOS.init({
        duration : 1000
      })
    return (
        <div className="text-center mt-5 p-3">
            <h1 data-aos="zoom-out"> About Me</h1>
            
            <div className="d-flex justify-content-around flex-wrap">
                <div className=" m-5 " style={{ width: '350px' }} data-aos="fade-left">
                    <h2>Who's This Guy?</h2>
                    
                    <p className="text-md-start text-sm-center">Self-motivated and confident Web Developer. Able to do any web and programming related task by handling difficulties smoothly in any given time. Have a reasonable skill on Front-End and Back-End development.
                    </p>
                </div>
                <div className=" m-5 " data-aos="fade-right" style={{ width: '350px' }}> 
                <img src={profilepic} alt="" style={{width:'300px'}} />
                </div>
            </div>
        </div>
    );
};

export default About;