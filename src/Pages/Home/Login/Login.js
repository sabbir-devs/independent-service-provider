import React from 'react';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { AiFillEye } from 'react-icons/ai';

const Login = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className='login'>
            <form onSubmit={handleFormSubmit} className="form"> 
                <h3>Please Login!!</h3>
                <div className='email-password-input'>
                    <input className='inputs' type="email" name="email" placeholder='Email...' id="" />
                </div>
                <div className='email-password-input'>
                    <input className='inputs' type="password" name="password" placeholder='Password...' id="" />
                    <label className='labels' htmlFor="password"><AiFillEye></AiFillEye></label>
                </div>
                
                <div>
                    <p className='forget-pass'>forget password?</p>
                </div>
                <input className='register-btn' type="submit" value="Login" />
                <p style={{fontSize:'18px'}}>Don't have an account? <span className='forget-pass'>create account</span></p>
                <button className='google-signup'><FcGoogle style={{fontSize:'25px'}}></FcGoogle> Sign up with google</button>
            </form>
        </div>
    );
};

export default Login;