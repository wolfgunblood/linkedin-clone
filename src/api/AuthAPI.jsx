
import { auth } from '../firebaseConfig';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginAPI = (email, phone) => {
    try {
        let response = signInWithEmailAndPassword(auth, email, phone);
        return response;
    } catch (error) {
        return error;
    }
};

export const SignUpAPI = (email, phone) => {
    try{
        let response = createUserWithEmailAndPassword(auth, email, phone);
        return response;
    
    }catch(error){
        return error;
    }
};

export const GoogleLoginAPI = () => {
    try {
        let response = signInWithPopup(auth, new GoogleAuthProvider());
        return response;
    } catch (error) {
        return error;
    }

};

export const LogoutAPI = () => {
    try {
        let response = signOut(auth);
        return response;
    } catch (error) {
        return error;
    }
}
