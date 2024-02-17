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

export const menuKor: TMenuHeaderItem[] = [
  {
    id: ID_HOME,
    text: '홈',
    path: HOME_PATH
  },
  {
    id: ID_ABOUT,
    text: '회사 소개',
    path: ABOUT_PATH
  },
  {
    id: ID_PROJECTS,
    text: '프로젝트',
    path: PROJECTS_PATH
  },
  {
    id: ID_SERVICES,
    text: '서비스',
    path: SERVICES_PATH
  },
  {
    id: ID_CONTACT,
    text: '연락처',
    path: CONTACT_PATH
  }
]
