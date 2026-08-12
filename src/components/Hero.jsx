import { personal } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-sm font-medium text-accent-dark dark:text-accent-light bg-accent/10 rounded-full px-4 py-1 mb-6">
          {personal.location}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          {personal.name}
        </h1>
        <p className="text-xl sm:text-2xl font-medium text-accent-dark dark:text-accent-light mb-6">
          {personal.title}
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
          {personal.tagline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-accent hover:bg-accent-dark text-white font-medium transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:border-accent hover:text-accent dark:hover:text-accent-light transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
