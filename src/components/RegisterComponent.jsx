import React, { useState } from 'react'
import LinkedinLogo from '../assets/linkedinLogo.png';
import '../Sass/LoginComponent.scss';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { SignUpAPI } from '../api/AuthAPI';

const RegisterComponent = () => {
  let navigate = useNavigate();
  const [cred, setCred] = useState({});
  const register = async () => {
    try {
      const response = await SignUpAPI(cred.email, cred.password);
    //   if (response.status === 200) {
        localStorage.setItem('userEmail', response.user.email);
        navigate('/home');
    //   }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='login-wrapper'>
      <img src={LinkedinLogo} alt="Linkedin Logo" className='linkedin-logo' />

      <div className='login-form'>
        <h1 className='heading'>Sign Up</h1>
        <p className='sub-heading'>Make most of your professional Life</p>

        <div className='auth-inputs'>
          <input
            type="text"
            placeholder='Email or Phone'
            className='common-input'
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
          <input
            type="password"
            placeholder='Password'
            className='common-input'
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
        </div>
        <button onClick={register} className='login-btn' >
          Sign up
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
          Already on LinkedIn{" "}
          <span className='sign-up-link' onClick={() => navigate('/')}>
            Sign in
          </span>
        </p>
      </div>
    </div>

  )
}

export default RegisterComponent