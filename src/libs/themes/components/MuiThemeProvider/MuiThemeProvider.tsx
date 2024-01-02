'use client'

import React, { FC, ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { useConfigStateTheme } from './hooks'

type TMuiThemeProviderProps = {
  children: ReactNode
}

export const MuiThemeProvider: FC<TMuiThemeProviderProps> = ({ children }) => {
  const theme = createTheme(useConfigStateTheme())

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
