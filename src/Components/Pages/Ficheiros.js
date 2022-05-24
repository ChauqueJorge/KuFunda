import Message from '../Layout/Message'
import {useLocation} from 'react-router-dom'
import styles from './Ficheiros.module.css'
import LinkButton from '../Layout/LinkButton.js'
import ProjectCard from '../Project/ProjectCard.js'
import {useState, useEffect} from 'react'


function Ficheiros(){
    const[projects, setProjects]=useState([])
    const location=useLocation()
    let message=''
    if(location.state){
        message=location.state.message
    }
    useEffect(()=>{
        fetch('http://localhost/5000/ficheiro',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp)=>resp.json())
        .then((data)=>{
            setProjects(data)
        })
        .catch((err)=>console.log(err))
    }, [])
 
   
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus Ficheiros</h1>
            <LinkButton to="/Documento" text="Adicionar livro"/>
            </div>
            
            {message && <Message type="sucesso" msg={message}/>}
            
        </div>
    )
}
export default Ficheiros