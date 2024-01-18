import { TLangSupported } from '@Types/shared'

export const getLangBrowser = (): TLangSupported =>
  typeof navigator !== 'undefined'
    ? (navigator.language?.split('-')[0] as TLangSupported)
    : 'en'
