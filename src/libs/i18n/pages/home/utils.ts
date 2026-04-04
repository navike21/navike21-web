import { heroSectionIcons } from './constants'
import type { HeroSection, ServicesSection } from './types'

export const formatHeroSection = (heroSection: HeroSection[]): HeroSection[] =>
  heroSection.map(section => ({
    ...section,
    controlActions: section.controlActions.map((action, index) => {
      const iconKey = index === 0 ? 'firstControlIcon' : 'secondControlIcon'
      const icon = heroSectionIcons[section.id][iconKey]

      const baseAction = {
        ...action,
        ...(icon && { icon })
      }

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
      ...servicesSection.controlAction
    }
  }
}
