import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"
import Container from "./Container"
function NavBar(){
return(
<nav className={styles.navBar}>
       <Container>
        <Link to="/Home"><img src="/imgs/logo.png" alt="logo"/></Link>
       <ul>
        <li><Link className={styles.semDecoration} to="/Home">Home</Link></li>
        <li><Link className={styles.semDecoration} to="/Carrossel">Icons</Link></li>
       </ul>
       </Container>
      
      </nav>
      )
    }
export default NavBar