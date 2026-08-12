import { useState } from 'react'
import { personal } from '../data/content'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      setStatus('error')
      return
    }

    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-container">
      <h2 className="section-heading">Contact</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Open to backend engineering and health informatics opportunities. Reach out directly or
            send a message.
          </p>
          <ContactLink label={personal.email} href={`mailto:${personal.email}`} icon="mail" />
          <ContactLink label={personal.phone} href={`tel:${personal.phone.replace(/\s/g, '')}`} icon="phone" />
          <ContactLink label="LinkedIn" href={personal.linkedin} icon="linkedin" />
          <ContactLink label="GitHub" href={personal.github} icon="github" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2.5 text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2.5 text-slate-900 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-2.5 text-slate-900 dark:text-white"
            />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium transition-colors disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks — your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong. Please email me directly at {personal.email}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

function ContactLink({ label, href, icon }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-accent-dark dark:hover:text-accent-light transition-colors"
    >
      <Icon name={icon} />
      <span>{label}</span>
    </a>
  )
}

function Icon({ name }) {
  const props = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
  switch (name) {
    case 'mail':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"
          />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...props}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 00-4 0" />
        </svg>
      )
    case 'github':
      return (
        <svg {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"
          />
        </svg>
      )
    default:
      return null
  }
}
