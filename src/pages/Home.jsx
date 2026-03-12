
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiArrowRight } from 'react-icons/fi'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Home.module.css'

export default function Home() {
  useScrollReveal()

  return (
    <main>
   
      <section className={styles.hero}>
   
        <div className={styles.heroBg} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>

      
            <div className={`${styles.badge} reveal`}>
              <span className={styles.badgeDot} />
              Open to opportunities
            </div>

            <h1 className={`${styles.headline} reveal`} data-delay="1">
              Frontend Developer<br />
              <em className={styles.em}>crafting modern</em><br />
              web experiences.
            </h1>

       
            <p className={`${styles.sub} reveal`} data-delay="2">
              I build clean, performant React applications with a focus on
              usability and visual polish. Based wherever the work is good.
            </p>

         
            <div className={`${styles.ctas} reveal`} data-delay="3">
              <Link to="/projects" className="btn btn-primary">
                View My Work
                <FiArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>

         
            <div className={`${styles.socials} reveal`} data-delay="4">
              <a
                href="https://github.com/Kagide"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub profile"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/kagide"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn profile"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </div>

          {/* Decorative right panel */}
          <div className={`${styles.heroVisual} reveal`} data-delay="2">
            <div className={styles.codeBlock}>
              <div className={styles.codeBar}>
                <span /><span /><span />
              </div>
              <pre className={styles.codePre}><code>{`const developer = {
  name: "Kagide",
  focus: "Frontend",
  stack: [
    "React",
    "JavaScript",
    "CSS Grid",
    "REST APIs",
  ],
  passion: "Clean UI",
  status: "Available ✓"
}`}</code></pre>
            </div>
          </div>
        </div>

     
        <div className={styles.scrollHint} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span>scroll</span>
        </div>
      </section>

      <section className={`${styles.featured} section`}>
        <div className="container">
          <div className={styles.featuredHead}>
            <div>
              <p className="label reveal">Featured Work</p>
              <h2 className={`section-title reveal`} data-delay="1">
                Selected Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className={`btn btn-outline reveal`}
              data-delay="2"
            >
              All Projects <FiArrowRight size={15} />
            </Link>
          </div>

          <div className={styles.grid}>
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

     
      <section className={styles.ctaStrip}>
        <div className="container">
          <div className={`${styles.ctaInner} reveal`}>
            <div>
              <h2 className={styles.ctaTitle}>Let's build something great.</h2>
              <p className={styles.ctaSub}>
                Looking for a frontend developer who cares about craft?
              </p>
            </div>
            <Link to="/contact" className="btn btn-accent">
              Start a Conversation <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
