import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; Copyright Protected <span className='dynamic-year'>{new Date().getFullYear()}</span></p>
        </div>
    );
};

export default Footer;