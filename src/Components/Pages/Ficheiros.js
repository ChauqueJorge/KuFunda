import Message from '../Layout/Message'
import {useLocation} from 'react-router-dom'
import styles from './Ficheiros.module.css'
import LinkButton from '../Layout/LinkButton.js'
import ProjectCard from '../Project/ProjectCard.js'
import Container from '../Layout/Container'
import {useState, useEffect} from 'react'
function Ficheiros(){
    const[projects, setProjects]=useState([])
    const location=useLocation()
    let message=''

    if(location.state){
        message=location.state.message
    }
    useEffect(()=>{
        fetch('http://localhost:5000/ficheiros',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        }).then((resp)=>resp.json())
        .then((data)=>{
            console.log(data)
            setProjects(data)
        })
        .catch((err)=>console.log(err))
    }, [])

   
    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
            <h1>Meus Ficheiros</h1>
            <LinkButton to="/NovoDoc" text="Adicionar livro"/>
            </div>
            
            {message && <Message type="sucess" msg={message}/>}
            <Container customClass="start">
                {projects.length > 0 &&
                projects.map((project)=>(
                    <ProjectCard titulo={project.titulo} autor={project.autor} descricao={project.descricao} lingua={project.lingua}/>
                ))}
            </Container>
        </div>
    )
}
export default Ficheiros