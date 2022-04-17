import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {img, title, price, date, advantage1, advantage2, advantage3, advantage4, advantage5, advantage6, advantage7, advantage8, advantage9, advantage10, advantage11} = service
    return (
        <div className='service'>
            <div className="service-top">
                <img src={img} alt="" />
                <h2>{title}</h2>
                <h1 style={{color:'#72ae31'}}>${price}</h1>
                <p style={{marginBottom:'10px'}}>{date}</p>
            </div>
            <div className="service-medle">
                <p>{advantage1}</p>
                <p>{advantage2}</p>
                <p>{advantage3}</p>
                <p>{advantage4}</p>
                <p>{advantage5}</p>
                <p>{advantage6}</p>
                <p>{advantage7}</p>
                <p>{advantage8}</p>
                <p>{advantage9}</p>
                <p>{advantage10}</p>
                <p style={{borderBottom:'1px solid #000'}}>{advantage11}</p>
            </div>
            <div className="service-bottom">
                <button>Start Now</button>
            </div>
        </div>
    );
};

export default Service;