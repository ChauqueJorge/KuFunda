import styles from './Home.module.css'
import kufunda from '../../img/book.png'

import LinkButton from '../Layout/LinkButton'
function Home(){
return(
    <section className={styles.home_container}>
        <img src={kufunda} alt="kufunda"/>
        <h1>Bem-vindo ao <span>KuFunda</span>!</h1>
        <p>Nesta plataforma pode adicionar todos os ficheiros!</p>
        <LinkButton to="/NovoDoc" text="Adicionar documento"/>
        
    </section>
)
}
export default Home