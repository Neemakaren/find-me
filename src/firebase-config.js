
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyDdj2w9T635fxvliZO619ZUBZGfuzrpZSU",
//   authDomain: "findme-acec3.firebaseapp.com",
//   projectId: "findme-acec3",
//   storageBucket: "findme-acec3.appspot.com",
//   messagingSenderId: "1027679293748",
//   appId: "1:1027679293748:web:236bd2bf2f758c25729561"
// };


// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();

// export default app;




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqEk3UzZNMhOAw44mXXj-8XK10G0KEe8c",
  authDomain: "find-me-33273.firebaseapp.com",
  projectId: "find-me-33273",
  storageBucket: "find-me-33273.appspot.com",
  messagingSenderId: "182059282078",
  appId: "1:182059282078:web:048bdecee8f998b6f5558f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const textDB =  getFirestore(app)
export const msgDB = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()