'use client'

import React, { FC, ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { LIGHT } from '@Constants/shared'
import { darkTheme, lightTheme } from '@Themes/config'

type TProps = {
  children: ReactNode
}

export const MuiThemeProvider: FC<TProps> = ({ children }) => {
  const themeMode = LIGHT
  const importTheme =
    themeMode === LIGHT ? lightTheme('primaryColor') : darkTheme('primaryColor')

  const theme = createTheme(importTheme)

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
