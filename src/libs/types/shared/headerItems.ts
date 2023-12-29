import { TLangSupported } from './lang'

export type TDataHeaderItem = {
  id: string
  text: string
  path: string
}

export type TDataHeader = {
  [key in TLangSupported]: TDataHeaderItem[]
}
