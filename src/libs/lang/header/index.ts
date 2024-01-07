import { DE, EN, ES, FR, IT, KR, PT, RU } from '@Constants/shared'
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

export const dataMenuHeader: TMenuHeader = {
  [ES]: menuEsp,
  [EN]: menuEng,
  [DE]: menuDeu,
  [FR]: menuFra,
  [IT]: menuIta,
  [PT]: menuPor,
  [RU]: menuRus,
  [KR]: menuKor
}
