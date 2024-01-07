import {
  ID_HOME,
  ID_ABOUT,
  ID_PROJECTS,
  ID_SERVICES,
  ID_CONTACT
} from '@Constants/shared'
import { TMenuHeaderItem } from '@Types/shared'

export const menuKor: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: '홈',
    path: '/'
  },
  {
    id: ID_ABOUT,
    text: '회사 소개',
    path: '/about'
  },
  {
    id: ID_PROJECTS,
    text: '프로젝트',
    path: '/projects'
  },
  {
    id: ID_SERVICES,
    text: '서비스',
    path: '/services'
  },
  {
    id: ID_CONTACT,
    text: '연락처',
    path: '/contact'
  }
]
