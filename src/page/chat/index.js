import './chat.css'
import Head from'./head'
import Foot from'./foot'
import Body from'./body'
import {useState,useEffect,useRef}from'react'

export default function Popup(){
  let [data,setData]=useState([])
  let body=useRef()
  useEffect(()=>{
  //  body.current?.scrollIntoView({behavior: 'smooth'});
  },[data])
  return (
    <div className='chat'>
    <Head/>
    <div className='bodyHolder' ref={body}>
{
  data.map((e,i)=>(
  <Body data={e} key={i}/>
  ))
}
</div>
<Foot setData={setData}/>
    </div>
    )
}