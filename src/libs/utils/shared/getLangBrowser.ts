import { TLangSupported } from '@Types/shared'

export const getLangBrowser = (): TLangSupported =>
  navigator.language.split('-')[0] as TLangSupported
