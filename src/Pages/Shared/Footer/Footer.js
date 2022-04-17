import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; Copyright Protected <span style={{fontSize:'40px', color:'#72ae31'}}>{new Date().getFullYear()}</span></p>
        </div>
    );
};

export default Footer;