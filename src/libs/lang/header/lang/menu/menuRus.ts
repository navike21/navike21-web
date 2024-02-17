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

export const menuRus: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Главная',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'О нас',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'Наши проекты',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Услуги',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Связаться с нами',
    path: CONTACT_PATH
  }
]
