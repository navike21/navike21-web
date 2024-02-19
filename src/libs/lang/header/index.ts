import {
  DE,
  EN,
  ES,
  FR,
  IT,
  KR,
  PT,
  RU,
  langSupported
} from '@Constants/shared'
import { TLangSupported, TMenuHeader, TMenuHeaderItem } from '@Types/shared'
import {
  menuDeu,
  menuEng,
  menuEsp,
  menuFra,
  menuIta,
  menuPor,
  menuRus,
  menuKor
} from './lang/'

type THandleReturnLangMenu = {
  [key in TLangSupported]: TMenuHeaderItem[]
}

const handleReturnLangMenu: THandleReturnLangMenu = {
  [ES]: menuEsp,
  [EN]: menuEng,
  [DE]: menuDeu,
  [FR]: menuFra,
  [IT]: menuIta,
  [PT]: menuPor,
  [RU]: menuRus,
  [KR]: menuKor
}

export const dataMenuHeader = langSupported
  .map(({ code }) => ({ [code]: handleReturnLangMenu[code] }))
  .reduce((acc, cur) => ({ ...acc, ...cur }), {}) as TMenuHeader
