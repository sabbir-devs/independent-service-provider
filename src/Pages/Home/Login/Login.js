import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [togglePassInput, setTogglePassInput] = useState(false);


  const emaiInput =(emailInput) => {
      setEmail(emailInput)
  }
  const passwordInput = (passwordInput) => {
    setPassword(passwordInput)
  }
  console.log(email, password)

  const handleFormSubmitLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error)
      });
  };


  const forgetPassword = () => {
      console.log(email)
    sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('password reset sucessful')
  })
  .catch((error) => {
    console.log(error)
    // ..
  });
  }


  const googleSignIn = () => {
    console.log("clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="login">
        <form onSubmit={handleFormSubmitLogin} className="form">
          <h3>Please Login!!</h3>
          <div className="email-password-input">
            <input
            onBlur={(event) => emaiInput(event.target.value)}
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
              type={togglePassInput ? "password" : "text"}
              name="password"
              placeholder="Password..."
              id=""
            />
            <label
              onClick={() => setTogglePassInput(!togglePassInput)}
              className="labels"
              htmlFor="password"
            >
              {togglePassInput ? (
                <AiFillEye></AiFillEye>
              ) : (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              )}
            </label>
          </div>

          <div>
            <p onClick={() => forgetPassword()} className="forget-pass">forget password?</p>
          </div>
          <input className="register-btn" type="submit" value="Login" />
          <p style={{ fontSize: "18px" }}>
            Don't have an account?
            <span onClick={() => navigate('/signup')} className="forget-pass">
              create account
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

export default Login;
