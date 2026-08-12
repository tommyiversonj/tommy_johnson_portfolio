export default function SectionHeading({ children }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{children}</h2>
      <div className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-light" />
    </div>
  )
}
