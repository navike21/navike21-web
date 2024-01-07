import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TMenuHeaderItem } from '@Types/shared'

export const menuRus: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Главная',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'О нас',
    path: '/o-nas'
  },
  {
    id: ID_PROJECTS,
    text: 'Наши проекты',
    path: '/proekty'
  },
  {
    id: ID_SERVICES,
    text: 'Услуги',
    path: '/uslugi'
  },
  {
    id: ID_CONTACT,
    text: 'Связаться с нами',
    path: '/kontakt'
  }
]
