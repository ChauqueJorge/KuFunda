import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Ku2.png'
function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="KuFunda"/></Link>
                <ul className={styles.list}>
                    <li className={styles.item}> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Documento">Adicionar </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Ficheiros">Meus Documentos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}
export default Navbar