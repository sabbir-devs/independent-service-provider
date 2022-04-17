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
} from "firebase/auth";
import { auth } from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [togglePassInput, setTogglePassInput] = useState(false);
  const [regTogglePassInput, setRegTogglePassInput] = useState(false);
  const [toggleConPassInput, setToggleConPassInput] = useState(false);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
          console.log(error)
      });
      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
  };
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
      {toggle ? (
        <form onSubmit={handleFormSubmit} className="form">
          <h3>Please Register!!</h3>
          <div className="email-password-input">
            <input
              className="inputs"
              type="email"
              name="email"
              placeholder="Email..."
              id=""
            />
          </div>
          <div className="email-password-input">
            <input
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
              className="inputs"
              type={toggleConPassInput ? "password" : "text"}
              name="confirmPassword"
              placeholder="Confirm Password..."
              id=""
            />
            <label
              onClick={() => setToggleConPassInput(!toggleConPassInput)}
              className="labels"
              htmlFor="password"
            >
              {toggleConPassInput ? (
                <AiFillEye></AiFillEye>
              ) : (
                <AiFillEyeInvisible></AiFillEyeInvisible>
              )}
            </label>
          </div>

          <input className="register-btn" type="submit" value="Register" />
          <p style={{ fontSize: "18px" }}>
            Alrady have an account?{" "}
            <span onClick={() => setToggle(!toggle)} className="forget-pass">
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
      ) : (
        <form onSubmit={handleFormSubmitLogin} className="form">
          <h3>Please Login!!</h3>
          <div className="email-password-input">
            <input
              className="inputs"
              type="email"
              name="email"
              placeholder="Email..."
              id=""
            />
          </div>
          <div className="email-password-input">
            <input
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
            <p className="forget-pass">forget password?</p>
          </div>
          <input className="register-btn" type="submit" value="Login" />
          <p style={{ fontSize: "18px" }}>
            Don't have an account?
            <span onClick={() => setToggle(!toggle)} className="forget-pass">
              {" "}
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
      )}
    </div>
  );
};

export default Login;
