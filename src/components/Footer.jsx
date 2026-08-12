import { personal } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {personal.name}. Built with React & Tailwind CSS.
      </div>
    </footer>
  )
}
