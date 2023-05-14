import React,{ useState,useEffect } from 'react';
import LoginComponent from '../components/LoginComponent';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import Loader from '../helper/Loader';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user?.accessToken) {
  //       navigate('/home');
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // },[]);
  return <LoginComponent />
}

export default Login