// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUvMb0FcJDGRYDtzLShTVb5nYkuZXIp2E",
  authDomain: "theophilusportfolio.firebaseapp.com",
  projectId: "theophilusportfolio",
  storageBucket: "theophilusportfolio.appspot.com",
  messagingSenderId: "16217667887",
  appId: "1:16217667887:web:f665b3b35daef08a1649da",
  measurementId: "G-NK0B99YV09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);