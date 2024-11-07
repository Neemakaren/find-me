import {useState} from 'react';
import { auth, provider } from '../firebase-config'
import { signInWithPopup } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom'

import Cookies from "universal-cookie";
const cookies = new Cookies()

 
const Login = ({handle,setIsAuth }) => {
   
    const signInWithGoogle = async () => {
        try {
            const result =  await signInWithPopup(auth, provider)
            cookies.set("auth-token", result.user.refreshToken)
            // setIsAuth(true)
            // navigate('/home')
        }catch (err) {
           console.error(err) 
        }
     
    }
 
    return(
        <main className='w-full min-h-screen bg-cover bg-center flex justify-center items-center rounded-2xl relative shadow-lg bg-opacity-200  here'>        
            <div className='flex flex-col justify-center items-center font-bold shadow-lg text-white bg-[grey]/30 w-full min-h-screen'>                                                                                                
                    <section className='bg-white text-center py-8 px-14 rounded-md'>
                    <p className='py-6 text-black'>Sign In With Google To Continue</p>
                    {/* <button 
                        className='bg-[#3b5998] px-8 py-3 rounded-md'
                        onClick={signInWithGoogle}
                        >Sign In With Google</button> */}
                    <button 
                        className='bg-[#3b5998] px-8 py-3 rounded-md'
                        >
                            <Link to='/home'>Sign In With Google</Link>
                        </button>
                    </section>                                
                </div>
            </main>
      
    )
}
 
export default Login