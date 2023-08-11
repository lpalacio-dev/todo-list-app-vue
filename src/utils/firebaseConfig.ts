// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    onAuthStateChanged,
    setPersistence, 
    browserLocalPersistence,
} from "firebase/auth";
// import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4diubj8ei_yvDGL0YsSRt7u4bGpMQSpk",
    authDomain: "curso-vue-29856.firebaseapp.com",
    databaseURL: "https://curso-vue-29856-default-rtdb.firebaseio.com",
    projectId: "curso-vue-29856",
    storageBucket: "curso-vue-29856.appspot.com",
    messagingSenderId: "444063479715",
    appId: "1:444063479715:web:232c89b4061e7fd566cc16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

// Configura la persistencia de autenticación local
setPersistence(auth, browserLocalPersistence);

export { 
    auth, 
    onAuthStateChanged,
}