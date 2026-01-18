/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F0FB29',
        'primary-dark': '#202020',
        secondary: '#AEE3FD',
        'bg-page': '#F5F5F5',
        'text-heading': '#202020',
        'text-body': '#333333',
        'text-muted': '#9CA3AF',
        success: '#22C55E',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'Arial', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'pill': '100px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(240, 251, 41, 0.4)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(240, 251, 41, 0.2)' },
        },
      },
    },
  },
  plugins: [],
}
