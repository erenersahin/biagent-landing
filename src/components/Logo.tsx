// BiAgent Logo Concepts
// Bidirectional communication between Human and AI

// Concept 1: Dual Arrows with B
// Two arrows meeting at center, B at intersection
export const LogoDualArrows = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* Left arrow */}
    <path d="M8 16L12 12V14.5H15V17.5H12V20L8 16Z" fill="#F0FB29" />
    {/* Right arrow */}
    <path d="M24 16L20 12V14.5H17V17.5H20V20L24 16Z" fill="#F0FB29" />
  </svg>
)

// Concept 2: Connected Dots (Human ←→ AI)
// Two circles with bidirectional connection
export const LogoConnectedDots = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* Left dot (Human) */}
    <circle cx="10" cy="16" r="4" fill="#F0FB29" />
    {/* Right dot (AI) */}
    <circle cx="22" cy="16" r="4" fill="#F0FB29" />
    {/* Bidirectional line */}
    <rect x="14" y="15" width="4" height="2" fill="#F0FB29" />
  </svg>
)

// Concept 3: Abstract B with Flow
// B shape suggesting continuous bidirectional flow
export const LogoFlowB = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* B formed by two connected loops */}
    <path
      d="M11 8H17C19.5 8 21 9.5 21 12C21 13.5 20 14.5 19 15C20.5 15.5 22 17 22 19.5C22 22.5 19.5 24 17 24H11V8Z"
      stroke="#F0FB29"
      strokeWidth="2"
      fill="none"
    />
    {/* Arrow hint top */}
    <path d="M17 12H14" stroke="#F0FB29" strokeWidth="2" />
    {/* Arrow hint bottom */}
    <path d="M17 20H14" stroke="#F0FB29" strokeWidth="2" />
  </svg>
)

// Concept 4: Bracket B (Simplest - recommended)
// B with opposing brackets suggesting I/O
export const LogoBracketB = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* Left bracket ] */}
    <path d="M9 10V22H12V19H10V13H12V10H9Z" fill="#F0FB29" />
    {/* Right bracket [ */}
    <path d="M23 10V22H20V19H22V13H20V10H23Z" fill="#F0FB29" />
    {/* Center dot */}
    <circle cx="16" cy="16" r="2.5" fill="#F0FB29" />
  </svg>
)

// Concept 5: Minimal Arrows (Super Simple - recommended)
// Just two arrows facing each other
export const LogoMinimalArrows = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* Left-pointing arrow */}
    <path
      d="M10 16L15 11V14H17V18H15V21L10 16Z"
      fill="#F0FB29"
    />
    {/* Right-pointing arrow */}
    <path
      d="M22 16L17 11V14H15V18H17V21L22 16Z"
      fill="none"
      stroke="#F0FB29"
      strokeWidth="1.5"
    />
  </svg>
)

// Concept 6: Exchange Symbol (Very Clean)
// Two chevrons facing each other like ><
export const LogoExchange = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* Left chevron > */}
    <path
      d="M10 10L16 16L10 22"
      stroke="#F0FB29"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Right chevron < */}
    <path
      d="M22 10L16 16L22 22"
      stroke="#F0FB29"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

// Concept 7: Connected B (User Selected)
// Two dots connected vertically, forming a B shape around them
export const LogoConnectedB = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <rect width="32" height="32" rx="6" fill="#202020" />
    {/* B spine (vertical connection line) */}
    <rect x="10" y="7" width="2.5" height="18" fill="#F0FB29" />
    {/* Top bump of B with dot */}
    <path
      d="M12.5 7H17C19.5 7 21 8.5 21 11C21 13.5 19.5 15 17 15H12.5"
      stroke="#F0FB29"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Bottom bump of B with dot */}
    <path
      d="M12.5 15H18C20.5 15 22 17 22 19.5C22 22 20.5 25 18 25H12.5"
      stroke="#F0FB29"
      strokeWidth="2.5"
      fill="none"
    />
    {/* Top dot (Human) */}
    <circle cx="16.5" cy="11" r="2" fill="#F0FB29" />
    {/* Bottom dot (AI) */}
    <circle cx="17" cy="20" r="2" fill="#F0FB29" />
  </svg>
)

// Default export - user selected
export const Logo = LogoConnectedDots
