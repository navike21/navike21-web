import { TColorVariant } from '@Themes/types'
import { TLangSupported, TThemeMode } from '@Types/shared'

export type TConfig = {
  language: TLangSupported
  primaryColor: TColorVariant
  themeMode: TThemeMode
}
