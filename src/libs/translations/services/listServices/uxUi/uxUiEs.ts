import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'Diseño UX/UI',
  descriptionLite:
    'Transformamos la experiencia de tus usuarios a través de interfaces atractivas, funcionales y sencillas de usar, enfocándonos en simplificar los flujos y mejorar la interacción.',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `Diseño UX/UI | ${COMPANY_NAME}`,
      description:
        'Transformamos la experiencia de tus usuarios con interfaces atractivas y funcionales, simplificando flujos y mejorando la interacción.',
      keywords: [
        'diseño UX',
        'diseño UI',
        'experiencia de usuario',
        'interfaz de usuario',
        'prototipos interactivos',
        'diseño web',
        'diseño responsive',
        'optimización UX/UI'
      ],
      ogTitle: `Diseño UX/UI | ${COMPANY_NAME}`,
      ogDescription:
        'Mejora la experiencia de tus usuarios con un diseño UX/UI atractivo y funcional que optimiza la interacción con tu producto.',
      ogImage: coverImage,
      twitterTitle: `Diseño UX/UI | ${COMPANY_NAME}`,
      twitterDescription:
        'Transforma la interacción con tu producto mediante un diseño UX/UI centrado en la simplicidad y la eficacia.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Diseño UX/UI Creativo',
      description:
        'Creamos soluciones de diseño que mejoran la experiencia de tus usuarios, simplificando los flujos y optimizando la interacción con tu producto o servicio.'
    },
    description: {
      title: 'Soluciones UX/UI a Medida',
      description:
        'Enfocados en la comprensión profunda de tus flujos de negocio, proponemos soluciones UX/UI que transforman la interacción de tus usuarios con el producto, simplificando cada paso y mejorando la experiencia general.',
      description2:
        'Desde la concepción hasta el diseño final, nuestro enfoque se centra en crear experiencias claras, intuitivas y accesibles para el usuario final, alineadas con tus objetivos de negocio.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Investigación y Análisis de Flujos',
          description:
            'Estudiamos los flujos actuales de tu negocio, identificando puntos de mejora y áreas de oportunidad para simplificar la experiencia del usuario.'
        },
        {
          title: 'Diseño de Interfaces Funcionales',
          description:
            'Creación de interfaces visualmente atractivas, que reflejan la identidad de tu marca y aseguran una navegación fluida y sin fricciones.'
        },
        {
          title: 'Prototipos Interactivos',
          description:
            'Diseñamos prototipos interactivos para validar las soluciones propuestas antes de su implementación, asegurando que el flujo sea eficiente y fácil de usar.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Investigación y Comprensión del Negocio',
        description:
          'Nos sumergimos en tu negocio para entender los objetivos y flujos actuales, buscando cómo optimizar la experiencia del usuario sin perder la esencia de tu producto.'
      },
      {
        title: 'Análisis de Flujos y Propuesta de Soluciones UX',
        description:
          'Evaluamos los flujos de trabajo y proponemos soluciones UX que faciliten la navegación, eliminando barreras y maximizando la eficiencia en cada interacción.'
      },
      {
        title: 'Diseño Visual y Prototipos',
        description:
          'Creamos diseños visuales alineados con la identidad de tu marca y desarrollamos prototipos interactivos para probar y ajustar el flujo antes de la implementación.'
      },
      {
        title: 'Validación y Refinamiento',
        description:
          'Realizamos sesiones de validación con los usuarios para asegurar que el diseño propuesto sea intuitivo y cumpla con las expectativas, refinando los detalles según los comentarios recibidos.'
      }
    ],
    recentWorks: {
      title: 'Proyectos Recientes',
      description:
        'Conoce algunos de los proyectos en los que hemos trabajado, mejorando la experiencia de usuario a través de un diseño enfocado en la simplicidad y eficacia de los flujos.'
    },
    callToAction: {
      title: '¿Listo para Transformar la Experiencia de tus Usuarios?',
      description:
        'Permítenos ayudarte a crear una experiencia de usuario que simplifique tus procesos y mejore la interacción con tu producto. Hablemos sobre cómo podemos trabajar juntos en tu próximo proyecto de diseño UX/UI.',
      textButton: 'Comencemos tu Proyecto UX/UI'
    }
  }
})
