import React, { useState } from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../../Firebase/firebase.init";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassInput, setTogglePassInput] = useState(false);

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login sucess", { id: "toster2" });
        navigate("/");
      })
      .catch((error) => {
        const errorMassage = error.message;
        setError(errorMassage);
      });
  };

  const emaiInput = (emailInput) => {
    if (/\S+@\S+\.\S+/.test(emailInput)) {
      setEmail({ value: emailInput, error: "" });
    } else {
      setEmail({ value: "", error: "Please Enter Valid Email" });
    }
  };
  const passwordInput = (passwordInput) => {
    if (passwordInput.length < 6) {
      setPassword({ value: "", error: "Password Minimum of 6 Characters" });
    } else {
      setPassword({ value: passwordInput, error: "" });
    }
  };

  const handleFormSubmitLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login sucessful");
        navigate("/");
      })
      .catch((error) => {
        const errorMassage = error.message;
        setError(errorMassage);
      });
  };

  const forgetPassword = () => {
    sendPasswordResetEmail(auth, email.value)
      .then(() => {
        toast.success("password reset sucessful", { id: "toast6" });
      })
      .catch((error) => {
        const errorMassage = error.message;
        setError(errorMassage);
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
            required
          />
          <p className="error-text">{email.error}</p>
        </div>
        <div className="email-password-input">
          <input
            onBlur={(event) => passwordInput(event.target.value)}
            className="inputs"
            type={togglePassInput ? "password" : "text"}
            name="password"
            placeholder="Password..."
            id=""
            required
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
          <p className="error-text">{password.error}</p>
        </div>

        <div>
          <p onClick={() => forgetPassword()} className="forget-pass">
            forget password?
          </p>
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <input className="register-btn" type="submit" value="Login" />
        <p style={{ fontSize: "18px" }}>
          Don't have an account?
          <span onClick={() => navigate("/signup")} className="forget-pass">
            create account
          </span>
        </p>
        <div className="option">
          <div className="option-left"></div>
          <p>or</p>
          <div className="option-right"></div>
        </div>
        <button onClick={() => googleSignIn()} className="google-signup">
          <FcGoogle style={{ fontSize: "25px" }}></FcGoogle> Sign up with google
        </button>
      </form>
    </div>
  );
};

export default Login;
