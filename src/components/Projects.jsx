import { projects } from '../data/content'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="section-container bg-slate-50 dark:bg-slate-800/40 rounded-3xl">
      <SectionHeading>Projects</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
