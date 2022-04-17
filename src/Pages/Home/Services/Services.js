import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='services'>
            <div className="service">
                <h2>BRONZE</h2>
                <h1>$49</h1>
                <p>per month</p>
            </div>
            <div className="service">
                <h2>SILVER</h2>
                <h1>$110</h1>
                <p>for 1st month then $99 per month</p>
            </div>
            <div className="service">
                <h2>GOLD</h2>
                <h1>169</h1>
                <p>for 1st month then £149 per month</p>
            </div>
        </div>
    );
};

export default Services;