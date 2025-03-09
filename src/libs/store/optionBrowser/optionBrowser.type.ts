import { ELanguage } from 'src/libs/typed/enums/languages'
import { EThemeMode } from 'src/libs/typed/enums/optionsTheme'

export interface IOptionsBrowserState {
  themeOption: EThemeMode
  language: ELanguage
  setThemeOption: (themeOption: EThemeMode) => void
  setLanguage: (language: ELanguage) => void
}
