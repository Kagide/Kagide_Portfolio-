
import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Page not found.</h1>
      <p className={styles.sub}>
        The page you're looking for doesn't exist or was moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </main>
  )
}
