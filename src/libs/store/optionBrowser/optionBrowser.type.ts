import { ELanguage } from '@Enums/languages'
import { EThemeMode } from '@Enums/optionsTheme'

export interface IOptionsBrowserState {
  themeOption: EThemeMode
  language: ELanguage
  setThemeOption: (themeOption: EThemeMode) => void
  setLanguage: (language: ELanguage) => void
}
