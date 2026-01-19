import { useEffect, useState } from 'react'
import { PIPELINE_STEPS } from '../../data/constants'

export function Pipeline() {
  const [activeStep, setActiveStep] = useState(4)

  // Animate through pipeline steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev % 8) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="how-it-works" className="py-20 px-6 bg-white border-y-2 border-primary-dark scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-primary-dark/60 mb-4">// PIPELINE</p>
        <h2 className="text-h2 mb-4">From ticket to PR, automatically</h2>
        <p className="text-lg text-text-muted mb-12 max-w-2xl">
          AI handles the grunt work. You make the calls. Watch agents surface edge cases and unknowns in real-time.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {PIPELINE_STEPS.map((step) => (
            <div
              key={step.num}
              className={`p-4 text-center transition-all rounded-xl border-2 ${step.num === activeStep
                ? 'bg-white border-primary animate-pulse-glow'
                : step.num < activeStep
                  ? 'bg-white border-success'
                  : 'bg-white border-gray-300'
                }`}
            >
              <p className="font-medium text-sm mb-1">{step.name}</p>
              <p className="text-xs text-text-muted hidden lg:block">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-bg-page rounded-lg border-2 border-primary-dark overflow-hidden">
          <div>
            <p className="font-mono text-sm text-text-muted mb-2">
              // AGENT REASONING — <span className="text-primary-dark">{PIPELINE_STEPS[activeStep - 1]?.name.toUpperCase()}</span>
            </p>
            <div className="font-mono text-sm bg-white p-4 rounded border border-primary-dark/20 transition-all duration-500">
              <div key={activeStep} className="text-text-body space-y-1 animate-fade-in">
                {PIPELINE_STEPS[activeStep - 1]?.reasoning.map((line, idx) => (
                  <p
                    key={idx}
                    className={idx === PIPELINE_STEPS[activeStep - 1].reasoning.length - 1 ? 'animate-pulse text-primary-dark' : ''}
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
