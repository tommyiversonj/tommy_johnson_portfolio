import { stats } from '../data/content'

export default function StatsBanner() {
  return (
    <section aria-label="Impact metrics" className="px-6 pb-16">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 sm:gap-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/40 px-4 sm:px-8 py-6 sm:py-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-accent-dark dark:text-accent-light">
              {stat.value}
            </div>
            <div className="mt-1 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
