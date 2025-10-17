// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-w6ol5HdYd87q4GM04CEtUk1G9hWZSfs",
  authDomain: "fir-fighter-203e2.firebaseapp.com",
  projectId: "fir-fighter-203e2",
  storageBucket: "fir-fighter-203e2.firebasestorage.app",
  messagingSenderId: "844661821311",
  appId: "1:844661821311:web:b24981467fb40f7c1e544a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);