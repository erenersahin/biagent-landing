import { IconCheck, IconX } from '../icons'

const WITHOUT_ITEMS = [
  'Discover edge cases mid-implementation',
  'Scramble to find context across the codebase',
  'Forget dependencies until review time',
  'Grind through boilerplate instead of deciding',
]

const WITH_ITEMS = [
  'Risks and edge cases surfaced upfront',
  'Full context gathered in seconds, not hours',
  'Dependencies mapped before you write a line',
  'You decide, AI executes—5 tickets in parallel',
]

export function ProblemsSolved() {
  return (
    <section className="pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-primary-dark/60 mb-4">/ PROBLEMS SOLVED</p>
        <h2 className="text-h2 mb-4">Fewer surprises. Better decisions.</h2>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          BiAgent surfaces the unknowns early so you can focus on what actually matters.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card border-primary-dark/30 bg-white">
            <p className="section-label text-primary-dark mb-4">
              <span className="bg-secondary px-1">/ WITHOUT BIAGENT</span>
            </p>
            <ul className="space-y-4">
              {WITHOUT_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-primary-dark flex items-center justify-center flex-shrink-0">
                    <IconX />
                  </span>
                  <span className="bg-secondary px-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card border-primary-dark/30 bg-white">
            <p className="section-label text-primary-dark mb-4">
              <span className="bg-primary px-1">/ WITH BIAGENT</span>
            </p>
            <ul className="space-y-4">
              {WITH_ITEMS.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white border border-primary-dark flex items-center justify-center flex-shrink-0">
                    <IconCheck />
                  </span>
                  <span className="bg-primary px-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
