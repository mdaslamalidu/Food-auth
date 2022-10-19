// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxxFmPnVG7nDh5AMcxH6K6fN-1tVbzDwk",
    authDomain: "hotel-managment-auth.firebaseapp.com",
    projectId: "hotel-managment-auth",
    storageBucket: "hotel-managment-auth.appspot.com",
    messagingSenderId: "1028298466127",
    appId: "1:1028298466127:web:e6ab887cbdbb318aa95b3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;