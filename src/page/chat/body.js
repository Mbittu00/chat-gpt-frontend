import './body.css'
import { CiUser } from 'react-icons/ci';
import { GoHubot } from 'react-icons/go';
export default function Body({data}){
 // let isBot=false
  return (
    <div className={data.isBot?'bot':'user'}>
   {data.isBot?
   ('')
   :(<CiUser size={24}/>)
   }
   <span className={data.isBot?'botTxt':''}>
   {data.text.trim()}
   </span>
    </div>
    )
}