import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="section-container">
      <h2 className="section-heading">Education</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((item) => (
          <div
            key={item.degree}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.degree}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{item.school}</p>
            <p className="text-sm text-slate-400 dark:text-slate-500 mt-1">{item.dates}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
