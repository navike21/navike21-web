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

export const menuFra: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Accueil',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'À propos',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'Nos projets',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Services',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Contactez-nous',
    path: CONTACT_PATH
  }
]
