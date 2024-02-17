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

export const menuPor: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Início',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: 'Sobre nós',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: 'Nossos projetos',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: 'Serviços',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: 'Contate-nos',
    path: CONTACT_PATH
  }
]
