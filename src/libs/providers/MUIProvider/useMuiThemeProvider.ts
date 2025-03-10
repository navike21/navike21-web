import { useMuiTheme } from '@Hooks/useMuiTheme'
import { createTheme, Theme } from '@mui/material'

export const useMuiThemeProvider = (): Theme => {
  const { pxToRem } = useMuiTheme()

  return createTheme({
    cssVariables: true,
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
      }
    }
  })
}
