import React, { useState } from "react";
import { LoginAPI, GoogleSignInAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/linkedinlogo.png";
import GoogleLogo from "../assets/google.png";
import AppleLogo from "../assets/apple.png";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function LoginComponent() {
  let navigate = useNavigate();
  const { credentials, setCredentials } = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success("Signed In to LinkedIn");
      navigate("/home");
    } catch (err) {
      toast.error("Something was wrong. Plesase check your Credentials");
    }
  };
  const googleSignIn = () => {
    let response = GoogleSignInAPI();
    navigate("/home");
  };
  return (
    <>
      <div className="logo">
        Linked <img src={LinkedInLogo} className="linkedinLogo" />
      </div>
      <div className="login-wrapper">
        <h1>Sign In</h1>
        <p>Stay updated on your professional world</p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            placeholder="Email or Phone"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            placeholder="Password"
          />
          <button className="sign-in" onClick={login}>
            Sign in
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
          New to LinedIn?{" "}
          <span onClick={() => navigate("/register")}>Join now</span>
        </p>
      </div>
    </>
  );
}
