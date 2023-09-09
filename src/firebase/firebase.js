// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCiK2iLjdDA-S9zOmeHLE72QJlqc0WJHC8",
	authDomain: "workorder-management-sy.firebaseapp.com",
	projectId: "workorder-management-sy",
	storageBucket: "workorder-management-sy.appspot.com",
	messagingSenderId: "958989009063",
	appId: "1:958989009063:web:af7d35037cd9f456755b82",
	measurementId: "G-WPEB1RP0Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
