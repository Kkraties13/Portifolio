// eslint-disable-next-line react/prop-types
import styles from './Container.module.css'

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container