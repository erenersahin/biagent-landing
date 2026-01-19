// ===========================================
// Logo Animation: Sequential Build
// Black box with yellow balls and line (matches logo style)
// ===========================================
export function LogoAnimation() {
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      className="logo-animation"
      aria-label="Logo animation: two dots connected by a line"
    >
      {/* Black background square box with rounded corners */}
      <rect width="160" height="160" rx="24" fill="var(--black, #202020)" />

      {/* Connecting line - yellow */}
      <line
        x1="48"
        y1="80"
        x2="112"
        y2="80"
        stroke="var(--yellow, #F0FB29)"
        strokeWidth="4"
        strokeLinecap="round"
        className="logo-line"
      />

      {/* First dot - yellow */}
      <circle
        cx="36"
        cy="80"
        r="12"
        fill="var(--yellow, #F0FB29)"
        className="logo-dot-1"
      />

      {/* Second dot - yellow */}
      <circle
        cx="124"
        cy="80"
        r="12"
        fill="var(--yellow, #F0FB29)"
        className="logo-dot-2"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-yellow theme-yellow relative overflow-hidden">
      {/* Logo Animation - right side on desktop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block lg:right-8 xl:right-24">
        <div className="scale-150">
          <LogoAnimation />
        </div>
      </div>

      {/* Mobile: subtle smaller logo as background accent */}
      <div className="absolute right-4 bottom-8 opacity-30 lg:hidden">
        <LogoAnimation />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <p className="section-label mb-4 text-black-lighter">// AI-POWERED DEVELOPMENT</p>
          <h1 className="text-display mb-6 text-black">
            Ship 10x faster.<br />
            <span className="text-white bg-black px-3 py-1 inline-block">Code cleaner.</span>
          </h1>
          <p className="text-xl md:text-2xl text-black-light max-w-2xl mb-8 leading-relaxed">
            Less time chasing forgotten unknowns. More time making decisions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#waitlist" className="btn bg-black text-yellow border-black hover:bg-black-light">
              Start Shipping Faster
            </a>
            <a href="#how-it-works" className="btn border-2 border-black text-black hover:bg-black/10">
              See How It Works
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-black-lighter">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              Free during beta
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
