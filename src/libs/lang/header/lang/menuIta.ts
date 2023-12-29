import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TDataHeaderItem } from '@Types/shared'

export const menuIta: TDataHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Inizio',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'Chi siamo',
    path: '/chi-siamo'
  },
  {
    id: ID_PROJECTS,
    text: 'I nostri progetti',
    path: '/progetti'
  },
  {
    id: ID_SERVICES,
    text: 'Servizi',
    path: '/servizi'
  },
  {
    id: ID_CONTACT,
    text: 'Contattaci',
    path: '/contatti'
  }
]
