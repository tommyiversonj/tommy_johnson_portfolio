import { availability } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Availability() {
  return (
    <section id="availability" className="section-container">
      <SectionHeading>Experience & Availability</SectionHeading>
      <div className="max-w-3xl space-y-4">
        <p className="text-lg font-medium text-accent-dark dark:text-accent-light">
          {availability.status}
        </p>
        <p className="text-slate-600 dark:text-slate-300">
          Backend engineering and health informatics experience since {availability.experienceSince}
          , based in {availability.location}. {availability.notes}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {['Remote', 'Full-Time', 'Backend Engineering', 'API Development'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent-dark dark:text-accent-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
