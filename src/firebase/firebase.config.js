// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAy7PGVeaAjq5qBviXD-pTo0vN2bRX478Q",
    authDomain: "b9a12-client-side.firebaseapp.com",
    projectId: "b9a12-client-side",
    storageBucket: "b9a12-client-side.appspot.com",
    messagingSenderId: "214182500312",
    appId: "1:214182500312:web:20bdb2015bf7cbf7a844ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;