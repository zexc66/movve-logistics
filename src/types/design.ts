export interface DesignTokens {
  colors: {
    primary: string
    secondary: string
    tertiary: string
    neutral: string
    surface: string
    border: string
    muted: string
  }
  typography: {
    h1: {
      fontSize: string
      fontWeight: number
      lineHeight: string
      letterSpacing: string
    }
    h2: {
      fontSize: string
      fontWeight: number
      lineHeight: string
      letterSpacing: string
    }
    h3: {
      fontSize: string
      fontWeight: number
      lineHeight: string
    }
    body: {
      fontSize: string
      lineHeight: string
    }
    small: {
      fontSize: string
      lineHeight: string
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  borderRadius: {
    sm: string
    md: string
    lg: string
    full: string
  }
}

export const designTokens: DesignTokens = {
  colors: {
    primary: '#0A1628',
    secondary: '#5B6E8C',
    tertiary: '#991B1E',
    neutral: '#F7F8FA',
    surface: '#FFFFFF',
    border: '#E2E6ED',
    muted: '#8E99A9',
  },
  typography: {
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 5rem)',
      fontWeight: 900,
      lineHeight: '1.05',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 700,
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: '1.3',
    },
    body: {
      fontSize: '1.125rem',
      lineHeight: '1.6',
    },
    small: {
      fontSize: '0.875rem',
      lineHeight: '1.5',
    },
  },
  spacing: {
    xs: '6px',
    sm: '12px',
    md: '20px',
    lg: '32px',
    xl: '56px',
    '2xl': '80px',
  },
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },
}