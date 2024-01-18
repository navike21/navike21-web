import { TLangSupported } from '@Types/shared'

export const useLangBrowser = (): TLangSupported => {
  return navigator.language.split('-')[0] as TLangSupported
}
