import { Logo } from './Logo'

export function Header() {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist')
    if (waitlistSection) {
      // Use 'center' to ensure the submit button is visible on all screen sizes
      waitlistSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-page/95 backdrop-blur-sm border-b-2 border-primary-dark">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo size={32} />
          <span className="font-mono font-medium text-primary-dark tracking-wide">BIAGENT</span>
        </div>
        <button onClick={scrollToWaitlist} className="btn btn-primary text-sm py-3 px-6">
          Join Waitlist
        </button>
      </div>
    </header>
  )
}
