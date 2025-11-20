import { heroSectionIcons } from './constants'
import type { IHeroSection, IServicesSection } from './types'

export const formatHeroSection = (
  heroSection: IHeroSection[]
): IHeroSection[] =>
  heroSection.map(section => ({
    ...section,
    controlActions: section.controlActions.map((action, index) => {
      const baseAction = {
        ...action,
        icon:
          index === 0
            ? heroSectionIcons[section.id].firstControlIcon
            : heroSectionIcons[section.id].secondControlIcon
      }
      // Only add variant if it's the second action (index 1)
      return index === 1
        ? { ...baseAction, variant: 'secondary' as const }
        : baseAction
    })
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
