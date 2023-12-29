import { CssBaseline } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { lightTheme, darkTheme } from '../src/libs/themes/config/'
import { MuiThemeProvider } from '../src/libs/themes/components/'

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: lightTheme,
      dark: darkTheme
    },
    defaultTheme: 'light',
    Provider: MuiThemeProvider,
    GlobalStyles: CssBaseline
  })
]
