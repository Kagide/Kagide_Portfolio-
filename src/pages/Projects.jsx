
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Projects.module.css'

export default function Projects() {
  useScrollReveal()

  return (
    <main className={styles.main}>
      <div className="container">

  
        <div className={styles.header}>
          <p className={`label reveal`}>Portfolio</p>
          <h1 className={`section-title reveal`} data-delay="1">
            Featured Projects
          </h1>
          <p className={`${styles.sub} reveal`} data-delay="2">
            Four projects that demonstrate my frontend skills — from React state management
            and API integration to clean UI/UX and component-driven architecture.
          </p>
        </div>

       
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        
        <div className={`${styles.githubCta} reveal`}>
          <p>Want to see more of my code?</p>
          <a
            href="https://github.com/Kagide"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Visit My GitHub →
          </a>
        </div>

      </div>
    </main>
  )
}
