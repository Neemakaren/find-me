import {useState} from 'react'
import Navbar from '../components/Navbar'
import Page from '../components/Page'
import { Auth } from '../components/Auth'
import Cookies from "universal-cookie";
import Chat from '../components/Chat';
import Signup from './Signup';
import Login from '../components/Login';
import Same from '../components/Same';
import Practice from '../components/Practice';
import Practice1 from '../components/Practice1';



const Home = ({room, setRoom, data, getData}) => {
  
  

  return (
    <>
      {/* <Auth /> */}
      {/* <Signup /> */}
        <Navbar />
        <Page room={room} setRoom={setRoom} data={data} getData={getData} />
        {/* <Practice /> */}
        {/* <Login /> */}
        {/* <Same /> */}
        {/* <Practice1 /> */}
    </>
  )
}

export default Home