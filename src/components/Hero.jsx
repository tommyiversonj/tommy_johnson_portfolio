import { personal } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <div className="mx-auto mb-6 h-20 w-20 rounded-full shadow-lg shadow-accent/20 overflow-hidden ring-2 ring-accent/30">
          <picture>
            <source srcSet="/img/tommy.webp" type="image/webp" />
            <img
              src="/img/tommy.jpg"
              alt={`${personal.name}, ${personal.title}`}
              width={80}
              height={80}
              className="h-full w-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-4">
          {personal.name}
          <span className="block text-xl sm:text-2xl font-medium text-accent-dark dark:text-accent-light mt-3">
            {personal.title}
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
          {personal.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {personal.focusAreas.map((area) => (
            <span
              key={area}
              className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent-dark dark:text-accent-light"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-lg bg-accent hover:bg-accent-dark text-white font-semibold text-lg shadow-md shadow-accent/30 hover:shadow-lg transition-all"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium hover:border-accent hover:text-accent dark:hover:text-accent-light hover:shadow-sm transition-all"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  )
}
