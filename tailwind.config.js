/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#1d4ed8',
          700: '#1e3a8a',
          800: '#1e2f6e',
          900: '#0f1f4a'
        },
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c'
        },
        danger: {
          500: '#ef4444',
          600: '#dc2626'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-barlow)', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 40px rgba(29, 78, 216, 0.25)',
        card: '0 4px 24px rgba(0,0,0,0.10)',
        deep: '0 8px 48px rgba(0,0,0,0.18)'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(15,31,74,0.92) 0%, rgba(30,58,138,0.80) 60%, rgba(29,78,216,0.55) 100%)',
        'section-gradient': 'linear-gradient(180deg, #f0f4ff 0%, #ffffff 100%)',
        'cta-gradient': 'linear-gradient(90deg, #1e3a8a 0%, #1d4ed8 100%)'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    }
  },
  plugins: []
};
