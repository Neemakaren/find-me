import  {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
// import { auth } from '../firebase-config';
 
const Signup = () => {
   
   
    
 
  return (
    <main className='w-full min-h-screen bg-cover bg-center flex justify-center items-center rounded-2xl relative shadow-lg bg-opacity-200  here' >        
                <div className='flex flex-col justify-center items-center font-bold shadow-lg text-white bg-[grey]/30 w-full min-h-screen '>                  
                    <form className='py-16 px-10 space-y-10 border bg-slate-100 border-black text-black rounded-2xl'>                                                                                            
                        <div className='flex flex-col'>
                            <label htmlFor="email-address" className='text-[12px] pb-2'>
                                Email address
                            </label>
                            <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="Email address"  
                                className='border border-black text-[1em] py-2 pl-2 rounded-md'                              
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="password" className='text-[12px] pb-2'>
                                Name
                            </label>
                            <input
                                type="text"
                                label="Create password"
                                value={name}
                                onChange={(e) => setName(e.target.value)} 
                                required                                 
                                placeholder="name"
                                className='border border-black text-[1em] py-2 pl-2 rounded-md'              
                            />
                        </div>                                             
                        
                        {/* <button
                            type="submit" 
                            onClick={onSubmit}
                            className='border border-black text-[1em] py-2 pl-2 rounded-md'                         
                        >  
                            Sign up                                
                        </button> */}
                                                                     
                    <p className='cursor-pointer'>
                        {/* <Link to="/home" > */}
                            Sign in
                        {/* </Link> */}
                    </p>                   
                    </form>  
                </div>
    </main>
  )
}
 
export default Signup