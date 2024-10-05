// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4lPa8HDeGHMt4ou275SDP_o49H8hDFW0",
  authDomain: "emapp-subdomain.firebaseapp.com",
  projectId: "emapp-subdomain",
  storageBucket: "emapp-subdomain.appspot.com",
  messagingSenderId: "125263113474",
  appId: "1:125263113474:web:cb4a086d60da99b394261b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
