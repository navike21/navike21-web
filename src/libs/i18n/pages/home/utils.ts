import { heroSectionIcons } from './constants'
import type { IHeroSection, IServicesSection } from './types'

export const formatHeroSection = (
  heroSection: IHeroSection[]
): IHeroSection[] =>
  heroSection.map(section => ({
    ...section,
    controlActions: section.controlActions.map((action, index) => ({
      ...action,
      icon:
        index === 0
          ? heroSectionIcons[section.id].firstControlIcon
          : heroSectionIcons[section.id].secondControlIcon,
      variant: index === 1 ? 'secondary' : undefined
    }))
  }))

export const formatServicesSection = (
  ServicesSection: IServicesSection
): IServicesSection => {
  return {
    ...ServicesSection,
    controlAction: {
      ...ServicesSection.controlAction,
      icon: 'RiArrowRightLine'
    }
  }
}
