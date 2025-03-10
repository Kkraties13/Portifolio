import Footer from '../../components/Footer/index'
import Header from '../../components/Header/index'
import Container from '../../components/Components'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
    return (
       <>
          <Header />
            <Container>
              <section className={styles.home}>
                  <div className={styles.apresentacao}>
                      <p>
                          Olá, sou <br />
                          <span>Rêmulo Borges</span> <br />
                          Dev Full Stack
                      </p>
                      <Link to="/Sobre" className={`${styles.btn} ${styles.btn_red}`}>
                          Saiba mais sobre mim
                      </Link>
                  </div>
                  <figure>
                      <img className={styles.img_home} src="public\undraw_dev-productivity_5wps (2).svg" alt="Imagem de Home" />
                  </figure>
              </section>
            </Container>
          <Footer />
        </> 
    )
}






export default Home
