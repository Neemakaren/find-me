import {useState} from 'react'
import {HiArrowUpCircle} from 'react-icons/hi2'


const UploadImage = ({setFile, handleupload}) => {
  
  const [selectedFile,setSelectedFile] = useState();
  


  return (
    <div className='h-[14em] md:h-[25em]'>
    <div className='bg-[#e9e9e9] rounded-lg py-2 h-[100%] '>
    <label className='m-2 flex flex-col justify-center items-center cursor-pointer h-full 
         border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600'>
          
          {!selectedFile?
          <div className='flex items-center flex-col'>
           <HiArrowUpCircle className='text-[22px]'/>   
            <h2 className='font-semibold'>Click to Upload</h2>
            </div>
            :null}
            {selectedFile?
            <img src={window.URL.createObjectURL(selectedFile)}
            alt='selected-image'
            // width={500}
            // height={900}
            className='object-contain h-[100%] w-full'
            />:null}
            <input id="dropzone-file" type="file"
             className="hidden"  
             onChange={(e)=>{setFile(e.target.files[0]); setSelectedFile(e.target.files[0]); handleupload(e)}} 
             />
        </label>
        </div>
        </div>
  )
}

export default UploadImage


// <div className='bg-[#e9e9e9] rounded-lg w-4/5'>
      {/* <div className=' border-red-300 border-dashed rounded-lg '>   */}
        // <label className='m-2 flex flex-col justify-center items-center
        // cursor-pointer h-[90%] 
        // border-[2px] border-gray-300 border-dashed rounded-lg text-gray-600'>
           
          {/* <div className='flex items-center flex-col'> 
          <HiArrowUpCircle className='text-[22px]'/> 
            <h2 className='font-semibold'>Click to Upload</h2>
            </div>
            <img src=''
            alt='selected-image'
            width={500}
            height={800}
            className='object-contain h-[90%]'
            />
            <input id="dropzone-file" type="file"
             className="hidden" onChange={(e)=>{setFile(e.target.files[0]); setSelectedFile(e.target.files[0])}} />
         */}
          {/* {!selectedFile?
          <div className='flex items-center flex-col'>
           <HiArrowUpCircle className='text-[22px]'/>   
            <h2 className='font-semibold'>Click to Upload</h2>
            </div>
            :null}
            {selectedFile?
            <img src={window.URL.createObjectURL(selectedFile)}
            alt='selected-image'
            width={500}
            height={900}
            className='object-contain w-full  h-[90%]'
            />:null}
            <input id="dropzone-file" type="file"
             className="hidden"  
             onChange={(e)=>{setFile(e.target.files[0]); setSelectedFile(e.target.files[0])}} />
        </label> */}
        {/* </div> */}
     {/* </div> */}
