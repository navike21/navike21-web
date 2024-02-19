import { DE, EN, ES, FR, IT, KR, PT, RU } from '@Constants/shared'
import { dataSeoHomeEsp } from './esp'
import { dataSeoHomeEng } from './eng'
import { dataSeoHomeDeu } from './deu'
import { dataSeoHomeFra } from './fra'
import { dataSeoHomeIta } from './it'
import { dataSeoHomePor } from './por'
import { dataSeoHomeRus } from './rus'
import { dataSeoHomeKor } from './kor'
import { TLangSupported } from '@Types/shared'
import { Metadata } from 'next'

type TSeoPages = {
  [key in TLangSupported]: Metadata
}

export const seoPages: TSeoPages = {
  [ES]: dataSeoHomeEsp,
  [EN]: dataSeoHomeEng,
  [DE]: dataSeoHomeDeu,
  [FR]: dataSeoHomeFra,
  [IT]: dataSeoHomeIta,
  [PT]: dataSeoHomePor,
  [RU]: dataSeoHomeRus,
  [KR]: dataSeoHomeKor
}
