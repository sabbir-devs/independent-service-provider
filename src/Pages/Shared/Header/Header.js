import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css'
import { BiLogIn, BiLogOut, } from 'react-icons/bi';
import { AiOutlineMenuFold, AiOutlineClose  } from 'react-icons/ai';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../../Firebase/firebase.init';
import toast from 'react-hot-toast';

const Header = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setCurrentUser(user)
            } else {
              setCurrentUser({})
            }
          });
          return unsubscribe
    },[])
    const handleSignOut = () => {
        signOut(auth).then(() => {
            toast.success("Logout Sucessful")
          }).catch((error) => {
            // An error happened.
          });
    }
    return (
        <div className='header'>
            <div>
            <h1><span className='title'>The</span> BODYCOACH</h1>
            <h3 className='userName'>{currentUser?.displayName ? ('Hello: '):('')} <span style={{color:'#72ae31'}}>{currentUser?.displayName ? (currentUser.displayName):('')}</span></h3>
            </div>
                
                <nav className={open? 'nav':'nav-bar'} style={{}}>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/'>Home</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/services'>Services</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/blog'>Blog</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-list' : 'list')} to='/about'>About me</NavLink>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                    {currentUser?.email ? 
                    (<button onClick={() => handleSignOut()}  className='login-btn'>Logout<BiLogOut style={{fontSize:'22px'}}></BiLogOut></button>)
                    :
                    (<NavLink onClick={() => navigate('/')}  className='login-btn' to='/login'>Login<BiLogIn style={{fontSize:'22px'}}></BiLogIn></NavLink>)
                    }
                    
                </div>
            </nav>
            <button onClick={() => setOpen(!open)} className='nav-icon'>{open ? (<AiOutlineClose></AiOutlineClose>):(<AiOutlineMenuFold></AiOutlineMenuFold>)}</button>
        </div>
    );
};

export default Header;