import React from 'react'
import './Hero.css'

import logo from '../../assets/rahadlogo.jpg'
const Hero = () => {
    return (
        <div className='hero d-flex align-items-center justify-content-center text-center text-light'>
            <div className="container">
                <img src={logo} alt=""
                    className='profile-img mb-4 animate-float' />

                <h1 className='display-4 fw-bold'>MD RAHAD </h1>
                <h2>
                    Building Intelligent Systems,
                    One Line of Code at a Time
                </h2>
                <p>Full Stack MERN Developer Certified | Java DSA Certified | AI Developer (in Progress)</p>
                <div className="btn-box">
                    <button>Hire Me</button>
                    <button>View Projects</button>
                </div>

            </div>

        </div>
    )
}

export default Hero