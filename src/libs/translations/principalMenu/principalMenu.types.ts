import { ELanguage } from '@Enums/languages'
import { EPrincipalMenuKey } from '@Enums/principalMenuKey'

export type TMenuItem = {
  key: EPrincipalMenuKey
  label: string
  path: string
  slug: string
}

export type TTranslations = {
  [key in ELanguage]: TMenuItem[]
}
