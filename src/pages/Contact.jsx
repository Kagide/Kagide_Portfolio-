
import { useState, useRef } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './Contact.module.css'


const WEB3FORMS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY'

export default function Contact() {
  useScrollReveal()
  const formRef = useRef(null)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const payload = {
      access_key: WEB3FORMS_KEY,
      name: form.name,
      email: form.email,
      message: form.message,
      subject: `Portfolio contact from ${form.name}`,
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorMsg('Something went wrong. Please email me directly at kagide6@gmail.com')
    }
  }

  return (
    <main className={styles.main}>
      <div className="container">

      
        <div className={styles.pageHeader}>
          <p className="label reveal">Contact</p>
          <h1 className="section-title reveal" data-delay="1">
            Let's Work Together
          </h1>
          <p className={`${styles.headerSub} reveal`} data-delay="2">
            Have a project in mind, a role to discuss, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className={styles.grid}>

         
          <div className={`${styles.info} reveal`}>
            <div className={styles.infoItems}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FiMail size={18} /></div>
                <div>
                  <p className={styles.infoLabel}>Email</p>
                  <a href="mailto:kagide6@gmail.com" className={styles.infoValue}>
                    kagide6@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}><FiMapPin size={18} /></div>
                <div>
                  <p className={styles.infoLabel}>Location</p>
                  <p className={styles.infoValue}>Available remotely</p>
                </div>
              </div>
            </div>

            <div className={styles.socials}>
              <p className={styles.socialsLabel}>Find me on</p>
              <div className={styles.socialBtns}>
                <a
                  href="https://github.com/Kagide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  <FiGithub size={18} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kagide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  <FiLinkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>

            <div className={styles.availNote}>
              <span className={styles.availDot} />
              <p>Currently open to full-time and freelance opportunities.</p>
            </div>
          </div>

         
          <div className={`${styles.formWrap} reveal`} data-delay="2">
            {status === 'success' ? (
              <div className={styles.successState}>
                <div className={styles.successIcon}><FiCheck size={32} /></div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                  Send Another
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>

                {status === 'error' && (
                  <div className={styles.errorBanner}>
                    <FiAlertCircle size={16} />
                    {errorMsg}
                  </div>
                )}

                <div className={styles.field}>
                  <label htmlFor="name" className={styles.fieldLabel}>
                    Full Name <span className={styles.req}>*</span>
                  </label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="email" className={styles.fieldLabel}>
                    Email Address <span className={styles.req}>*</span>
                  </label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.fieldLabel}>
                    Message <span className={styles.req}>*</span>
                  </label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-accent ${styles.submitBtn}`}
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <><span className={styles.spinner} /> Sending…</>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}