import { Pages, type InformationPage } from '@Types/pages'
import {
  EHeroSectionId,
  type HeroSection,
  type MetricsSection,
  type ServicesSection,
  type TestimonialsSection
} from '../types'

export const informationPageEs: InformationPage = {
  id: Pages.HOME,
  name: 'Inicio',
  slug: '/'
}

export const heroSectionEs: HeroSection[] = [
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

export const servicesSectionEs: ServicesSection = {
  title: 'Nuestros Servicios',
  description:
    'Ofrecemos soluciones completas para todas tus necesidades digitales.',
  controlAction: {
    href: '/',
    children: 'Ver todos los servicios'
  }
}

export const metricsSectionEs: MetricsSection = {
  title: 'Resultados que hablan por sí mismos',
  description:
    'Nuestra trayectoria está respaldada por números que demuestran nuestro compromiso con la excelencia y la satisfacción del cliente.'
}

export const testimonialsEs: TestimonialsSection = {
  title: 'Lo que dicen nuestros clientes',
  description: 'La confianza de nuestros clientes es nuestro mayor logro.'
}
