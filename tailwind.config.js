/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
        body: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        surface: {
          light: '#ffffff',
          dark: '#050812',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          inverted: '#f8fafc',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'magnetic': 'magnetic 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        magnetic: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(var(--mouse-x), var(--mouse-y))' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'spring-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'quint': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
  safelist: [
    // Border hover colors (used dynamically in Services + About)
    'hover:border-blue-500/50', 'hover:border-emerald-500/50',
    'hover:border-amber-500/50', 'hover:border-indigo-500/50',
    'hover:border-violet-500/50', 'hover:border-rose-500/50',
    // Background colors
    'bg-blue-500/10', 'bg-emerald-500/10', 'bg-amber-500/10',
    'bg-indigo-500/10', 'bg-violet-500/10', 'bg-rose-500/10',
    // Text colors
    'text-blue-500', 'text-emerald-500', 'text-amber-500',
    'text-indigo-500', 'text-violet-500', 'text-rose-500',
    // Hover text
    'hover:text-blue-400', 'hover:text-emerald-400', 'hover:text-amber-400',
    'hover:text-indigo-400', 'hover:text-violet-400', 'hover:text-rose-400',
    // Button hover bg
    'hover:bg-blue-500', 'hover:bg-emerald-500', 'hover:bg-amber-500',
    'hover:bg-indigo-500', 'hover:bg-violet-500', 'hover:bg-rose-500',
    // Shadow hover
    'hover:shadow-blue-500/10', 'hover:shadow-emerald-500/10',
    'hover:shadow-amber-500/10', 'hover:shadow-indigo-500/10',
    'hover:shadow-violet-500/10', 'hover:shadow-rose-500/10',
    'hover:shadow-blue-500/20', 'hover:shadow-emerald-500/20',
    'hover:shadow-amber-500/20', 'hover:shadow-indigo-500/20',
    'hover:shadow-violet-500/20', 'hover:shadow-rose-500/20',
    // Pulse dot bg
    'bg-blue-500', 'bg-emerald-500', 'bg-amber-500',
    'bg-indigo-500', 'bg-violet-500', 'bg-rose-500',
  ],
}