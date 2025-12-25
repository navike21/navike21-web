import { ESP } from '@Constants/languages'
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
  const heroSectionCurrent = heroSection[ESP]
  const servicesSectionCurrent = servicesSection[ESP]
  const servicesListCurrent = servicesList[ESP]
  const metricsSectionCurrent = metricsSection[ESP]
  const companyMetricsCurrent = companyMetrics[ESP]
  const testimonialsSectionCurrent = testimonialsSection[ESP]
  const areThereTestimonials = testimonialsList[ESP].length > 0

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
