/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import web1 from '../images/1_8al0RhBlJgA2P0Br_OQHqQ.jpeg'
import web2 from '../images/news-46-240-oiwebsite.jpg'
import web3 from '../images/Responsive-Web-Design.png'
import AOS from "aos";
import 'aos/dist/aos.css';

const Project = () => {
    AOS.init({
        duration : 1500
      })
    return (
        <div>
            <h1 data-aos="fade-right" className='text-center p-5'>Latest Work</h1>
            <div className='d-flex justify-content-center flex-wrap text-center'>
                <div data-aos="zoom-in" class="card m-3" style={{ width: '20rem' }}>
                    <img src={web3} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">GreenMart - Simple Grocery Shop</h5>
                        <p class="card-text">Some quick example text to build on the card </p>
                        <div className=' d-flex   justify-content-between'>
                            <button href="#" class="btn btn-primary">Visit</button>
                            <button href="#" class="btn btn-primary">Source</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" class="card m-3" style={{ width: '20rem' }}>
                    <img src={web2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Gardeofy - Complete gardening agency website</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className=' d-flex   justify-content-between'>
                            <button href="#" class="btn btn-primary">Visit</button>
                            <button href="#" class="btn btn-primary">Source</button>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" class="card m-3" style={{ width: "20rem" }}>
                    <img src={web1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Speed Riders - Buy Tickets</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className=' d-flex   justify-content-between'>
                            <button href="#" class="btn btn-primary">Visit</button>
                            <button href="#" class="btn btn-primary">Source</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='text-center p-4'>See More</h2>
        </div>
    );
};

export default Project;