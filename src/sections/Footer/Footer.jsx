import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>&copy; 2024 Pawan Kharel. <br />
        Made by Pawan Kharel
        </p>
    </section>
  )
}

export default Footer