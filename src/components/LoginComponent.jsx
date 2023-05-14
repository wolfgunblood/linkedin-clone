import React, { useState } from 'react'
import LinkedinLogo from '../assets/linkedinLogo.png';
import '../Sass/LoginComponent.scss';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  let navigate = useNavigate();
  const [cred, setCred] = useState({});
  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} alt="Linkedin Logo" className='linkedin-logo' />

      <div className='login-form'>
        <h1 className='heading'>Sign In</h1>
        <p className='sub-heading'>Stay Updated on your professional world</p>

        <div className='auth-inputs'>
          <input
            type="text"
            placeholder='Email or Phone'
            className='common-input'
            onChange={(e) => { }}
          />
          <input
            type="password"
            placeholder='Password'
            className='common-input'
            onChange={(e) => { }}
          />
        </div>
        <button onClick={() => { }} className='login-btn' >
          Sign IN
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className='google-login-container'>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
          shape='pill'
          className='google-login-btn'
        />;
        <p className='google-login-text'>
          New to LinkedIn?{" "}
          <span className='sign-up-link'>
            Join Now
          </span>
        </p>
      </div>
    </div>

  )
}

export default LoginComponent