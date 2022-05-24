import { useState} from "react"
import Input from "../Formularios/Input.js"
import SubmitButton from "../Formularios/SubmitButton.js"

 
function FormularioLivro({handleSubmit, projectData}){
    const [project,setProject]= useState(projectData || {})
    
    const submit=(e)=>{
        e.preventDefault()
        //console.log("Sucesso")
        handleSubmit(project)

    }
    function handleChange(e){
        setProject({...project, [e.target.name]:e.target.value})
        console.log(project)
    }
    return(
        <div>
            <form onSubmit={submit}>
            <Input 
            type="text"  
            text="Titulo do livro"
            name="titulo"
            placeholder="Insira o titulo do livro"
            handleOnChange={handleChange} value={project.name}/>
            <Input type="text" text="Nome do Autor" name="autor" placeholder="Insira o nome do autor "handleOnChange={handleChange} value={project.name}/>
                <Input type="text" text="Nr de ISBN" name="isbn" placeholder="Insira o nr do ISBN"handleOnChange={handleChange} value={project.name}/>
                <Input type="text" text="Nr de classificação" name="classificacao" placeholder="Insira o numero de classifiçação"handleOnChange={handleChange} value={project.name}/>
                <Input type="text" text="Edição da CDU" name="cdu" placeholder="Insira a edição da CDU"handleOnChange={handleChange} value={project.name}/>
                <Input type="text" text="Nome do Editor" name="editor" placeholder="Insira o nome do editor"handleOnChange={handleChange} value={project.name}/>
                <Input type="text" text="Descrição" name="descricao" placeholder="Insira a descrição"handleOnChange={handleChange} value={project.name}/>
                <Input type="text"  text="Area de conhecimento" name="conhecimento" placeholder="Insira a area de conhecimento"handleOnChange={handleChange} value={project.name}/>
                <Input type="text" text="Publicador"name="publicador" placeholder="Insira o publicador"handleOnChange={handleChange} value={project.name}/>
                <Input type="text"  text="Local de Publicação" name="publicacao" placeholder="Insira o local de publicação"handleOnChange={handleChange} value={project.name}/>
                <Input type="text"  text="Lingua principal do texto" name="lingua" placeholder="Insira a lingua do texto"handleOnChange={handleChange} value={project.name}/>
                <Input  type="file" text="Ficheiro"  name="arquivo"/>
                <div>
                    <SubmitButton text="Adicionar texto"/>
                </div>
                
          

            </form>
        </div>
    )
}
export default FormularioLivro