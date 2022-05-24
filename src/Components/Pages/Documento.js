import { useHistory } from 'react-router-dom'
import FormularioLivro from './FormularioLivro.js'
import styles from './NovoDoc.module.css'
function  Documento(){
    const history=useHistory()
   
    function createPost(project){
        fetch("http://localhost:5000/ficheiros",{
            method:'POST',
            headers:{
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp)=>resp.json()).then((data)=>{
            console.log(data)
            //Redireccionar
            history.push('/Home.js', {message:'Sucesso de novo'})
        }).catch(err=>console.log(err))    
    }
    return(
        
           <div className={styles.novodoc_container}>
            <h1>Adicionar novo Documento</h1>
            <p>Nesta secção pode selecionar que documento irá adicionar.</p>
            <FormularioLivro handleSubmit={createPost} btnText="Criar ficheiro"/>
        </div>
    )
    }
    export default Documento