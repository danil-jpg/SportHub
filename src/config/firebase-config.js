// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCZgE-ETf-E3SXVs8rXKE-f76jJ2emg7w4",
	authDomain: "sporthub-174b6.firebaseapp.com",
	projectId: "sporthub-174b6",
	storageBucket: "sporthub-174b6.appspot.com",
	messagingSenderId: "479111005439",
	appId: "1:479111005439:web:9df4c9f3d9a108f54d78ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const DB = getFirestore(app)