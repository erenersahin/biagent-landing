/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Base Colors */
        white: '#FFFFFF',
        black: '#202020',
        'black-light': '#333333',
        'black-lighter': '#4A4A4A',

        /* Yellow Palette */
        yellow: {
          DEFAULT: '#F0FB29',
          light: '#F5FC6A',
          dark: '#D4E020',
          muted: '#E8F299',
        },

        /* Gray Palette */
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#DDDDDD',
          400: '#C8C8C8',
          500: '#9CA3AF',
          600: '#6B7280',
          700: '#4B5563',
          800: '#374151',
        },

        /* Semantic Colors (legacy support) */
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
