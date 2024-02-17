import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT,
  HOME_PATH,
  ABOUT_PATH,
  PROJECTS_PATH,
  SERVICES_PATH,
  CONTACT_PATH
} from '@Constants/shared'
import { TMenuHeaderItem } from '@Types/shared'

export const menuIta: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Inizio',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'Chi siamo',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'I nostri progetti',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Servizi',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Contattaci',
    path: CONTACT_PATH
  }
]
