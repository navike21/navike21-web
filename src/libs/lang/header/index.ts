import { DEU, ENG, ESP, FRA, ITA, KOR, POR, RUS } from '@Constants/shared'
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
  [ESP]: menuEsp,
  [ENG]: menuEng,
  [DEU]: menuDeu,
  [FRA]: menuFra,
  [ITA]: menuIta,
  [POR]: menuPor,
  [RUS]: menuRus,
  [KOR]: menuKor
}
