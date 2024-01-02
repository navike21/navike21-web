import { TThemeMode } from '@Types/shared'
import { useRef } from 'react'

export const useColorMode = (): TThemeMode => {
  const colorMode = useRef<TThemeMode>(null)

  if (colorMode.current === null) {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    colorMode.current = darkMode ? 'dark' : 'light'
  }

  return colorMode.current
}
