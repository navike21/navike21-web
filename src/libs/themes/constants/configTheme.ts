import {
  BREAKPOINTS_LG,
  BREAKPOINTS_MD,
  BREAKPOINTS_SM,
  BREAKPOINTS_XL,
  BREAKPOINTS_XS
} from '@Constants/shared'
import { ThemeOptions } from '@mui/material'

export const configTheme: ThemeOptions = {
  breakpoints: {
    values: {
      xs: BREAKPOINTS_XS,
      sm: BREAKPOINTS_SM,
      md: BREAKPOINTS_MD,
      lg: BREAKPOINTS_LG,
      xl: BREAKPOINTS_XL
    }
  },
  shape: {
    borderRadius: 8
  },
  typography: {
    fontFamily: 'inherit',
    fontSize: 14,
    button: {
      fontWeight: 400,
      letterSpacing: 0.4,
      textTransform: 'none'
    },
    body1: {
      letterSpacing: 0.4
    }
  }
}
