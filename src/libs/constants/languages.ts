import type { Language } from '@Types/languages'

export const ESP = 'es'
export const ENG = 'en'
export const DEU = 'de'
export const FRA = 'fr'
export const ITA = 'it'
export const JPN = 'ja'
export const KOR = 'ko'
export const POR = 'pt'
export const CHI = 'zh'
export const RUS = 'ru'

export const SUPPORTED_LANGUAGES = [
  ESP,
  ENG,
  DEU,
  FRA,
  ITA,
  JPN,
  KOR,
  POR,
  CHI,
  RUS
] as const

export const LANGUAGE_LABELS: Record<Language, string> = {
  [ESP]: 'Español',
  [ENG]: 'English',
  [DEU]: 'Deutsch',
  [FRA]: 'Français',
  [ITA]: 'Italiano',
  [JPN]: '日本語',
  [KOR]: '한국어',
  [POR]: 'Português',
  [CHI]: '中文',
  [RUS]: 'Русский'
}
