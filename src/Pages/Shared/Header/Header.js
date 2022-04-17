import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { BiLogIn, BiLogOut, } from 'react-icons/bi';
import { AiOutlineMenuFold, AiOutlineClose  } from 'react-icons/ai';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='header'>
            <h1><span className='title'>The</span> BODYCOACH</h1>
                
                <nav className={open? 'nav':'nav-bar'} style={{}}>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/services'>Services</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/blog'>Blog</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/about'>About us</NavLink>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}><NavLink className='login-btn' to='/login'>Login<BiLogIn style={{fontSize:'22px'}}></BiLogIn></NavLink></div>
                {/* <NavLink className='login-btn' to='/login'>Logout<BiLogOut style={{fontSize:'22px'}}></BiLogOut></NavLink> */}
            </nav>
            <button onClick={() => setOpen(!open)} className='nav-icon'>{open ? (<AiOutlineClose></AiOutlineClose>):(<AiOutlineMenuFold></AiOutlineMenuFold>)}</button>
        </div>
    );
};

export default Header;