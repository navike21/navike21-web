import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TDataHeaderItem } from '@Types/shared'

export const menuFra: TDataHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Accueil',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'À propos',
    path: '/a-propos'
  },
  {
    id: ID_PROJECTS,
    text: 'Nos projets',
    path: '/projets'
  },
  {
    id: ID_SERVICES,
    text: 'Services',
    path: '/services'
  },
  {
    id: ID_CONTACT,
    text: 'Contactez-nous',
    path: '/contact'
  }
]
