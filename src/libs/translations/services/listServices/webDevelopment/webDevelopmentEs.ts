import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'Desarrollo Web',
  descriptionLite:
    'Creamos sitios web modernos, seguros y de alto rendimiento, diseñados para destacar, atraer y convertir en un entorno digital altamente competitivo.',
  path: `${servicesMenu.path}/desarrollo-web`,
  slug: 'desarrollo-web',
  pageSections: {
    metaTag: {
      title: `Desarrollo Web | ${COMPANY_NAME}`,
      description:
        'Creamos sitios web adaptados a tus necesidades, con un enfoque en rendimiento, seguridad y usabilidad para destacar en el entorno digital.',
      keywords: [
        'desarrollo web',
        'sitios web',
        'páginas web',
        'web responsiva',
        'desarrollo a medida',
        'optimización web',
        'diseño web adaptativo',
        'tecnología web moderna'
      ],
      ogTitle: `Desarrollo Web | ${COMPANY_NAME}`,
      ogDescription:
        'Impulsa tu presencia online con sitios web optimizados y diseñados para la experiencia de usuario, con un alto rendimiento y accesibilidad.',
      ogImage: coverImage,
      twitterTitle: `Desarrollo Web | ${COMPANY_NAME}`,
      twitterDescription:
        'Desarrollamos sitios web de alto rendimiento que mejoran la experiencia de usuario y maximizan el impacto digital de tu negocio.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Desarrollo Web Profesional',
      description:
        'Impulsa tu presencia online con sitios web a medida, diseñados para la velocidad, seguridad y rendimiento, empleando las últimas tendencias y tecnologías del desarrollo web moderno.'
    },
    description: {
      title: 'Soluciones Web Adaptadas a tu Negocio',
      description:
        'Desde la definición de requerimientos hasta el despliegue final, creamos experiencias web intuitivas, robustas y escalables. Utilizamos metodologías ágiles y herramientas modernas para que tu proyecto tenga una base sólida desde el inicio.',
      description2:
        'Nuestro enfoque se basa en la excelencia técnica, la accesibilidad y la eficiencia. Ya sea una landing page o un sistema web complejo, aseguramos que tu sitio funcione de forma impecable y esté preparado para crecer junto a tu negocio.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Sitios Web de Alto Rendimiento',
          description:
            'Optimizamos cada aspecto técnico para lograr tiempos de carga mínimos, buena experiencia de usuario y resultados sólidos desde cualquier dispositivo.'
        },
        {
          title: 'Diseño Adaptativo',
          description:
            'Tu sitio se verá perfecto en pantallas de cualquier tamaño, garantizando una experiencia coherente desde computadoras hasta dispositivos móviles.'
        },
        {
          title: 'Optimización de Recursos',
          description:
            'Reducimos el peso de imágenes y archivos con técnicas de compresión avanzada, sin comprometer la calidad visual ni la funcionalidad.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Planificación Estratégica',
        description:
          'Definimos contigo los objetivos del proyecto, las funcionalidades clave y una hoja de ruta clara para el desarrollo.'
      },
      {
        title: 'Diseño y Prototipado',
        description:
          'Generamos wireframes o prototipos funcionales que sirven como guía visual para estructurar el desarrollo y validar ideas antes de codificar.'
      },
      {
        title: 'Desarrollo y Validación',
        description:
          'Implementamos el sitio utilizando herramientas modernas y realizamos pruebas exhaustivas para asegurar rendimiento, compatibilidad y estabilidad.'
      },
      {
        title: 'Despliegue y Soporte',
        description:
          'Publicamos tu sitio en el entorno productivo y, si lo deseas, ofrecemos un plan de soporte mensual para mantenerlo actualizado, seguro y funcional.'
      }
    ],
    recentWorks: {
      title: 'Proyectos Realizados',
      description:
        'Conoce algunos proyectos recientes que muestran cómo combinamos estrategia, tecnología y ejecución para entregar resultados web sobresalientes.'
    },
    callToAction: {
      title: '¿Listo para Desarrollar tu Próximo Proyecto Web?',
      description:
        'Conversemos sobre tus necesidades y descubre cómo podemos ayudarte a construir una solución web efectiva, escalable y adaptada a tu negocio.',
      textButton: 'Hablemos de tu proyecto'
    }
  }
})
