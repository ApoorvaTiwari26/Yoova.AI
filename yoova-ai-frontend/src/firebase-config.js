import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhDW7LeKhPxVw3SUuB8OtVRgPN1DfVIS4",
  authDomain: "yoova-ai.firebaseapp.com",
  projectId: "yoova-ai",
  storageBucket: "yoova-ai.appspot.com",
  messagingSenderId: "1018162126465",
  appId: "1:1018162126465:web:63ef2d4fb7ead6d413b780",
  measurementId: "G-QPY44RFZB2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Setup Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
