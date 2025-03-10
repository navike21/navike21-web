'use client'

import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { IComponentProps } from '@Types/interfaces/common'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { muiTheme } from './muiTheme'

export const MUIProvider = ({ children }: IComponentProps) => {
  const theme = muiTheme()
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}
