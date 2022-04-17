import React from 'react';
import './NotFound.css'
import errorBaner from '../../../images/error-baner.png';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={errorBaner} alt="" />
        </div>
    );
};

export default NotFound;