import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TDataHeaderItem } from '@Types/shared'

export const menuEng: TDataHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Home',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'About us',
    path: '/about-us'
  },
  {
    id: ID_PROJECTS,
    text: 'Our Projects',
    path: '/projects'
  },
  {
    id: ID_SERVICES,
    text: 'Services',
    path: '/services'
  },
  {
    id: ID_CONTACT,
    text: 'Contact us',
    path: '/contact'
  }
]
