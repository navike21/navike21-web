import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'Optimización SEO',
  descriptionLite:
    'Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico de calidad.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `Optimización SEO | ${COMPANY_NAME}`,
      description:
        'Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico orgánico de calidad.',
      keywords: [
        'SEO',
        'optimización en motores de búsqueda',
        'posicionamiento web',
        'SEO técnico',
        'SEO on-page',
        'análisis de palabras clave',
        'SEO local',
        'reportes SEO'
      ],
      ogTitle: `Optimización SEO | ${COMPANY_NAME}`,
      ogDescription:
        'Mejoramos el posicionamiento de tu sitio web para que puedas aparecer en las primeras posiciones de los motores de búsqueda.',
      ogImage: coverImage,
      twitterTitle: `Optimización SEO | ${COMPANY_NAME}`,
      twitterDescription:
        'Aumenta tu visibilidad en línea y atrae más tráfico orgánico con nuestros servicios de SEO a medida.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Haz que te Encuentren Primero',
      description:
        'Optimizamos tu presencia en línea para que tus productos o servicios aparezcan en las primeras posiciones de búsqueda.'
    },
    description: {
      title: 'SEO Técnico y de Contenido',
      description:
        'Nos enfocamos en auditar y mejorar el rendimiento técnico de tu sitio, al mismo tiempo que optimizamos los contenidos con base en palabras clave relevantes.',
      description2:
        'Nuestro objetivo es aumentar el tráfico orgánico y mejorar el posicionamiento de tu marca en buscadores como Google.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Auditoría Técnica SEO',
          description:
            'Revisamos el estado técnico de tu sitio: velocidad, estructura, etiquetas, urls, redirecciones, indexación y más.'
        },
        {
          title: 'Optimización On-Page',
          description:
            'Mejoramos títulos, metadescripciones, estructura de encabezados y enlazado interno según buenas prácticas.'
        },
        {
          title: 'Análisis de Palabras Clave',
          description:
            'Identificamos las búsquedas más relevantes para tu negocio y las integramos en tu contenido de forma natural.'
        },
        {
          title: 'SEO Local (opcional)',
          description:
            'Si tu negocio es local, mejoramos tu presencia en mapas, directorios y resultados de búsqueda geolocalizados.'
        },
        {
          title: 'Monitoreo y Reportes',
          description:
            'Entregamos reportes con métricas clave como tráfico orgánico, posición de palabras clave y evolución del sitio.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnóstico Inicial',
        description:
          'Analizamos tu sitio y detectamos problemas técnicos, de contenido y oportunidades de mejora.'
      },
      {
        title: 'Estrategia SEO',
        description:
          'Diseñamos un plan enfocado en el tipo de negocio, mercado objetivo y búsquedas relevantes.'
      },
      {
        title: 'Optimización Continua',
        description:
          'Aplicamos las mejoras técnicas y de contenido, supervisando los resultados y ajustando la estrategia cuando sea necesario.'
      },
      {
        title: 'Entrega de Resultados',
        description:
          'Te mostramos la evolución del SEO a través de reportes claros, con enfoque en el retorno y crecimiento.'
      }
    ],
    recentWorks: {
      title: 'Proyectos con Posicionamiento Real',
      description:
        'Hemos ayudado a empresas a escalar en resultados de búsqueda y aumentar su tráfico sin depender únicamente de publicidad pagada.'
    },
    callToAction: {
      title: 'Haz que tu Web Trabaje por Ti',
      description:
        'Aumenta tu visibilidad en Google y atrae más clientes con una estrategia SEO hecha a medida.',
      textButton: 'Quiero posicionarme mejor'
    }
  }
})
