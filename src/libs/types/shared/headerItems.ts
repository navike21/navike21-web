import { TLangSupported } from './lang'

export type TMenuHeaderItem = {
  id: string
  text: string
  path: string
}

export type TMenuHeader = {
  [key in TLangSupported]: TMenuHeaderItem[]
}
