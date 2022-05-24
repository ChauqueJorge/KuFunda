import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
function ProjectCard({id, titulo, autor, auto, descricao, lingua}){
    return(
        <div>
           <h4>{titulo}</h4>
            <p>
               <span>Autor</span>: {autor}
            </p>
            <p>
               <span>Descrição</span>: {descricao}
            </p>
            <p>
               <span>Lingua</span>: {lingua}
            </p> 
        </div>
    )
}
export default ProjectCard