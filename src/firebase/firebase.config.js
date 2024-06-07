// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQlfhQ9Dquv0gOWbJOkv8fRKPH4UNmfcw",
  authDomain: "mern-job-portal-3a235.firebaseapp.com",
  projectId: "mern-job-portal-3a235",
  storageBucket: "mern-job-portal-3a235.appspot.com",
  messagingSenderId: "268724870597",
  appId: "1:268724870597:web:819478d9f7b4b0219dffac",
  measurementId: "G-C0J9L1RN7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;