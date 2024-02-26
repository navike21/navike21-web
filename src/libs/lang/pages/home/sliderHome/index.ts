import { DE, EN, ES, FR, IT, KR, PT, RU } from '@Constants/shared'
import { slideHomeEsp } from './esp'
import { slideHomeDeu } from './deu'
import { ReactNode } from 'react'
import { TLangSupported } from '@Types/shared'
import { slideHomeEng } from './eng'
import { slideHomeFra } from './fra'
import { slideHomeIta } from './ita'
import { slideHomeKor } from './kor'
import { slideHomePor } from './por'
import { slideHomeRus } from './rus'

export type TSlideHome = {
  title: ReactNode | string
}

type TSlideHomeLang = {
  [key in TLangSupported]: TSlideHome[]
}

export const sliderHome: TSlideHomeLang = {
  [ES]: slideHomeEsp,
  [DE]: slideHomeDeu,
  [EN]: slideHomeEng,
  [FR]: slideHomeFra,
  [IT]: slideHomeIta,
  [KR]: slideHomeKor,
  [PT]: slideHomePor,
  [RU]: slideHomeRus
}
