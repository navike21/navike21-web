import { companyMetrics } from '@I18n/common/metrics'
import { servicesList } from '@I18n/common/services'
import { testimonialsList } from '@I18n/common/testimonials'
import {
  heroSection,
  metricsSection,
  servicesSection,
  testimonialsSection
} from '@I18n/pages/home'

export const useHome = () => {
  const heroSectionCurrent = heroSection['es']
  const servicesSectionCurrent = servicesSection['es']
  const servicesListCurrent = servicesList['es']
  const metricsSectionCurrent = metricsSection['es']
  const companyMetricsCurrent = companyMetrics['es']
  const testimonialsSectionCurrent = testimonialsSection['es']
  const areThereTestimonials = testimonialsList['es'].length > 0

  return {
    heroSectionCurrent,
    servicesSectionCurrent,
    servicesListCurrent,
    metricsSectionCurrent,
    companyMetricsCurrent,
    testimonialsSectionCurrent,
    areThereTestimonials
  }
}
