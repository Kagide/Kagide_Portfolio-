
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>

   
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            Kagide<span className={styles.dot}>.</span>
          </Link>
          <p className={styles.tagline}>
            Frontend Developer — building clean, modern web apps.
          </p>
        </div>

     
        <nav className={styles.nav}>
          <Link to="/"         className={styles.navLink}>Home</Link>
          <Link to="/about"    className={styles.navLink}>About</Link>
          <Link to="/projects" className={styles.navLink}>Projects</Link>
          <Link to="/contact"  className={styles.navLink}>Contact</Link>
        </nav>

    
        <div className={styles.socials}>
          <a
            href="https://github.com/Kagide"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/kagide"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:kagide6@gmail.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>

      </div>

    
      <div className={styles.bottom}>
        <div className="container">
          <p>© {year} Kagide. Built with React + Vite.</p>
        </div>
      </div>
    </footer>
  )
}
