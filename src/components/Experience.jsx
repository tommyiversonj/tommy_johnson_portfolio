import { experience } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <SectionHeading>Experience</SectionHeading>
      <div className="space-y-8">
        {experience.map((job) => (
          <article
            key={job.role + job.dates}
            className="relative pl-6 border-l-2 border-accent/30"
          >
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
              <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{job.role}</h3>
              <span className="text-sm text-slate-500 dark:text-slate-400">{job.dates}</span>
            </div>
            <p className="text-sm font-medium text-accent-dark dark:text-accent-light mb-3">
              {job.org} — {job.location}
            </p>
            <ul className="space-y-1.5 list-disc list-inside">
              {job.highlights.map((point) => (
                <li key={point} className="text-sm text-slate-600 dark:text-slate-300">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
