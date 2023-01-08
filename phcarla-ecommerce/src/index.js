import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhsfRG3szjn05iYQGYlb1nTmi6U4vPfG4",
    authDomain: "phcarla-ecommerce.firebaseapp.com",
    projectId: "phcarla-ecommerce",
    storageBucket: "phcarla-ecommerce.appspot.com",
    messagingSenderId: "604683102317",
    appId: "1:604683102317:web:d43986b7548d17b1cff764"
  };


// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

