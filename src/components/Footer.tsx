import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t-2 border-primary-dark">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-mono font-medium text-primary-dark tracking-wide">BIAGENT</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="#" className="hover:text-text-body transition-colors">Privacy</a>
          <a href="#" className="hover:text-text-body transition-colors">Terms</a>
          <a href="mailto:hello@biagent.dev" className="hover:text-text-body transition-colors">Contact</a>
        </div>
        <p className="text-sm text-text-muted">
          © 2026 BiAgent. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
