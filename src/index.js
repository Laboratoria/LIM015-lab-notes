import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyDqIKmr7mPgkBa40-CedDUwoKccM9-zUxQ",
  authDomain: "lab-notes-6d0b9.firebaseapp.com",
  projectId: "lab-notes-6d0b9",
  storageBucket: "lab-notes-6d0b9.appspot.com",
  messagingSenderId: "392026267329",
  appId: "1:392026267329:web:0946fa77f8d2ad79647e40",
  measurementId: "G-GB817X0E6S"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
