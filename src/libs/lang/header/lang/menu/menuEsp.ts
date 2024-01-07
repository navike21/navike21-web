import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TMenuHeaderItem } from '@Types/shared'

export const menuEsp: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Inicio',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'Nosotros',
    path: '/nosotros'
  },
  {
    id: ID_PROJECTS,
    text: 'Proyectos',
    path: '/proyectos'
  },
  {
    id: ID_SERVICES,
    text: 'Servicios',
    path: '/servicios'
  },
  {
    id: ID_CONTACT,
    text: 'Contacto',
    path: '/contacto'
  }
]
