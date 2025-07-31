export const DE = 'de'
export const EN = 'en'
export const ES = 'es'
export const FR = 'fr'
export const IT = 'it'
export const JA = 'ja'
export const KO = 'ko'
export const PT = 'pt'
export const ZH = 'zh'

export const SUPPORTED_LANGUAGES = {
  de: DE,
  en: EN,
  es: ES,
  fr: FR,
  it: IT,
  ja: JA,
  ko: KO,
  pt: PT,
  zh: ZH
} as const

export const localeToLanguage = {
  [ES]: 'es-PE',
  [EN]: 'en-US',
  [DE]: 'de-DE',
  [FR]: 'fr-FR',
  [IT]: 'it-IT',
  [JA]: 'ja-JP',
  [KO]: 'ko-KR',
  [PT]: 'pt-BR',
  [ZH]: 'zh-CN'
} as const
