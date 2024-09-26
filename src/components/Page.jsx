import {useRef} from 'react'
import { Link } from 'react-router-dom'
import PinList from './PinList'
// import {data} from '../data'

const Page = ({room, setRoom, data, getData}) => {
    const roomInputRef = useRef(null)
    
  return (
    <>
        <div className=' mt-7 px-2 md:px-5 columns-1 md:columns-2 lg:columns-2 mb-4 xl:columns-3 space-y-6 mx-auto my-0 p-4'>
            {
                data.map((value, id) => (
                    <Link key={value.id} to={`/product/${value.id}`} onClick={() => setRoom(roomInputRef.current.value)}>
                    
            <div >   
        <div className='relative before:absolute before:h-full before:w-full before:rounded-3xl before:z-10 hover:before:bg-gray-600 before:opacity-50 cursor-pointer'>
            <img src={value.imgUrl}  alt=""  width={500} height={500} className='rounded-3xl cursor-pointer relative z-0 mx-auto'/>
        </div>
            {/* <h4 className='font-bold text-[18px] mb-1 mt-2 line-clamp-2'>{d.description.slice(0,2)}</h4> */}
            <p className='font-bold 
        text-[18px] mb-1 line-clamp-2 text-start'>{value.txtVal}</p>
            </div>
            </Link>
                ))
            }

            {/* <PinList /> */}
       
            </div>
            </>
  
  )
}

export default Page

 // <main className='mt-7  px-2 md:px-5 columns-2 md:columns-3 lg:columns-4 mb-4 xl:columns-5 space-y-6 mx-auto h'>

//  <div className='relative before:absolute before:h-full before:w-full before:rounded-3xl before:z-10 hover:before:bg-gray-600 before:opacity-50 cursor-pointer'>
{/* <img src={img} alt="" width={500} height={500} className='rounded-3xl cursor-pointer relative z-0 mx-auto'/>
</div>
    <h4 className='font-bold text-[18px] mb-1 mt-2 line-clamp-2'>Suits</h4>
    <p>Game Play</p> */}