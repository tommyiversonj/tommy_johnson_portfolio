export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-accent/40">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-lg text-slate-900 dark:text-white">{project.title}</h3>
        {project.caseStudy && (
          <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
            Case Study
          </span>
        )}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>

      {(project.architecture || project.dbOptimization) && (
        <dl className="space-y-3 mb-4 text-sm">
          {project.architecture && (
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white mb-1">System Architecture</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.architecture}</dd>
            </div>
          )}
          {project.dbOptimization && (
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white mb-1">Database & Query Optimization</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.dbOptimization}</dd>
            </div>
          )}
        </dl>
      )}

      {(project.challenge || project.action || project.result) && (
        <dl className="space-y-3 mb-4 text-sm">
          {project.challenge && (
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white mb-1">Challenge</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.challenge}</dd>
            </div>
          )}
          {project.action && (
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white mb-1">Action</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.action}</dd>
            </div>
          )}
          {project.result && (
            <div>
              <dt className="font-semibold text-slate-900 dark:text-white mb-1">Result</dt>
              <dd className="text-slate-600 dark:text-slate-300">{project.result}</dd>
            </div>
          )}
        </dl>
      )}

      <div className="flex flex-wrap gap-2 mb-4 mt-auto">
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
