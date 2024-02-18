import { TLangSupported } from './lang'

export type TActions = {
  settings: string
  themeMode: string
  language: string
  mainMenu: string
}

export type TActionsLang = {
  [key in TLangSupported]: TActions
}
