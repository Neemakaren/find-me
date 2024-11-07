import { useState, useEffect } from 'react'
import UploadImage from './UploadImage'
import UserTag from './UserTag'
import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage"
// import app from '../firebase-config'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import img from '../assets/loading-indicator.png'
import { useNavigate } from 'react-router'
import { v4 } from 'uuid';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { storage, textDB } from '../firebase-config'


const Form = ({loading, setFile, handleupload, setTitle, setDesc, setLink, onSave}) => {


  return (
    <div className=' bg-white py-8 px-6  sm:py-14 h-full rounded-2xl'>
        {/* <div className='flex justify-end mb-6'>
            <button onClick={() => onSave()}
             className='bg-red-500 p-2
            text-white font-semibold px-3 
            rounded-lg'>
            save</button>
        </div> */}
         <div className='flex justify-end mb-6'>
            <button onClick={()=>onSave()}
             className='bg-red-500 p-2 text-white font-semibold px-3 rounded-lg'>
              {loading?  <img src={img} 
                width={30} 
                height={30} 
                alt='loading'
                className='animate-spin'  />:
                <span>Save</span>}</button>
        </div>
        <div className='grid gap-11 grid-cols-1 lg:grid-cols-2 lg:gap-10'>
            {/* <UploadImage setFile={(file) => setFile(file)} handleupload={handleupload} /> */}
            <UploadImage setFile={setFile} handleupload={handleupload} />
          
       <div className="col-span-1">
       <div className='w-[100%]'>
        <input type="text" placeholder='Add your title'
        className='text-[35px] outline-none font-bold w-full
        border-b-[2px] border-gray-400 placeholder-gray-400' onChange={(e) => setTitle(e.target.value)}/>
        <h2 className='text-[12px] mb-8 w-full text-gray-400'>The first 40 Charaters are 
        what usually show up in feeds</h2>
        <UserTag />
        <textarea type="text"
            placeholder='Tell everyone what your pin is about' 
        className=' outline-none  w-full mt-8 pb-4 text-[14px]
        border-b-[2px] border-gray-400 placeholder-gray-400 resize-none' onChange={(e) => setDesc(e.target.value)}/>
          <input type="text"
           placeholder='Add a Destination Link' 
        className=' outline-none  w-full  pb-4 mt-[90px]
        border-b-[2px] border-gray-400 placeholder-gray-400' onChange={(e) => setLink(e.target.value)}/>
    </div>
       </div>
        
        </div>
    </div>
  )
}

export default Form


