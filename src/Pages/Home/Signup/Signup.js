import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../Firebase/firebase.init';
import './Signup.css';
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";


const provider = new GoogleAuthProvider();
const Signup = () => {
    const navigate = useNavigate()
  const [regTogglePassInput, setRegTogglePassInput] = useState(false);
  const [toggleConPassInput, setToggleConPassInput] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
        varifyEmail()
      })
      .catch((error) => {
          console.log(error)
      });
  };

  const varifyEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
      // Email verification sent!
      // ...
      console.log('email varification send')
    });
  }

  console.log(email, password, confirmPassword)

  const emailInput = emailInput => {
      setEmail(emailInput);
  }
  const passwordInput = passwordInput => {
      setPassword(passwordInput)
  }
  const confirmPasswordInput = confirmPasswordInput => {
      setConfirmPassword(confirmPasswordInput)
  }


  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
    return (
        <div className='login'>
            <form onSubmit={handleFormSubmit} className="form">
          <h3>Please Register!!</h3>
          <div className="email-password-input">
            <input
              onBlur={(event) => emailInput(event.target.value)}
              className="inputs"
              type="email"
              name="email"
              placeholder="Email..."
              id=""
            />
          </div>
          <div className="email-password-input">
            <input
              onBlur={(event) => passwordInput(event.target.value)}
              className="inputs"
              type={regTogglePassInput ? "password" : "text"}
              name="password"
              placeholder="Password..."
              id=""
            />
            <label
              onClick={() => setRegTogglePassInput(!regTogglePassInput)}
              className="labels"
              htmlFor="password"
            >
              {regTogglePassInput ? (
                <AiFillEye></AiFillEye>
              ) : (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              )}
            </label>
          </div>
          <div className="email-password-input">
            <input
              onBlur={(event) => confirmPasswordInput(event.target.value)}
              className="inputs"
              type={toggleConPassInput ? "password" : "text"}
              name="confirmPassword"
              placeholder="Confirm Password..."
              id=""
            />
            <label
              onClick={() => setToggleConPassInput(!toggleConPassInput)}
              className="labels"
              htmlFor="confirmPassword"
            >
              {toggleConPassInput ? (
                <AiFillEye></AiFillEye>
              )
              
              : 
              
              (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              )}
            </label>
          </div>

          <input className="register-btn" type="submit" value="Register" />
          <p style={{ fontSize: "18px" }}>
            Alrady have an account?{" "}
            <span onClick={() => navigate('/login')} className="forget-pass">
              login
            </span>
          </p>
          <div className="option">
            <div className="option-left"></div>
            <p>or</p>
            <div className="option-right"></div>
          </div>
          <button onClick={() => googleSignIn()} className="google-signup">
            <FcGoogle style={{ fontSize: "25px" }}></FcGoogle> Sign up with
            google
          </button>
        </form>
            
        </div>
    );
};

export default Signup;