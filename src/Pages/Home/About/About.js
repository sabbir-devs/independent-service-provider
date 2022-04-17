import React from 'react';
import './About.css';
import myImg from '../../../images/me.jpeg';
import { MdSentimentSatisfiedAlt } from 'react-icons/md';

const About = () => {
    return (
        <div className='about'>
            <div className="about-half">
                <img src={myImg} alt="" />
            </div>
            <div className="about-half">
                <h1>About Me <MdSentimentSatisfiedAlt className='imoji'></MdSentimentSatisfiedAlt></h1>
                <p>Hello i'm Sabbir i'm 19 year old. My home town Tangail .I'm a student of programming hero batch 5. After i finish this course. Then i will join a company for 2year. Make for achive skill .Then me and my Broather Buildup a company. My big broather was a student of programming hero hatch 4</p>
            </div>
        </div>
    );
};

export default About;