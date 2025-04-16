import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'Software a Medida',
  descriptionLite:
    'Desarrollamos soluciones de software personalizadas que se ajustan a las necesidades únicas de tu negocio, mejorando la eficiencia y la competitividad.',
  path: `${servicesMenu.path}/software-a-medida`,
  slug: 'software-a-medida',
  pageSections: {
    metaTag: {
      title: `Desarrollo de Software a Medida | ${COMPANY_NAME}`,
      description:
        'Creamos software personalizado que se adapta exactamente a las necesidades de tu empresa, mejorando procesos, escalabilidad y competitividad.',
      keywords: [
        'software a medida',
        'desarrollo personalizado',
        'soluciones empresariales',
        'aplicaciones personalizadas',
        'software empresarial',
        'desarrollo de software',
        'sistemas a medida',
        'desarrollo a medida'
      ],
      ogTitle: `Desarrollo de Software a Medida | ${COMPANY_NAME}`,
      ogDescription:
        'Creamos software personalizado adaptado a tu empresa para mejorar procesos y escalar con eficiencia.',
      ogImage: coverImage,
      twitterTitle: `Software a Medida para Empresas | ${COMPANY_NAME}`,
      twitterDescription:
        'Soluciones tecnológicas que se adaptan a tus procesos y escalan contigo.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Soluciones de Software a Medida',
      description:
        'Desarrollamos software a medida para optimizar los procesos de tu empresa, adaptándonos completamente a tus necesidades específicas y brindando soluciones escalables y seguras.'
    },
    description: {
      title: 'Software Personalizado para tu Negocio',
      description:
        'Ya sea una aplicación de escritorio, móvil o una solución empresarial completa, creamos software que optimiza tus operaciones, se integra con tus sistemas y aporta valor inmediato a tu empresa.',
      description2:
        'Nuestro enfoque ágil y flexible nos permite entregar productos de software eficientes y fáciles de mantener, garantizando que tus soluciones tecnológicas estén siempre alineadas con la visión de tu negocio.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Arquitectura a Medida',
          description:
            'Diseñamos la arquitectura del software pensando en la escalabilidad, la seguridad y el rendimiento a largo plazo, adaptada a las necesidades específicas de tu negocio.'
        },
        {
          title: 'Desarrollo Full Stack',
          description:
            'Contamos con equipos especializados en frontend, backend y desarrollo móvil, trabajando con tecnologías como React, Node.js, .NET, Java, Python, y más para ofrecer soluciones completas.'
        },
        {
          title: 'Integración y APIs',
          description:
            'Creamos integraciones robustas entre sistemas y servicios mediante APIs, permitiendo que tu software interactúe de manera eficiente con otras plataformas y aplicaciones.'
        },
        {
          title: 'Pruebas y QA',
          description:
            'Nuestro equipo de QA realiza pruebas exhaustivas de funcionalidad, rendimiento y seguridad, asegurando que cada componente del software cumpla con los más altos estándares de calidad.'
        },
        {
          title: 'Tecnologías en la Nube',
          description:
            'Utilizamos plataformas de la nube como AWS, Azure y Google Cloud para garantizar la disponibilidad, escalabilidad y seguridad de tu aplicación, optimizando recursos y costos.'
        },
        {
          title: 'Metodología Ágil',
          description:
            'Adoptamos metodologías ágiles como Scrum, con un Scrum Master que facilita el proceso de desarrollo, asegurando la entrega de valor continuo y la alineación con los objetivos del negocio.'
        },
        {
          title: 'Capacitación Personalizada',
          description:
            'Incluimos una capacitación completa para el equipo del cliente, asegurando que puedan utilizar el software de manera efectiva, entender su funcionamiento y tener el conocimiento necesario para realizar tareas básicas de mantenimiento.'
        },
        {
          title: 'Soporte Post-Proyecto (Servicio Adicional)',
          description:
            'El soporte post-lanzamiento no está incluido en el alcance estándar del proyecto y se ofrece como un servicio adicional. Esto cubre soporte técnico continuo, actualizaciones y optimización del software según sea necesario.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Definición de Requerimientos',
        description:
          'Trabajamos contigo para entender las necesidades de tu negocio y definir claramente los objetivos del software, involucrando a todos los stakeholders en la planificación.'
      },
      {
        title: 'Arquitectura y Diseño del Sistema',
        description:
          'Nuestro equipo de arquitectos define la arquitectura técnica, eligiendo las mejores tecnologías y herramientas para crear una solución escalable y eficiente, tomando en cuenta los requerimientos de seguridad y rendimiento.'
      },
      {
        title: 'Desarrollo de Frontend y Backend',
        description:
          'Nuestros desarrolladores frontend y backend colaboran en la creación de la aplicación, con un enfoque integral en el diseño de interfaces de usuario intuitivas y el desarrollo de servidores robustos y escalables.'
      },
      {
        title: 'Integración y Pruebas Continuas',
        description:
          'Implementamos integraciones continuas y pruebas automáticas para garantizar que cada parte del sistema funcione de manera perfecta desde el primer momento. La calidad es nuestro enfoque principal.'
      },
      {
        title: 'Despliegue y Monitoreo',
        description:
          'Desplegamos el software en entornos de producción utilizando herramientas en la nube (AWS, Azure, Google Cloud) y mantenemos un monitoreo constante para asegurar la estabilidad y el rendimiento.'
      },
      {
        title: 'Capacitación y Transferencia de Conocimiento',
        description:
          'Proporcionamos una capacitación detallada al equipo del cliente para asegurar que puedan operar, administrar y hacer el mantenimiento básico del software de manera autónoma.'
      },
      {
        title: 'Soporte y Mantenimiento Continuo (Servicio Adicional)',
        description:
          'El soporte post-lanzamiento está disponible como un servicio adicional. Este incluye actualizaciones, corrección de errores, optimización de rendimiento, y mejoras funcionales según las necesidades del negocio. El servicio de soporte es opcional y se puede contratar de acuerdo a los requerimientos del cliente.'
      }
    ],
    recentWorks: {
      title: 'Proyectos Recientes',
      description:
        'Mira algunos de los proyectos de software que hemos creado para empresas de diversos sectores, destacando por su innovación y efectividad.'
    },
    callToAction: {
      title: '¿Necesitas una Solución de Software a Medida?',
      description:
        'Si buscas una solución tecnológica que se ajuste exactamente a las necesidades de tu empresa, ¡conversemos y construyamos la herramienta perfecta para ti!',
      textButton: 'Solicita una Consulta'
    }
  }
})
