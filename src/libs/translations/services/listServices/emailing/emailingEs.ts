import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'Email Marketing',
  descriptionLite:
    'Conecta con tus clientes de manera directa y efectiva a través de campañas personalizadas por correo electrónico.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `Email Marketing | Campañas Efectivas | ${COMPANY_NAME}`,
      description:
        'Diseñamos y desarrollamos campañas de email marketing personalizadas con HTML responsive, automatización y segmentación precisa para maximizar resultados.',
      ogTitle: `Email Marketing | Campañas Efectivas | ${COMPANY_NAME}`,
      ogDescription:
        'Impulsa tu comunicación con campañas de email bien diseñadas, automatizadas y segmentadas para conectar con tu audiencia en el momento justo.',
      ogImage: coverImage,
      twitterTitle: `Email Marketing | Estrategias Personalizadas | ${COMPANY_NAME}`,
      twitterDescription:
        'Crea campañas de email marketing que conviertan: diseño visual, desarrollo HTML responsive, automatización y segmentación inteligente.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Campañas de Email que Conectan y Convencen',
      description:
        'Creamos estrategias de email marketing con diseños impactantes y segmentación precisa para mejorar tu comunicación y fidelización.'
    },
    description: {
      title: 'Mensajes que Llegan, Diseños que Impactan',
      description:
        'Nos encargamos del diseño y desarrollo del HTML para tus campañas, garantizando compatibilidad en todos los dispositivos y clientes de correo.',
      description2:
        'Además, implementamos estrategias automatizadas y segmentadas usando plataformas como Mailchimp, asegurando que cada mensaje llegue al público adecuado en el momento justo.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Diseño y Maquetación de Emails',
          description:
            'Diseñamos piezas visuales alineadas a tu marca y las desarrollamos en HTML optimizado para todos los dispositivos y gestores de correo.'
        },
        {
          title: 'Configuración de Plataformas',
          description:
            'Implementamos y configuramos herramientas como Mailchimp, para centralizar tus campañas y audiencias.'
        },
        {
          title: 'Automatización de Flujos',
          description:
            'Creamos flujos automatizados como emails de bienvenida, carritos abandonados o newsletters recurrentes para mantener el contacto con tu audiencia.'
        },
        {
          title: 'Segmentación de Audiencias',
          description:
            'Segmentamos tus listas de contactos en base a comportamiento, intereses o datos demográficos para mejorar la tasa de apertura y conversión.'
        },
        {
          title: 'Medición y Reportes',
          description:
            'Analizamos el rendimiento de cada campaña (aperturas, clics, conversiones) para optimizar futuros envíos.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Brief de Comunicación',
        description:
          'Definimos objetivos, tono, frecuencia y tipo de contenido a enviar según tu estrategia comercial.'
      },
      {
        title: 'Diseño y Desarrollo del Email',
        description:
          'Creamos el diseño visual y lo desarrollamos en HTML responsive para asegurar una visualización correcta.'
      },
      {
        title: 'Implementación en Mailchimp',
        description:
          'Subimos y configuramos la campaña, segmentamos la audiencia y dejamos listo el envío o automatización.'
      },
      {
        title: 'Envío, Medición y Optimización',
        description:
          'Lanzamos la campaña, medimos los resultados y hacemos mejoras continuas para aumentar su efectividad.'
      }
    ],
    recentWorks: {
      title: 'Campañas de Alto Impacto',
      description:
        'Explora algunos de nuestros diseños de email marketing que han logrado altas tasas de apertura y conversión.'
    },
    callToAction: {
      title: '¿Quieres Comunicarte Mejor con tu Audiencia?',
      description:
        'Creamos emails visuales, funcionales y con resultados. Empecemos tu próxima campaña de Email Marketing hoy.',
      textButton: 'Quiero una campaña efectiva'
    }
  }
})
