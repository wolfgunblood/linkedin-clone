// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL_UJpJZ3zoeftOT-O0s1I7jWgDisp7eo",
  authDomain: "calcium-post-386316.firebaseapp.com",
  projectId: "calcium-post-386316",
  storageBucket: "calcium-post-386316.appspot.com",
  messagingSenderId: "493921679021",
  appId: "1:493921679021:web:7ce6e377a6da1bb6af7824",
  measurementId: "G-DZ0K6827VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, app};