
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  const { title, subtitle, description, tags, icon, repoUrl, liveUrl } = project

  return (
    <article
      className={`${styles.card} reveal`}
      data-delay={index + 1}
    >
    
      <div className={styles.stripe} />

      <div className={styles.iconWrap}>
        <span className={styles.icon}>{icon}</span>
      </div>

  
      <div className={styles.body}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

  
      <div className={styles.actions}>
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.btn} ${styles.btnPrimary}`}
        >
          <FiGithub size={15} />
          View Code
        </a>

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnSecondary}`}
          >
            <FiExternalLink size={15} />
            Live Demo
          </a>
        ) : (
          <span className={`${styles.btn} ${styles.btnDisabled}`} title="Demo coming soon">
            <FiArrowRight size={15} />
            Demo Soon
          </span>
        )}
      </div>
    </article>
  )
}
