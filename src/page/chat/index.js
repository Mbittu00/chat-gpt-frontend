import './chat.css'
import Foot from'./foot'
import Body from'./body'
import {useState,useEffect}from'react'
export default function Popup(){
  let [data,setData]=useState([])
  return (
    <div className='chat'>
    <div className='bodyHolder'>
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