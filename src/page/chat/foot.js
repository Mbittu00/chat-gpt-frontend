import './foot.css'
import { BiSend } from 'react-icons/bi';
import {useState,useEffect}from'react'
import axios from'axios'
export default function Foot({setData}){
  let [prompt,setPrompt]=useState('')
  let AI=async()=>{
try {
  let user={text:prompt,isBot:false}
  setData((n)=>[...n,user])
      let uri='https://chat-gpt-backend.vercel.app/'
   let {data}=await axios.post(uri,{
     prompt
   })
   let bot={text:data.bot,isBot:true}
   setData((n)=>[...n,bot])
   setPrompt('')
   console.log(data)
} catch (e) {}
  }
  return (
    <div className='foot'>
    <textarea className='input' 
    placeholder='enter your question'
    onChange={(e)=>setPrompt(e.target.value)}
    value={prompt}></textarea>
    <BiSend size='34' onClick={AI}/>
    </div>
    )
}