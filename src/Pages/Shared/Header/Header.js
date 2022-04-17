import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { BiLogIn, BiLogOut } from 'react-icons/bi';

const Header = () => {
    
    return (
        <div className='header'>
            <h1><span style={{fontWeight:'300', fontSize:'25px', color:'#fff'}}>The</span> BODYCOACH</h1>
            <nav>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/services'>Services</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/blog'>Blog</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/about'>About us</NavLink>
                <NavLink className='login-btn' to='/login'>Login<BiLogIn style={{fontSize:'22px'}}></BiLogIn></NavLink>
                {/* <NavLink className='login-btn' to='/login'>Logout<BiLogOut style={{fontSize:'22px'}}></BiLogOut></NavLink> */}
                
            </nav>
        </div>
    );
};

export default Header;