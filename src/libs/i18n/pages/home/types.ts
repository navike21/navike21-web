import { ILinkButtonProps } from '@Types/buttonProps'

export interface IHeroSection {
  title: string
  description: string
  controlActions: ILinkButtonProps[]
}

export interface IServicesSection {
  title: string
  description: string
  controlAction: ILinkButtonProps
}
