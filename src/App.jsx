import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import PinBuilder from './pages/PinBuilder'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './components/Chat'
import Signup from './pages/Signup'
import Login from './components/Login'
import Same from './components/Same'
import Navbar from './components/Navbar'
import { useNavigate } from 'react-router';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { storage, textDB, msgDB } from './firebase-config'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid'


import Cookies from "universal-cookie";
const cookies = new Cookies()

function App() {


  // const navigate = useNavigate()

  const [title,setTitle] = useState();
  const [desc,setDesc] = useState();
  const [link,setLink] = useState();
  const [file,setFile] = useState();
  const [loading,setLoading] = useState(false);
  const [data, setData] = useState([])

  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([])

  const postId=Date.now().toString();


  const messagesRef = collection(msgDB, "messages")


const handleupload = (e) => {
  // console.log(e.target.files[0])
        const imgs = ref(storage, `image/${v4()}`)
        uploadBytes(imgs, e.target.files[0]).then(data => {
            // console.log(data, 'imgs')
            getDownloadURL(data.ref).then(val => {
              setFile(val)
            })
        })
}

const handleClick = async () => {
  const valRef = collection(textDB, "txtData" )
  await addDoc(valRef, {txtVal: title, txtDesc: desc, txtLink: link, imgUrl: file})
  alert('data added')
}


const onSave = () => {
      setLoading(true)
      handleClick();
      // navigate('/home')
   }


   const getData = async () => {
    const valRef = collection(textDB, "txtData" )
    const dataDB = await getDocs(valRef)
    // const allData = dataDB.docs.map(val => console.log(val, 'values'))
    const allData = dataDB.docs.map(val => ({...val.data(), id: val.id}))
    setData(allData)
    // console.log(dataDB)
  }

  useEffect(() => {
    getData()
  }, [])


  // const handleMessages = async () => {
  //   const messageRef = collection(msgDB, "chatMessage")
  //   await addDoc()
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(newMessage === '') return
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
    })

  }



  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)

  if(!isAuth) {
    return (
        <>
        <Login setIsAuth={setIsAuth} />
        </>
    )
  }

  // const handle = !isAuth ? (<Login setIsAuth={setIsAuth} handle={handle} />) : (<Home />)

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home room={room} setRoom={setRoom} data={data} getData={getData} />} />
      <Route path='/signup' />
      <Route path='pinbuilder' element={ <PinBuilder loading={loading} setFile={setFile} handleupload={handleupload} setTitle={setTitle} setDesc={setDesc} setLink={setLink} onSave={onSave} />} />
      {/* <Route path='product'> */}
        <Route path='/product/:chatId' element={<Chat data={data} getData={getData} handleSubmit={handleSubmit} setNewMessage={setNewMessage}/>}/>
      {/* </Route> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
