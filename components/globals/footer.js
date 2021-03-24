import styles from '../../styles/Footer.module.css';

const Footer = () => {
  return (

    <div className={styles.footerWrapper}>
      <footer className={styles.footer}>


        <div className={styles.title}>
          <a href="/">Yellow</a>
        </div>
        
        <ul className={styles.secondaryMenu}>
          <li className={styles.menuItem}><a href="/games">Privacy Policy</a></li>
          <li className={styles.menuItem}><a href="/stories">Terms of Service</a></li>
        </ul>

      </footer>
    </div>

  )
}

export default Footer;