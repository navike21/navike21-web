import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TMenuHeaderItem } from '@Types/shared'

export const menuDeu: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Startseite',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'Über uns',
    path: '/uber-us'
  },
  {
    id: ID_PROJECTS,
    text: 'Unsere Projekte',
    path: '/projekte'
  },
  {
    id: ID_SERVICES,
    text: 'Dienstleistungen',
    path: '/dienstleistungen'
  },
  {
    id: ID_CONTACT,
    text: 'Kontaktiere uns',
    path: '/kontakt'
  }
]
