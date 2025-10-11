import { companyMetrics } from '@I18n/common/metrics'
import { servicesList } from '@I18n/common/services'
import { heroSection, metricsSection, servicesSection } from '@I18n/pages/home'

export const useHome = () => {
  const heroSectionCurrent = heroSection['es']
  const servicesSectionCurrent = servicesSection['es']
  const servicesListCurrent = servicesList['es']
  const metricsSectionCurrent = metricsSection['es']
  const companyMetricsCurrent = companyMetrics['es']

  return {
    heroSectionCurrent,
    servicesSectionCurrent,
    servicesListCurrent,
    metricsSectionCurrent,
    companyMetricsCurrent
  }
}
