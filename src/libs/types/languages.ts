export const SUPPORTED_LANGUAGES = [
  'es',
  'en',
  'de',
  'zh',
  'pt',
  'it',
  'fr',
  'ja'
] as const

export type TLanguage = (typeof SUPPORTED_LANGUAGES)[number]
