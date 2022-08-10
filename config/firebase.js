// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCnbbRZw1aMsa8Qh75dGncJIV9q1PWRL8Q",
  authDomain: "sparky-wines-app.firebaseapp.com",
  projectId: "sparky-wines-app",
  storageBucket: "sparky-wines-app.appspot.com",
  messagingSenderId: "790723941508",
  appId: "1:790723941508:web:4555ef579f6efbcf56ded1",
  measurementId: "G-KTR4Z7PG72"
};

// Initialize Firebase 
const auth= getAuth(app)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {auth}