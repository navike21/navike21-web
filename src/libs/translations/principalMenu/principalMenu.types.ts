import { ELanguage } from '@Enums/languages'

export type TMenuItem = {
  key: string
  label: string
  path: string
  slug: string
}

export type TTranslations = {
  [key in ELanguage]: TMenuItem[]
}
