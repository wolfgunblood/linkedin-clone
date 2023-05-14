
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginAPI = (email,phone) => {
    try{
        let response = signInWithEmailAndPassword(auth,email,phone);
        return response;
    }catch(error){
        return error;
    }
};