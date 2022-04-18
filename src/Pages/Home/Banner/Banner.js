import React from 'react';
import './Banner.css';
import trainerImage from '../../../images/training-1.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className='banner'>
            <div className="half-banner">
                <img src={trainerImage} alt="" />
            </div>
            <div className="half-banner">
                <h1>My Mission</h1>
                <p>I love helping people stick with something that they get great results from but that they enjoy too. Nowadays, people that their physical and mental health is worth investing in, recognising the benefits of outsourching all the management of their health and fitness to a professional. I am 100% committed to helpiing you build better relationships wiith food and your own body, while building strength and confidence that will take not just your fintess, but your whole life to the next level.</p>
                <button onClick={() => navigate('/services')}>See our services</button>
            </div>
        </div>
    );
};

export default Banner;