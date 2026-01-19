// ===========================================
// Logo Animation: Sequential Build
// Black box with yellow balls and line (matches logo style)
// ===========================================
export function LogoAnimation() {
  // Animation: left ball > line draws left-to-right > right ball > right ball out > line erases left-to-right > left ball out
  const lineLength = 36;
  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      className="logo-animation"
      aria-label="Logo animation: two dots connected by a line"
    >
      <style>{`
        .logo-dot-1 {
          opacity: 0;
          animation: dot1 3s ease-in-out infinite;
        }
        .logo-dot-2 {
          opacity: 0;
          animation: dot2 3s ease-in-out infinite;
        }
        .logo-line {
          stroke-dasharray: 36;
          stroke-dashoffset: 36;
          animation: line 3s ease-in-out infinite;
        }
        @keyframes dot1 {
          0% { opacity: 0; }
          8% { opacity: 1; }
          80% { opacity: 1; }
          90% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes dot2 {
          0%, 25% { opacity: 0; }
          35% { opacity: 1; }
          50% { opacity: 1; }
          58% { opacity: 0; }
          100% { opacity: 0; }
        }
        @keyframes line {
          0%, 10% { stroke-dashoffset: 36; }
          25% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 0; }
          70% { stroke-dashoffset: 36; }
          100% { stroke-dashoffset: 36; }
        }
      `}</style>

      {/* Black background square box with rounded corners */}
      <rect width="160" height="160" rx="30" fill="var(--black, #202020)" />

      {/* First dot - yellow (smaller) */}
      <circle
        cx="50"
        cy="80"
        r="12"
        fill="var(--yellow, #F0FB29)"
        className="logo-dot-1"
      />

      {/* Connecting line - yellow */}
      <line
        x1="62"
        y1="80"
        x2="98"
        y2="80"
        stroke="var(--yellow, #F0FB29)"
        strokeWidth="4"
        strokeLinecap="round"
        className="logo-line"
      />

      {/* Second dot - yellow (smaller) */}
      <circle
        cx="110"
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
    <section className="pt-32 pb-20 bg-yellow theme-yellow relative overflow-hidden">
      {/* Mobile: subtle smaller logo as background accent */}
      <div className="absolute right-4 bottom-8 opacity-30 lg:hidden">
        <LogoAnimation />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Logo Animation - positioned inside container to align with header's Join button */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block translate-x-[40px]">
          <div className="scale-150 origin-center">
            <LogoAnimation />
          </div>
        </div>

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
