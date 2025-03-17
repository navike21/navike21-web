import { useMuiTheme } from '@Hooks/useMuiTheme'
import { createTheme, Theme } from '@mui/material'

export const useMuiThemeProvider = (): Theme => {
  const { pxToRem, spacing } = useMuiTheme()

  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 680,
        md: 960,
        lg: 1280,
        xl: 1920
      }
    },
    cssVariables: true,
    palette: {
      mode: 'dark'
    },
    typography: {
      fontFamily: 'var(--font-body)',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: 'var(--font-title)',
        fontSize: pxToRem(40),
        fontWeight: 700
      },
      h2: {
        fontFamily: 'var(--font-title)',
        fontSize: pxToRem(36),
        fontWeight: 700
      },
      h3: {
        fontFamily: 'var(--font-title)',
        fontSize: pxToRem(30),
        fontWeight: 700
      },
      h4: {
        fontFamily: 'var(--font-title)',
        fontSize: pxToRem(24),
        fontWeight: 700
      },
      h5: {
        fontFamily: 'var(--font-title)',
        fontSize: pxToRem(20),
        fontWeight: 700
      },
      h6: {
        fontFamily: 'var(--font-title)',
        fontSize: pxToRem(18),
        fontWeight: 700
      },
      button: {
        fontFamily: 'var(--font-body)',
        fontSize: pxToRem(16),
        textTransform: 'none',
        fontWeight: 500
      }
    },
    shape: {
      borderRadius: 0
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--max-width': '1200px',
            '--black-color-900': 'rgba(16, 26, 36, 0.9)',
            '--black-color-800': 'rgba(16, 26, 36, 0.8)',
            '--black-color-700': 'rgba(16, 26, 36, 0.7)',
            '--black-color-600': 'rgba(16, 26, 36, 0.6)',
            '--black-color-500': 'rgba(16, 26, 36, 0.5)',
            '--black-color-400': 'rgba(16, 26, 36, 0.4)',
            '--black-color-300': 'rgba(16, 26, 36, 0.3)',
            '--black-color-200': 'rgba(16, 26, 36, 0.2)',
            '--black-color-100': 'rgba(16, 26, 36, 0.1)',
            '--black-color-50': 'rgba(16, 26, 36, 0.05)',
            '--break-point-xs': '0',
            '--break-point-sm': '600',
            '--break-point-md': '960',
            '--break-point-lg': '1280',
            '--break-point-xl': '1920'
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: spacing(1.5, 3.5)
          }
        }
      }
    }
  })
}
