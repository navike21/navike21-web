'use client'

import React, { FC, ReactNode } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import StyledEngineProvider from '@mui/material/StyledEngineProvider'
import { LIGHT } from '@Constants/shared'
import { darkTheme, lightTheme } from '@Themes/config'
import { PRIMARY_COLOR } from '@Themes/constants'

type TProps = {
  children: ReactNode
}

export const MuiThemeProvider: FC<TProps> = ({ children }) => {
  const themeMode = LIGHT
  const importTheme =
    themeMode === LIGHT ? lightTheme(PRIMARY_COLOR) : darkTheme(PRIMARY_COLOR)

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
