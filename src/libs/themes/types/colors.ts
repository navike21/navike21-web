import { PRIMARY_COLOR, SECONDARY_COLOR } from '@Themes/constants'

export type TColorValue = 'light' | 'main' | 'dark' | 'contrastText'
export type TTransparentValue = '8' | '12' | '16' | '24' | '32' | '48' | '56'
export type TGrayVariant =
  | '900'
  | '800'
  | '700'
  | '600'
  | '500'
  | '400'
  | '300'
  | '200'
  | '100'

export type TTransparentConfig = {
  [key in TTransparentValue]: string
}
export type TColorConfig = {
  [key in TColorValue]: string
}
export type TGrayConfig = {
  [key in TGrayVariant]: string
}
export type TColorVariant = typeof PRIMARY_COLOR | typeof SECONDARY_COLOR
