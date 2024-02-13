import { TLangSupported } from '@Types/shared'
import { EN, ES, FR, DE, IT, PT, RU, KR } from './lang'

type TLangSupportedProps = {
  code: TLangSupported
  name: string
}

export const langSupported: TLangSupportedProps[] = [
  {
    code: EN,
    name: 'English'
  },
  {
    code: ES,
    name: 'Español'
  },
  {
    code: DE,
    name: 'Deutsch'
  },
  {
    code: FR,
    name: 'Français'
  },
  {
    code: IT,
    name: 'Italiano'
  },
  {
    code: PT,
    name: 'Português'
  },
  {
    code: RU,
    name: 'Русский'
  },
  {
    code: KR,
    name: '한국어'
  }
]
