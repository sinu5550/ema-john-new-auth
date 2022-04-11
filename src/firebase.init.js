// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtddXt6VF47AR3BAnn5n4eTyYt3obwDjw",
    authDomain: "ema-john-somple-95b14.firebaseapp.com",
    projectId: "ema-john-somple-95b14",
    storageBucket: "ema-john-somple-95b14.appspot.com",
    messagingSenderId: "949090722777",
    appId: "1:949090722777:web:35a0bcc97db786c1d2afc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

