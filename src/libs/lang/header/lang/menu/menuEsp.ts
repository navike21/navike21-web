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

export const menuEsp: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Inicio',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'Nosotros',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'Proyectos',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Servicios',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Contacto',
    path: CONTACT_PATH
  }
]
