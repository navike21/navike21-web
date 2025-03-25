'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { IComponentProps } from '@Types/interfaces/common'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useMuiThemeProvider } from './useMuiThemeProvider'

export const MUIProvider = ({ children }: IComponentProps) => {
  const theme = useMuiThemeProvider()
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
