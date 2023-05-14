import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes';
import { app, auth } from './firebaseConfig';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
