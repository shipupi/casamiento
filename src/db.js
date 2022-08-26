// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4z7iojD9k9VOG81xJrGdgzHr4-wyGAko",
  authDomain: "asistencia-casamiento.firebaseapp.com",
  projectId: "asistencia-casamiento",
  storageBucket: "asistencia-casamiento.appspot.com",
  messagingSenderId: "13406005698",
  appId: "1:13406005698:web:6942fcb12fdbec2ff90e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
window.app = app;
window.firestore = firestore;
export default firestore;