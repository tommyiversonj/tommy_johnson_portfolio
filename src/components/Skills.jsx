import { skills, softSkills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-container bg-slate-50 dark:bg-slate-800/40 rounded-3xl">
      <h2 className="section-heading">Skills</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">{group.category}</h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-slate-600 dark:text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent-dark dark:text-accent-light"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
