import { TSizes } from '@Types/types/common'

export type TVariation = 'primary' | 'white' | 'black'

export interface IIsoLogoProps {
  variation?: TVariation
}
export interface ILogoProps {
  variation?: TVariation
  size?: TSizes
  showSlogan?: boolean
  isIsoLogo?: boolean
}

export interface ILogoSizeProps {
  size?: TSizes
}
