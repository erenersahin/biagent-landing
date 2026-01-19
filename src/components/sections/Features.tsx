import { FEATURES } from '../../data/constants'

export function Features() {
  return (
    <section className="pt-12 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-label text-primary-dark/60 mb-4">// KEY FEATURES</p>
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
  )
}
