import {useState} from 'react'
import man from '../assets/man.png'
import { Link } from 'react-router-dom'
// import { auth, provider } from "../firebase-config.js";
// import { signInWithPopup } from "firebase/auth";

// import "../styles/Auth.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const Navbar = ({setIsAuth}) => {

  
  let result
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      // console.log(result.user.photoURL)
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };



  // const signInWithGoogle = async () => {
  //     const result = await signInWithPopup(auth, provider);
  //     cookies.set("auth-token", result.user.refreshToken);
  //     console.log(result)
  //   }
  return (
    <nav className='container mx-auto p-4 flex items-center'>
        <Link to='/home' className='p-4'>FIND ME</Link>
        <Link to="/pinbuilder" className='font-semibold p-3 px-6 rounded-full'>Create</Link>
      <button onClick={signInWithGoogle} className='font-semibold p-2 px-4 rounded-full'>Login</button>
    </nav>
  )
}

export default Navbar