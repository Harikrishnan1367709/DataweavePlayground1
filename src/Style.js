export const styles = {
  // Shadcn component variants
  variants: {
    default: {
      background: 'hsl(var(--background))',
      text: 'hsl(var(--foreground))',
      border: 'hsl(var(--border))'
    },
    primary: {
      background: 'hsl(var(--primary))',
      text: 'hsl(var(--primary-foreground))',
      hover: 'hsl(var(--primary) / 0.9)'
    },
    secondary: {
      background: 'hsl(var(--secondary))',
      text: 'hsl(var(--secondary-foreground))',
      hover: 'hsl(var(--secondary) / 0.9)'
    },
    accent: {
      background: 'hsl(var(--accent))',
      text: 'hsl(var(--accent-foreground))',
      hover: 'hsl(var(--accent) / 0.9)'
    }
  },

  // Component base styles
  components: {
    button: {
      base: {
        padding: '0.5rem 1rem',
        borderRadius: '0.375rem',
        fontWeight: '500',
        transition: 'all 150ms'
      }
    },
    input: {
      base: {
        width: '100%',
        borderRadius: '0.375rem',
        padding: '0.5rem',
        border: '1px solid hsl(var(--border))'
      }
    },
    card: {
      base: {
        borderRadius: '0.5rem',
        border: '1px solid hsl(var(--border))',
        background: 'hsl(var(--background))'
      }
    }
  },

  // Layout utilities
  layout: {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    flexBetween: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  },

  // Typography
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: '700',
      lineHeight: '1.2'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '600',
      lineHeight: '1.3'
    },
    body: {
      fontSize: '1rem',
      lineHeight: '1.5'
    }
  }
}
