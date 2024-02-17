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
import { TMenuHeader } from '@Types/shared'
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

const handleReturnLangMenu = {
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
