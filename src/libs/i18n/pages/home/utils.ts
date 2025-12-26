import { heroSectionIcons } from './constants'
import type { HeroSection, ServicesSection } from './types'

export const formatHeroSection = (heroSection: HeroSection[]): HeroSection[] =>
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
  servicesSection: ServicesSection
): ServicesSection => {
  return {
    ...servicesSection,
    controlAction: {
      ...servicesSection.controlAction,
      icon: 'RiArrowRightLine'
    }
  }
}
