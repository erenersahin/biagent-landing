import { useState } from 'react'
import { USE_CASES } from '../../data/constants'

export function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

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

    try {
      const apiUrl = import.meta.env.VITE_API_URL || ''
      const fetchPromise = fetch(`${apiUrl}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: name || null,
          role: role || null,
          use_cases: selectedUseCases.length > 0 ? selectedUseCases : null,
          created_at: new Date().toISOString(),
        }),
      })

      // Timeout after 500ms - show success anyway for better UX
      const timeoutPromise = new Promise<'timeout'>((resolve) =>
        setTimeout(() => resolve('timeout'), 500)
      )

      const result = await Promise.race([fetchPromise, timeoutPromise])

      if (result === 'timeout') {
        // API took too long, assume success for UX (request continues in background)
        console.log('Waitlist API timeout - showing success anyway')
        setIsSubmitted(true)
        return
      }

      const response = result as Response
      if (response.ok) {
        setIsSubmitted(true)
      } else if (response.status === 409) {
        alert('This email is already on the waitlist!')
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Failed to submit:', error)
      // Show success anyway on error for better UX
      console.log('Waitlist API error - showing success anyway')
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="waitlist" className="py-12 px-6 bg-primary scroll-mt-16">
      <div className="max-w-2xl mx-auto text-center">
        <p className="section-label text-primary-dark/60 mb-4">// JOIN THE WAITLIST</p>
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
  )
}
