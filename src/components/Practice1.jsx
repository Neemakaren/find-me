import {useState} from 'react'
import img from '../assets/img.png';
import {HiArrowUpCircle} from 'react-icons/hi2'

const Practice1 = ({setFile}) => {
    const [selectedFile,setSelectedFile]=useState();


  return (
    <section className='flex bg-[#e9e9e9] h-screen'>
        <div className='w-1/2  border-red-300 border-dashed rounded-lg'>
        <label htmlFor="" className='m-5 flex flex-col justify-center items-center
        cursor-pointer h-[90%] 
        border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600'>
          
        {!selectedFile?
          <div className='flex items-center flex-col'>
           <HiArrowUpCircle className='text-[22px]'/>   
            <h2 className=' font-semibold'>Click to Upload</h2>
            </div>
            :null}
            {selectedFile?
            <img src={window.URL.createObjectURL(selectedFile)}
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[90%]'
            />:null}
            <input id="dropzone-file" type="file"
             className="hidden"  
             onChange={(e)=>{setFile(e.target.files[0]); setSelectedFile(e.target.files[0])}} />
        </label>
        </div>
    </section>


   
  )
}

export default Practice1;