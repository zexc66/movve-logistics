/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#1E3A5F',
          dark: '#050A12',
        },
        crimson: {
          DEFAULT: '#991B1E',
          light: '#DC2626',
          dark: '#7A1518',
        },
        brand: {
          primary: 'var(--color-primary)',
          primaryLight: 'var(--color-primary-light)',
          primaryDark: 'var(--color-primary-dark)',
          secondary: 'var(--color-secondary)',
          secondaryLight: 'var(--color-secondary-light)',
          secondaryDark: 'var(--color-secondary-dark)',
          accent: 'var(--color-accent)',
          accentLight: 'var(--color-accent-light)',
          accentDark: 'var(--color-accent-dark)',
          surface: 'var(--color-surface)',
          surfaceSubtle: 'var(--color-surface-subtle)',
          border: 'var(--color-border)',
          muted: 'var(--color-muted)',
          text: 'var(--color-text)',
          success: 'var(--color-success)',
          successLight: 'var(--color-success-light)',
          warning: 'var(--color-warning)',
          warningLight: 'var(--color-warning-light)',
          error: 'var(--color-error)',
          errorLight: 'var(--color-error-light)',
          info: 'var(--color-info)',
          infoLight: 'var(--color-info-light)',
          body: 'var(--color-text)',
          neutral: 'var(--color-muted)',
          tertiary: 'var(--color-accent)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'serif'],
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'hero': 'var(--text-hero)',
        'h1': 'var(--text-h1)',
        'h2': 'var(--text-h2)',
        'h3': 'var(--text-h3)',
        'body': 'var(--text-body)',
        'small': 'var(--text-small)',
      },
      spacing: {
        'xs': 'var(--space-xs)',
        'sm': 'var(--space-sm)',
        'md': 'var(--space-md)',
        'lg': 'var(--space-lg)',
        'xl': 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
        '4xl': 'var(--space-4xl)',
      },
      borderRadius: {
        'xs': 'var(--radius-xs)',
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
      },
      boxShadow: {
        'commanding': 'var(--shadow-commanding)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
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
      },
    },
  },
  plugins: [],
}