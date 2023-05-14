import React, { useState } from 'react'
import LinkedinLogo from '../assets/linkedinLogo.png';
import '../Sass/LoginComponent.scss';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { LoginAPI,GoogleLoginAPI } from '../api/AuthAPI';
import { toast } from "react-toastify";


const LoginComponent = () => {
  let navigate = useNavigate();
  const [cred, setCred] = useState({});
  const login = async () => {
    try {
      const response = await LoginAPI(cred.email, cred.password);
      // if (response.status === 200) {
        // toast.success('Login Successful');        
        localStorage.setItem('userEmail', response.user.email);
        navigate('/home');
      // }
    } catch (error) {
      console.log(error);
      // toast.error('Login Failed');
    }
  }
  const googleLogin = () => {
    let response = GoogleLoginAPI();
    console.log(response);
  
  }
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
            onChange={(e) => setCred({ ...cred, email: e.target.value })}
          />
          <input
            type="password"
            placeholder='Password'
            className='common-input'
            onChange={(e) => setCred({ ...cred, password: e.target.value })}
          />
        </div>
        <button onClick={login} className='login-btn' >
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
          onClick={googleLogin}
          shape='pill'
          className='google-login-btn'
        />;
        <p className='google-login-text'>
          New to LinkedIn?{" "}
          <span className='sign-up-link' onClick={() => navigate('/register')}>
            Join Now
          </span>
        </p>
      </div>
    </div>

  )
}

export default LoginComponent