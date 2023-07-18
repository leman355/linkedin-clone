import React, { useState } from "react";
import { LoginAPI } from "../api/AuthAPI";
import LinkedInLogo from "../assets/linkedinlogo.png";
import GoogleLogo from "../assets/google.png";
import AppleLogo from "../assets/apple.png";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const { credentials, setCredentials } = useState({});
  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      console.log(res?.user);
    } catch (err) {
      console.log(err);
    }
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
        <button className="google">
          <img src={GoogleLogo} className="googleLogo" />
          Sign in with Google
        </button>
        <button className="google">
          <img src={AppleLogo} className="googleLogo" />
          Sign in with Apple
        </button>
        <p>New to LinedIn? <a href="#">Join now</a></p>
      </div>
    </>
  );
}
