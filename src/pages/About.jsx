
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
  SiVite,
  SiPython,
  SiNumpy,
} from "react-icons/si";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./About.module.css";

const techBadges = [
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { label: "CSS3", Icon: SiCss, color: "#1572B6" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
  { label: "GitHub", Icon: SiGithub, color: "#181717" },
  { label: "Vite", Icon: SiVite, color: "#646CFF" },
  { label: "Python", Icon: SiPython, color: "#3776AB" },
  { label: "NumPy", Icon: SiNumpy, color: "#013243" },
];

function KLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="80"
      height="80"
    >
      <rect width="32" height="32" rx="6" fill="#0D3B66" />
      <text
        x="16"
        y="22"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight="bold"
        fill="#2EC4B6"
        textAnchor="middle"
      >
        K
      </text>
    </svg>
  );
}

export default function About() {
  useScrollReveal();

  return (
    <main className={styles.main}>
      <div className="container">
        
        <div className={styles.bio}>
         
          <div className={`${styles.avatarWrap} reveal`}>
            <div className={styles.avatar}>
              <KLogo />
            </div>
           
            <div className={styles.avatarSocials}>
              <a
                href="https://github.com/Kagide"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="GitHub"
              >
                <FiGithub size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kagide"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Text */}
          <div className={styles.text}>
            <p className="label reveal">About Me</p>
            <h1 className="section-title reveal" data-delay="1">
              Hi, I'm Kagide —<br />a Frontend Developer.
            </h1>

            <p className={`${styles.para} reveal`} data-delay="2">
              I'm a frontend developer with a passion for building clean, modern
              web applications using React. I enjoy turning design ideas into
              pixel-perfect, performant user interfaces that feel great to use.
            </p>
            <p className={`${styles.para} reveal`} data-delay="3">
              Alongside frontend development, I have a background in Machine
              Learning — with hands-on experience in supervised learning,
              regression, classification, and neural networks. This technical
              breadth helps me think about data-driven UIs and performance in a
              unique way.
            </p>
            <p className={`${styles.para} reveal`} data-delay="4">
              I'm currently looking for frontend or full-stack opportunities
              where I can contribute to meaningful products and keep growing as
              an engineer.
            </p>

            <div className={`${styles.actions} reveal`} data-delay="4">
              <Link to="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        
        <div className={styles.techSection}>
          <p className="label reveal">Tech Stack</p>
          <h2 className="section-title reveal" data-delay="1">
            Tools I Work With
          </h2>
          <p className={`${styles.techSub} reveal`} data-delay="2">
            A selection of technologies I use to build my projects.
          </p>

          <div className={`${styles.badgeGrid} reveal`} data-delay="3">
            {techBadges.map(({ label, Icon, color }) => (
              <div key={label} className={styles.badge}>
                <Icon size={28} color={color} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

      
        <div className={styles.statsRow}>
          {[
            { num: "4+", label: "React Projects" },
            { num: "42", label: "GitHub Repos" },
            { num: "2+", label: "Years Learning" },
            { num: "∞", label: "Curiosity" },
          ].map(({ num, label }, i) => (
            <div
              key={label}
              className={`${styles.stat} reveal`}
              data-delay={i + 1}
            >
              <span className={styles.statNum}>{num}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
