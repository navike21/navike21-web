import { DE, EN, ES, FR, IT, KR, PT, RU } from '@Constants/shared'
import { TDataHeader } from '@Types/shared'
import {
  menuDeu,
  menuEng,
  menuEsp,
  menuFra,
  menuIta,
  menuPor,
  menuRus
} from './lang'
import { menuKor } from './lang/menuKor'

export const dataHeader: TDataHeader = {
  [ES]: menuEsp,
  [EN]: menuEng,
  [DE]: menuDeu,
  [FR]: menuFra,
  [IT]: menuIta,
  [PT]: menuPor,
  [RU]: menuRus,
  [KR]: menuKor
}
