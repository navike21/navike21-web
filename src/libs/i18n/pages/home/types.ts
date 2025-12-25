import { type ILinkButtonProps } from '@Types/buttonProps'
import type { TIconName } from '@Types/icons'

export interface IHeroSection {
  id: EHeroSectionId
  title: string
  description: string
  controlActions: ILinkButtonProps[]
}

export interface IServicesSection {
  title: string
  description: string
  controlAction: ILinkButtonProps
}

export interface IMetricsSection {
  title: string
  description: string
}

export interface ITestimonialsSection {
  title: string
  description: string
}

export enum EHeroSectionId {
  PROJECTS_SLIDE = 'PROJECTS_SLIDE'
}

export type THeroSectionIcons = {
  [key in EHeroSectionId]: {
    firstControlIcon?: TIconName
    secondControlIcon?: TIconName
  }
}
