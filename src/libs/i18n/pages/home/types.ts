import { type LinkButtonProps } from '@Types/buttonProps'
import type { IconName } from '@Types/icons'

export interface HeroSection {
  id: EHeroSectionId
  title: string
  description: string
  controlActions: LinkButtonProps[]
}

export interface ServicesSection {
  title: string
  description: string
  controlAction: LinkButtonProps
}

export interface MetricsSection {
  title: string
  description: string
}

export interface TestimonialsSection {
  title: string
  description: string
}

export enum EHeroSectionId {
  PROJECTS_SLIDE = 'PROJECTS_SLIDE'
}

export type HeroSectionIcons = {
  [key in EHeroSectionId]: {
    firstControlIcon?: IconName
    secondControlIcon?: IconName
  }
}
