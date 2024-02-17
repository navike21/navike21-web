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

export const menuDeu: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Startseite',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'Über uns',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'Unsere Projekte',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Dienstleistungen',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Kontaktiere uns',
    path: CONTACT_PATH
  }
]
