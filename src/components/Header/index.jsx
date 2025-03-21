import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to='/'>
            <span>RemuloBorges.dev</span>
            </Link>
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Projetos">Projetos</Link>
                <Link to="/Contatos">Contatos</Link>
            </nav>
        </header>

        
    )    
}



export default Header