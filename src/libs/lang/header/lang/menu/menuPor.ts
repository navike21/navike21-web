import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TMenuHeaderItem } from '@Types/shared'

export const menuPor: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: 'Início',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: 'Sobre nós',
    path: '/sobre-nos'
  },
  {
    id: ID_PROJECTS,
    text: 'Nossos projetos',
    path: '/projetos'
  },
  {
    id: ID_SERVICES,
    text: 'Serviços',
    path: '/servicos'
  },
  {
    id: ID_CONTACT,
    text: 'Contate-nos',
    path: '/contato'
  }
]
