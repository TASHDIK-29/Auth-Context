// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5PRYw0CKHr9F8vXwq3QkfxXWsReVqIRo",
  authDomain: "auth-context-api-8e31e.firebaseapp.com",
  projectId: "auth-context-api-8e31e",
  storageBucket: "auth-context-api-8e31e.appspot.com",
  messagingSenderId: "143554621855",
  appId: "1:143554621855:web:408f4c253e391e3e3fcdaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;