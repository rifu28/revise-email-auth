// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu6QnEI0JiZThzmeKG8xIsGV6rHa13dVQ",
  authDomain: "revise-email-auth-8c8cf.firebaseapp.com",
  projectId: "revise-email-auth-8c8cf",
  storageBucket: "revise-email-auth-8c8cf.appspot.com",
  messagingSenderId: "455728023329",
  appId: "1:455728023329:web:e3b8d7f76c02c94795e060",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
