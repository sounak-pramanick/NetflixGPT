// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBis5sbh4HrvbQUNA5MEdlYKg8B9FvCxsk",
  authDomain: "netflixgpt-e41c3.firebaseapp.com",
  projectId: "netflixgpt-e41c3",
  storageBucket: "netflixgpt-e41c3.appspot.com",
  messagingSenderId: "415487813739",
  appId: "1:415487813739:web:8903689b4e93beeacda92e",
  measurementId: "G-93PZNN979B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();