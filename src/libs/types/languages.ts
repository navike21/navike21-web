import { SUPPORTED_LANGUAGES } from '@Constants/languages'

export type TLanguage =
  (typeof SUPPORTED_LANGUAGES)[keyof typeof SUPPORTED_LANGUAGES]

export type TLanguageKey = keyof typeof SUPPORTED_LANGUAGES
