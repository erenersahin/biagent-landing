import { useState, useEffect } from 'react'
import { Logo } from './components/Logo'

// SVG Icon Components
const IconParallel = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
    <circle cx="6" cy="6" r="2" fill="currentColor" />
    <circle cx="14" cy="12" r="2" fill="currentColor" />
    <circle cx="10" cy="18" r="2" fill="currentColor" />
  </svg>
)

const IconGitBranch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="6" y1="3" x2="6" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </svg>
)

const IconEye = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const IconSliders = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
)

const IconRefresh = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
)

const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

// Use case options for the waitlist form
const USE_CASES = [
  { id: 'bug-fixes', label: 'Bug fixes' },
  { id: 'feature-dev', label: 'Feature development' },
  { id: 'code-reviews', label: 'Code reviews' },
  { id: 'testing', label: 'Testing & QA' },
  { id: 'documentation', label: 'Documentation' },
  { id: 'refactoring', label: 'Refactoring' },
]

// Pipeline steps for the visual
const PIPELINE_STEPS = [
  { num: 1, name: 'Context', desc: 'Gathers ticket & codebase context' },
  { num: 2, name: 'Risk', desc: 'Analyzes risks & dependencies' },
  { num: 3, name: 'Plan', desc: 'Creates implementation plan' },
  { num: 4, name: 'Code', desc: 'Implements changes' },
  { num: 5, name: 'Test', desc: 'Writes & runs tests' },
  { num: 6, name: 'Docs', desc: 'Updates documentation' },
  { num: 7, name: 'PR', desc: 'Creates pull request' },
  { num: 8, name: 'Review', desc: 'Responds to feedback' },
]

// Features list with SVG icon components
const FEATURES = [
  {
    Icon: IconParallel,
    title: 'Parallel Execution',
    description: 'Work on multiple tickets simultaneously. Each pipeline runs independently with isolated git worktrees, so there are no conflicts.',
  },
  {
    Icon: IconGitBranch,
    title: 'Git Worktree Isolation',
    description: 'Each ticket gets its own sandboxed branch. Code changes never interfere with your main work. Merge only when ready.',
  },
  {
    Icon: IconEye,
    title: 'Transparent Reasoning',
    description: 'See exactly what the AI is thinking. Every decision is logged in real-time token streaming. No black boxes.',
  },
  {
    Icon: IconSliders,
    title: 'Supervised Autonomy',
    description: 'Agents work independently but you\'re always in control. Pause, provide feedback, or restart any step at any time.',
  },
  {
    Icon: IconRefresh,
    title: 'Session Persistence',
    description: 'Close your browser, come back tomorrow. Your pipelines resume exactly where they left off. Never lose progress.',
  },
  {
    Icon: IconLink,
    title: 'Seamless Integration',
    description: 'Connect your issue tracker and GitHub. Auto-sync tickets, create PRs, respond to reviews. Fits your workflow.',
  },
]

// FAQ items
const FAQ_ITEMS = [
  {
    question: 'When will I get access?',
    answer: 'We\'re rolling out invites starting February 2026. Join the waitlist to get early access and founder pricing.',
  },
  {
    question: 'Is it free during beta?',
    answer: 'Yes, the beta is free. You\'ll only pay for the AI API costs (Anthropic Claude). We\'ll have pricing plans after launch.',
  },
  {
    question: 'Does it work with my codebase?',
    answer: 'BiAgent works with any codebase that uses git. It supports multiple languages and frameworks. The AI adapts to your project structure.',
  },
  {
    question: 'Is my code safe?',
    answer: 'Your code stays local. BiAgent runs on your machine. Only ticket context and code snippets are sent to the AI for processing.',
  },
  {
    question: 'What if the AI makes mistakes?',
    answer: 'All changes are sandboxed in isolated branches. You review everything before merging. You can restart any step with feedback.',
  },
]

function App() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [activeStep, setActiveStep] = useState(4) // Highlight "Code" step

  const toggleUseCase = (id: string) => {
    setSelectedUseCases(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  // Animate through pipeline steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % 8) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-bg-page">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-bg-page/95 backdrop-blur-sm border-b-2 border-primary-dark">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Logo size={32} />
            <span className="font-mono font-medium text-primary-dark tracking-wide">BIAGENT</span>
          </div>
          <a href="#waitlist" className="btn btn-primary text-sm py-3 px-6">
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <p className="section-label text-primary-dark/60 mb-4">/ AI-POWERED DEVELOPMENT</p>
            <h1 className="text-display mb-6">
              Ship 10x faster.<br />
              <span className="text-primary bg-primary-dark px-3 py-1 inline-block">Code cleaner.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-body max-w-2xl mb-8 leading-relaxed">
              Less time chasing forgotten unknowns. More time making decisions that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#waitlist" className="btn btn-primary">
                Start Shipping Faster
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                See How It Works
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success"></span>
                Free during beta
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Visual */}
      <section id="how-it-works" className="py-20 px-6 bg-white border-y-2 border-primary-dark scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-primary-dark/60 mb-4">/ 8-STEP PIPELINE</p>
          <h2 className="text-h2 mb-4">From ticket to PR, automatically</h2>
          <p className="text-lg text-text-muted mb-12 max-w-2xl">
            AI handles the grunt work. You make the calls. Watch agents surface edge cases and unknowns in real-time.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {PIPELINE_STEPS.map((step) => (
              <div
                key={step.num}
                className={`card p-4 text-center transition-all ${
                  step.num === activeStep
                    ? 'bg-primary border-primary-dark animate-pulse'
                    : step.num < activeStep
                      ? 'bg-white border-success'
                      : 'bg-white opacity-60'
                }`}
              >
                <div className={`w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center font-mono font-medium ${
                  step.num === activeStep
                    ? 'bg-primary-dark text-primary'
                    : step.num < activeStep
                      ? 'bg-success text-white'
                      : 'bg-pending/20 text-pending'
                }`}>
                  {step.num < activeStep ? '✓' : step.num}
                </div>
                <p className="font-medium text-sm mb-1">{step.name}</p>
                <p className="text-xs text-text-muted hidden lg:block">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-bg-page rounded-lg border-2 border-primary-dark">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="font-mono font-medium">4</span>
              </div>
              <div className="flex-1">
                <p className="font-mono text-sm text-text-muted mb-2">// AGENT REASONING</p>
                <div className="font-mono text-sm bg-white p-4 rounded border border-primary-dark/20">
                  <p className="text-text-body">
                    <span className="text-primary-dark">Analyzing ticket PROJ-123...</span><br />
                    Found 3 related files in src/auth/<br />
                    Implementing OAuth2 refresh token logic<br />
                    <span className="animate-pulse">Writing TokenRefreshService.ts...</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Solved */}
      <section className="pt-20 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-primary-dark/60 mb-4">/ PROBLEMS SOLVED</p>
          <h2 className="text-h2 mb-4">Fewer surprises. Better decisions.</h2>
          <p className="text-lg text-text-muted mb-12 max-w-2xl">
            BiAgent surfaces the unknowns early so you can focus on what actually matters.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-error/50 bg-error/5">
              <p className="section-label text-error mb-4">/ WITHOUT BIAGENT</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-error mt-1">✗</span>
                  <span>Discover edge cases mid-implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-error mt-1">✗</span>
                  <span>Scramble to find context across the codebase</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-error mt-1">✗</span>
                  <span>Forget dependencies until review time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-error mt-1">✗</span>
                  <span>Grind through boilerplate instead of deciding</span>
                </li>
              </ul>
            </div>

            <div className="card border-success/50 bg-success/5">
              <p className="section-label text-success mb-4">/ WITH BIAGENT</p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-success mt-1">✓</span>
                  <span>Risks and edge cases surfaced upfront</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success mt-1">✓</span>
                  <span>Full context gathered in seconds, not hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success mt-1">✓</span>
                  <span>Dependencies mapped before you write a line</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-success mt-1">✓</span>
                  <span>You decide, AI executes—5 tickets in parallel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-12 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="section-label text-primary-dark/60 mb-4">/ KEY FEATURES</p>
          <h2 className="text-h2 mb-4">Ship with confidence, not anxiety</h2>
          <p className="text-lg text-text-muted mb-12 max-w-2xl">
            Tools that help you understand the full picture before committing to a path.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="card hover:border-primary-dark"
              >
                <div className="w-12 h-12 rounded-lg bg-primary border-2 border-primary-dark flex items-center justify-center mb-4 text-primary-dark">
                  <feature.Icon />
                </div>
                <h3 className="text-lg font-medium text-text-heading mb-2">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worktree Deep Dive */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label text-primary-dark/60 mb-4">/ GIT WORKTREE ISOLATION</p>
              <h2 className="text-h2 mb-6">No more branch conflicts</h2>
              <p className="text-lg text-text-body mb-6">
                Every ticket pipeline runs in its own isolated git worktree. This means:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-mono font-medium">1</span>
                  </span>
                  <div>
                    <p className="font-medium">Work on multiple tickets simultaneously</p>
                    <p className="text-text-muted">Each gets its own branch and working directory</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-mono font-medium">2</span>
                  </span>
                  <div>
                    <p className="font-medium">No file conflicts or race conditions</p>
                    <p className="text-text-muted">Agents can edit the same files in different tickets</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-xs font-mono font-medium">3</span>
                  </span>
                  <div>
                    <p className="font-medium">Auto-cleanup after PR merge</p>
                    <p className="text-text-muted">Worktrees are removed automatically via webhook</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary-dark rounded-2xl p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-error"></span>
                <span className="w-3 h-3 rounded-full bg-warning"></span>
                <span className="w-3 h-3 rounded-full bg-success"></span>
                <span className="text-white/50 ml-2">terminal</span>
              </div>
              <div className="text-white/90 space-y-2">
                <p><span className="text-primary">$</span> ls biagent-worktrees/</p>
                <p className="text-white/60">PROJ-123/  PROJ-124/  PROJ-125/</p>
                <p className="mt-4"><span className="text-primary">$</span> git worktree list</p>
                <p className="text-white/60">/main                   abc1234 [main]</p>
                <p className="text-white/60">/biagent-worktrees/PROJ-123  def5678 [biagent/PROJ-123]</p>
                <p className="text-white/60">/biagent-worktrees/PROJ-124  ghi9012 [biagent/PROJ-124]</p>
                <p className="text-white/60">/biagent-worktrees/PROJ-125  jkl3456 [biagent/PROJ-125]</p>
                <p className="mt-4 text-success">✓ 3 tickets running in parallel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-20 pb-32 px-6 bg-primary scroll-mt-20 min-h-[calc(100vh-80px)]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-label text-primary-dark/60 mb-4">/ JOIN THE WAITLIST</p>
          <h2 className="text-h2 mb-4">Ship smarter, not harder</h2>
          <p className="text-lg text-text-body mb-8">
            Join the waitlist. Early adopters get founder pricing and direct support.
          </p>

          {isSubmitted ? (
            <div className="card bg-white text-center py-12">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✓</span>
              </div>
              <h3 className="text-h3 mb-2">You're on the list!</h3>
              <p className="text-text-muted mb-6">
                We'll email you when BiAgent is ready. Thanks for your interest!
              </p>
              <p className="text-sm text-text-muted">
                What happens next: Rolling invites starting February 2026
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card bg-white text-left">
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="input"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-text-muted">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-2">
                    Role <span className="text-text-muted">(optional)</span>
                  </label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="input"
                  >
                    <option value="">Select your role</option>
                    <option value="developer">Developer</option>
                    <option value="lead">Tech Lead</option>
                    <option value="manager">Engineering Manager</option>
                    <option value="founder">Founder / CTO</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">
                    What would you use BiAgent for? <span className="text-text-muted">(optional)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {USE_CASES.map((useCase) => (
                      <button
                        key={useCase.id}
                        type="button"
                        onClick={() => toggleUseCase(useCase.id)}
                        className={`chip ${selectedUseCases.includes(useCase.id) ? 'selected' : ''}`}
                      >
                        {useCase.label}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>

                <p className="text-xs text-text-muted text-center">
                  No spam, ever. We'll only email you about BiAgent updates.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-primary-dark/60 mb-4">/ FAQ</p>
          <h2 className="text-h2 mb-12">Common questions</h2>

          <div className="space-y-6">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="card">
                <h3 className="font-medium text-lg mb-2">{item.question}</h3>
                <p className="text-text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}

export default App
