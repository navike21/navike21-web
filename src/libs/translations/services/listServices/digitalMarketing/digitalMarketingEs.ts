import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'Marketing Digital',
  descriptionLite:
    'Impulsamos tu marca en el entorno digital con estrategias personalizadas, publicidad efectiva y una presencia sólida en redes sociales.',
  path: `${servicesMenu.path}/marketing-digital`,
  slug: 'marketing-digital',
  pageSections: {
    metaTag: {
      title: `Marketing Digital | Estrategias y Publicidad Online | ${COMPANY_NAME}`,
      description:
        'Impulsa tu marca con estrategias de marketing digital, campañas pagadas, redes sociales y contenido optimizado. Resultados medibles con navike21.',
      ogTitle: `Marketing Digital | Estrategias y Publicidad Online | ${COMPANY_NAME}`,
      ogDescription:
        'Potencia tu presencia online con campañas personalizadas, redes sociales y anuncios efectivos. Resultados reales con navike21.',
      ogImage: coverImage,
      twitterTitle: `Marketing Digital | Estrategias Online | ${COMPANY_NAME}`,
      twitterDescription:
        'Campañas digitales, redes sociales y publicidad online que generan resultados. Descubre lo que navike21 puede hacer por tu marca.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Estrategias Digitales que Generan Resultados',
      description:
        'Diseñamos y ejecutamos campañas digitales alineadas a los objetivos de tu negocio, optimizando tu visibilidad online y atrayendo a los clientes correctos.'
    },
    description: {
      title: 'Marketing Personalizado para tu Negocio',
      description:
        'Analizamos tu situación actual y creamos un plan estratégico de marketing digital que se adapta a tus metas, presupuesto y audiencia. Nos enfocamos en generar impacto real y medible.',
      description2:
        'Nos convertimos en aliados de tu crecimiento digital, supervisando constantemente las campañas y haciendo los ajustes necesarios para maximizar el retorno de inversión (ROI).'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Publicidad en Plataformas Digitales',
          description:
            'Gestionamos campañas pagadas en Google Ads, Meta Ads, TikTok Ads y más, optimizadas para atraer tráfico de calidad y generar conversiones.'
        },
        {
          title: 'Gestión de Redes Sociales',
          description:
            'Creamos estrategias de contenido y gestionamos tus cuentas para construir una comunidad fiel y potenciar tu presencia digital.'
        },
        {
          title: 'Creación de Contenido',
          description:
            'Diseñamos piezas gráficas y redactamos textos persuasivos que conectan con tu público objetivo en cada etapa del funnel.'
        },
        {
          title: 'Instalación de Píxeles y Herramientas de Medición',
          description:
            'Configuramos los píxeles de seguimiento de Facebook, TikTok, Google Ads y Adobe para una medición precisa del rendimiento de tus campañas.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Diagnóstico y Objetivos',
        description:
          'Evaluamos tu presencia actual y definimos metas claras de marketing digital en función de tu negocio.'
      },
      {
        title: 'Planificación Estratégica',
        description:
          'Creamos un plan de acción detallado que define las plataformas a usar, tipo de contenido, inversión y calendario de campañas.'
      },
      {
        title: 'Ejecución de Campañas',
        description:
          'Ponemos en marcha las campañas con una ejecución profesional, garantizando una adecuada segmentación y creatividad adaptada.'
      },
      {
        title: 'Medición y Optimización',
        description:
          'Monitorizamos los resultados y ajustamos en tiempo real para maximizar el rendimiento y alcanzar los objetivos establecidos.'
      }
    ],
    recentWorks: {
      title: 'Campañas que Marcan la Diferencia',
      description:
        'Descubre casos donde nuestras estrategias digitales han potenciado la presencia online de marcas en distintos sectores.'
    },
    callToAction: {
      title: '¿Listo para Impulsar tu Marca?',
      description:
        'Conversemos sobre tus metas y creemos juntos una estrategia de marketing digital que potencie tus resultados.',
      textButton: 'Quiero mejorar mi marketing'
    }
  }
})
