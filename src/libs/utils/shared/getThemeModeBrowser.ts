import { DARK, LIGHT } from '@Constants/shared'
import { TThemeMode } from '@Types/shared'

export const getThemeModeBrowser = (): TThemeMode =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT
