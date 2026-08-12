import { about } from '../data/content'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-container">
      <SectionHeading>About</SectionHeading>
      <div className="max-w-3xl space-y-4">
        <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{about.summary}</p>
        <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed italic">
          {about.personalTouch}
        </p>
      </div>
    </section>
  )
}
