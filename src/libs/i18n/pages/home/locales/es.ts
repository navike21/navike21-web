import { EPages, type IInformationPage } from '@Types/pages'
import {
  EHeroSectionId,
  type IHeroSection,
  type IMetricsSection,
  type IServicesSection,
  type ITestimonialsSection
} from '../types'

export const informationPageEs: IInformationPage = {
  id: EPages.HOME,
  name: 'Inicio',
  slug: '/'
}

export const heroSectionEs: IHeroSection[] = [
  {
    id: EHeroSectionId.PROJECTS_SLIDE,
    title: 'Transformamos tus ideas en realidad digital',
    description:
      'Somos expertos en desarrollo de software, diseño UX/UI y marketing digital. Creamos soluciones innovadoras que impulsan tu negocio al siguiente nivel.',
    controlActions: [
      {
        href: '/',
        children: 'Comenzar proyecto'
      },
      {
        href: '/',
        children: 'Ver portafolio'
      }
    ]
  }
]

export const servicesSectionEs: IServicesSection = {
  title: 'Nuestros Servicios',
  description:
    'Ofrecemos soluciones completas para todas tus necesidades digitales.',
  controlAction: {
    href: '/',
    children: 'Ver todos los servicios'
  }
}

export const metricsSectionEs: IMetricsSection = {
  title: 'Resultados que hablan por sí mismos',
  description:
    'Nuestra trayectoria está respaldada por números que demuestran nuestro compromiso con la excelencia y la satisfacción del cliente.'
}

export const testimonialsEs: ITestimonialsSection = {
  title: 'Lo que dicen nuestros clientes',
  description: 'La confianza de nuestros clientes es nuestro mayor logro.'
}
