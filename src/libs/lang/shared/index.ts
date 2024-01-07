import { DE, EN, ES, FR, IT, KR, PT, RU } from '@Constants/shared'
import { TActionsLang } from '@Types/shared'
import {
  actionsEsp,
  actionsEng,
  actionsDeu,
  actionsFra,
  actionsIta,
  actionsPor,
  actionsRus,
  actionsKor
} from './lang/'

export const dataActions: TActionsLang = {
  [ES]: actionsEsp,
  [EN]: actionsEng,
  [DE]: actionsDeu,
  [FR]: actionsFra,
  [IT]: actionsIta,
  [PT]: actionsPor,
  [RU]: actionsRus,
  [KR]: actionsKor
}
