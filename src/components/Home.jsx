import styles from "./Home.module.css"
import {Link} from "react-router-dom"
function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcome}>
        <h1>Bem-Vindo a Loja de ICONS!!!</h1>
      </div>
      <div className={styles.infoHome}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio illo hic
        expedita libero? Expedita inventore adipisci ipsum labore? Repellendus
        dignissimos ipsum numquam quaerat possimus delectus et earum facilis
        fugiat reprehenderit!
      </p>
      <div className={styles.goToIcons}>
      <Link to="/Carrossel">Conheça Já Nossos Produtos!!!</Link>
      </div>
      </div>
    </div>
  );
}
export default Home;
