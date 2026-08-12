export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{project.title}</h3>
        {project.caseStudy && (
          <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            Case Study
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent-dark dark:text-accent-light"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-dark dark:text-accent-light hover:underline"
        >
          View on GitHub
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
          </svg>
        </a>
      )}
    </div>
  )
}
