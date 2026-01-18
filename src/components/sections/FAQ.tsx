import { FAQ_ITEMS } from '../../data/constants'

export function FAQ() {
  return (
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
  )
}
