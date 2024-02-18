import { TConfig } from './types'
import { PRIMARY_COLOR } from '@Themes/constants'
import { getLangBrowser, getThemeModeBrowser } from '@Utils/shared'

export const defaultStateConfig: TConfig = {
  language: getLangBrowser(),
  primaryColor: PRIMARY_COLOR,
  themeMode: getThemeModeBrowser(),
  menuResponsive: false
}
