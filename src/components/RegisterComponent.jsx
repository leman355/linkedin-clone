import React, { useState } from "react";
import { RegisterAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/linkedinlogo.png";
import GoogleLogo from "../assets/google.png";
import AppleLogo from "../assets/apple.png";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const { credentials, setCredentials } = useState({});
  const login = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Account created");
      navigate("/home");
    } catch (err) {
      toast.error("Can't create your account");
    }
  };
  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
  };
  return (
    <>
      <div className="logo">
        Linked <img src={LinkedInLogo} className="linkedinLogo" />
      </div>
      <div className="login-wrapper">
        <h2>Make the most of your professional life</h2>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            placeholder="Password (6 or more characters)"
          />
          <button className="sign-in" onClick={login}>
            Agree & Join
          </button>
        </div>
        <hr data-content="or" />
        <button className="google" onClick={googleSignIn}>
          <img src={GoogleLogo} className="googleLogo" />
          Sign in with Google
        </button>
        <button className="google">
          <img src={AppleLogo} className="googleLogo" />
          Sign in with Apple
        </button>
        <p>
          Already on LinkedIn?{" "}
          <span onClick={() => navigate("/login")}>Sign in</span>
        </p>
      </div>
    </>
  );
}
