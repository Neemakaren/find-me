import {useState} from 'react'
import Form from '../components/Form'

const PinBuilder = ({loading, setFile, handleupload, setTitle, setDesc, setLink, onSave}) => {
  
  return (
    <section className='bg-[#e9e9e9] min-h-screen p-8'>
        <Form loading={loading} setFile={setFile} handleupload={handleupload} setTitle={setTitle} setDesc={setDesc} setLink={setLink} onSave={onSave}/>
    </section>
  )
}

export default PinBuilder;