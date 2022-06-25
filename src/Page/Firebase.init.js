// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDrlihzRZxbG3bkNhAUWaSHLvwpDxrl0E",
  authDomain: "lux-fashion-730fd.firebaseapp.com",
  projectId: "lux-fashion-730fd",
  storageBucket: "lux-fashion-730fd.appspot.com",
  messagingSenderId: "263264858412",
  appId: "1:263264858412:web:1e3cfffab7c95d611a7c89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;



