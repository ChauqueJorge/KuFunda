import styles from './Message.module.css'
import {useState, useEffect} from 'react'

function Message({type, msg}){
    const[visivel, setVisivel]= useState(false)
    useEffect(()=>{
        
        setVisivel(true)
        const timer= setTimeout(()=>{
            setVisivel(false)
        }, 3000)
        return ()=> clearTimeout(timer)
    }, [msg])
    return(
        <>
           {visivel  &&(
               <div className={`${styles.Message} ${styles[type]}`}>{msg}</div>
           )}
        </>
    )
}
export default Message