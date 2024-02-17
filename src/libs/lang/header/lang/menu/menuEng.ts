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

export const menuEng: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Home',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'About us',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'Our Projects',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Services',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Contact us',
    path: CONTACT_PATH
  }
]
