import React,{ useState } from 'react'
import LinkedinLogo from '../assets/linkedinLogo.png';
import '../Sass/LoginComponent.scss';
const LoginComponent = () => {
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
            onChange={(e) => {}}
            />
          <input 
            type="password"
            placeholder='Password'
            className='common-input'
            onChange={(e) => {}}
          />
        </div>
        <button onClick={() => {}} className='login-btn' >
          Sign IN
        </button>
        <hr className="hr-text" data-content="or" />
        
      </div>
    </div>
  )
}

export default LoginComponent