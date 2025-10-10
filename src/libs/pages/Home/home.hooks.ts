import { servicesList } from '@I18n/common/services'
import { heroSection, servicesSection } from '@I18n/pages/home'

export const useHome = () => {
  const heroSectionCurrent = heroSection['es']
  const servicesSectionCurrent = servicesSection['es']
  const servicesListCurrent = servicesList['es']

  return {
    heroSectionCurrent,
    servicesSectionCurrent,
    servicesListCurrent
  }
}
