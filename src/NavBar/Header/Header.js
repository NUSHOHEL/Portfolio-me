import React from 'react';
import AOS from "aos";
import 'aos/dist/aos.css';
import Typed from 'react-typed';
import propic from "../../images/animation_500_ko7mr07z.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Header = () => {
    
        AOS.init({
          duration : 1000
        })
      
    return (
        <div className=" d-flex justify-content-around flex-wrap p-3 mt-5 " >
            <div style={{width:'400px', textAlign:'left', margin:'5vh 5vw'}} >
                    <div data-aos="zoom-in">
                    <h2>Hello! I'm </h2>
                <Typed style={{fontSize:'40px', fontWeight:'900'}}
                strings={[
                    'MD Nizam Uddin']}
                    typeSpeed={80}
                    >
                </Typed>
                <br/>
                <Typed style={{fontSize:'30px', fontWeight:'500'}}
                strings={[
                    'A React Developer',
                    'A Hungry Learner',
                    'But Lazy Coder']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                    >
                </Typed>
                    </div>
                <div className="d-flex mt-3" data-aos="fade-left">
                   <FontAwesomeIcon className="p-2" icon={faFacebook} size="3x"/>
                   <FontAwesomeIcon className="p-2" icon={faGithub} size="3x"/>
                   <FontAwesomeIcon className="p-2" icon={faLinkedin} size="3x"/>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary m-2" data-aos="fade-right" >DOWNLOAD RESUME</button>
                    <button className="btn btn-primary m-2" data-aos="fade-left" > CONTACT ME</button>
                </div>
            </div>
            <div> <img src={propic} style={{width:'350px', margin:'5vh 5vw'}} alt=""/></div>
        </div>
    );
};

export default Header;