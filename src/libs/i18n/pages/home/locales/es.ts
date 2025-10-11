import { IHeroSection, IMetricsSection, IServicesSection } from '../types'

export const heroSectionEs: IHeroSection[] = [
  {
    title: 'Transformamos tus ideas en realidad digital',
    description:
      'Somos expertos en desarrollo de software, diseño UX/UI y marketing digital. Creamos soluciones innovadoras que impulsan tu negocio al siguiente nivel.',
    controlActions: [
      {
        href: '/',
        icon: 'RiArrowRightLine',
        children: 'Comenzar proyecto'
      },
      {
        href: '/',
        icon: 'RiBriefcase3Fill',
        variant: 'secondary',
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
    icon: 'RiArrowRightLine',
    children: 'Ver todos los servicios'
  }
}

export const metricsSectionEs: IMetricsSection = {
  title: 'Resultados que hablan por sí mismos',
  description:
    'Nuestra trayectoria está respaldada por números que demuestran nuestro compromiso con la excelencia y la satisfacción del cliente.'
}
