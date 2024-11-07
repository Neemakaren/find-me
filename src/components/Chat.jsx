import React, { useState } from 'react'
import Form from './Form'
import img from '../assets/img.png'
import { Link, useParams } from 'react-router-dom';



const Chat = ({data, getData, handleSubmit, setNewMessage}) => {
 
  const {chatId} = useParams()
  
  
  
  return (
    <section className='bg-[#e9e9e9]  min-h-screen p-8'>
         <div className=' bg-white py-8 px-6  sm:py-14 h-full rounded-2xl'>
        <div className='grid gap-11 grid-cols-1 lg:grid-cols-2 lg:gap-10'>
        <div className='h-[14em] md:h-[25em]'>   
        <div className='bg-[#e9e9e9] rounded-lg py-2 h-[100%] h'>


          
        <label className='m-2 flex flex-col justify-center items-center cursor-pointer h-full 
         border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600'>

          {data
            .filter((item) => item.id === chatId)
            .map((item, index) => (
              <div key={index}>
                <img src={item.imgUrl}
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[100%] w-full'
            />
               
              </div>
            ))}
           
            {/* <img src={imgUrl}
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[100%] w-full'
            /> */}
        
        </label>
    </div>
    </div>
          
       <div className="col-span-1">
       <div className='w-[100%]'>
        {/* <input type="text" placeholder='Add your title'
        className='text-[35px] outline-none font-bold w-full
        border-b-[2px] border-gray-400 placeholder-gray-400'/>
        <h2 className='text-[12px] mb-8 w-full  text-gray-400'>The first 40 Charaters are 
        what usually show up in feeds</h2> */}

        <div className=''>
       <div className='flex gap-3 items-center'>
       <img src='' 
       alt='userImage'
       width={45}
       height={45}
       className='rounded-full'/>
       <div>
        <h2 className='text-[14px] font-medium'></h2>
        <h2 className='text-[12px]'></h2>

        </div>
       </div>
    </div>
    <div></div>
    <form action=""  onClick={handleSubmit}>
        <textarea
         name="" 
         id="" 
         cols="9" 
         rows="13"
          placeholder='start your conversation here....' 
        className='h outline-none  w-full mt-8 py-4 pl-2 text-[14px] border-b-[2px] border-gray-400 placeholder-gray-400 resize-none h-[100%]'
          onChange={(e) => setNewMessage(e.target.value)}
        ></textarea>
        <button className=''>send</button>
        </form>
          {/* <input type="text"
           placeholder='Add a Destination Link'  className=' outline-none  w-full  pb-4 mt-[90px] border-b-[2px] border-gray-400 placeholder-gray-400'/> */}
    </div>
       </div>
        
        </div>
    </div>
    </section>
  )
}

export default Chat