import { TLangSupported } from './lang'

export type TActions = {
  settings: string
}

export type TActionsLang = {
  [key in TLangSupported]: TActions
}
