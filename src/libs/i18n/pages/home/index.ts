import { ESP } from '@Constants/languages'
import {
  heroSectionEs,
  metricsSectionEs,
  servicesSectionEs,
  testimonialsEs
} from './locales/es'
import { formatHeroSection, formatServicesSection } from './utils'

export const heroSection = {
  [ESP]: formatHeroSection(heroSectionEs)
}

export const servicesSection = {
  [ESP]: formatServicesSection(servicesSectionEs)
}

export const metricsSection = {
  [ESP]: metricsSectionEs
}

export const testimonialsSection = {
  [ESP]: testimonialsEs
}
