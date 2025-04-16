import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'Aplicaciones Móviles',
  descriptionLite:
    'Desarrollamos apps personalizadas para Android y iOS, pensadas para ofrecer experiencias fluidas y modernas.',
  path: `${servicesMenu.path}/aplicaciones-moviles`,
  slug: 'aplicaciones-moviles',
  pageSections: {
    metaTag: {
      title: `Desarrollo de Aplicaciones Móviles | ${COMPANY_NAME}`,
      description:
        'Creamos apps personalizadas para Android y iOS que combinan rendimiento, diseño moderno y excelente experiencia de usuario.',
      keywords: [
        'desarrollo de aplicaciones móviles',
        'apps personalizadas',
        'React Native',
        'Flutter',
        'aplicaciones Android',
        'aplicaciones iOS',
        'UX/UI móvil',
        'publicación App Store',
        'desarrollo multiplataforma'
      ],
      ogTitle: `Aplicaciones Móviles Personalizadas | ${COMPANY_NAME}`,
      ogDescription:
        'Transforma tu idea en una app funcional, moderna y escalable. Creamos aplicaciones móviles para Android y iOS con diseño y rendimiento excepcionales.',
      ogImage: coverImage,
      twitterTitle: `Aplicaciones Móviles Personalizadas | ${COMPANY_NAME}`,
      twitterDescription:
        'Creamos apps para Android y iOS enfocadas en experiencia de usuario, velocidad y calidad. Lanza tu aplicación con nosotros.',
      twitterImage: coverImage
    },

    hero: {
      title: 'Apps que Llevan tu Negocio al Bolsillo del Usuario',
      description:
        'Creamos aplicaciones móviles personalizadas que combinan rendimiento, diseño atractivo y una experiencia de usuario impecable.'
    },
    description: {
      title: 'Soluciones Móviles a la Medida',
      description:
        'Analizamos tu necesidad, diseñamos flujos efectivos y desarrollamos una app pensada en escalabilidad, usabilidad y eficiencia.',
      description2:
        'Desde aplicaciones para servicios internos hasta productos comerciales, te acompañamos en todo el proceso de idealización, diseño y desarrollo.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Diseño UX/UI Móvil',
          description:
            'Creamos la interfaz visual y la experiencia del usuario con foco en accesibilidad y simplicidad.'
        },
        {
          title: 'Desarrollo Nativo o Multiplataforma',
          description:
            'Seleccionamos la mejor tecnología según el proyecto: React Native, Flutter o desarrollo nativo si es necesario.'
        },
        {
          title: 'Integración con APIs y Backends',
          description:
            'Conectamos la app con tu sistema existente o creamos uno nuevo, integrando servicios en la nube, bases de datos o pasarelas.'
        },
        {
          title: 'Pruebas y Control de Calidad',
          description:
            'Realizamos testing funcional y de rendimiento para asegurar que la app se adapte a distintos dispositivos y escenarios.'
        },
        {
          title: 'Publicación en Tiendas',
          description:
            'Te guiamos o realizamos el proceso de subida y publicación de la app en Google Play Store y App Store.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Exploración y Análisis',
        description:
          'Identificamos los objetivos del proyecto, entendemos los flujos de negocio y proponemos una solución móvil adecuada.'
      },
      {
        title: 'Prototipado UX/UI',
        description:
          'Diseñamos una interfaz funcional y atractiva con enfoque mobile-first y validación constante.'
      },
      {
        title: 'Desarrollo de la Aplicación',
        description:
          'Programamos la app con tecnologías modernas, asegurando escalabilidad, velocidad y rendimiento.'
      },
      {
        title: 'Pruebas y Entrega',
        description:
          'Realizamos pruebas en distintos entornos, corregimos errores y te entregamos la app lista para su publicación.'
      }
    ],
    recentWorks: {
      title: 'Apps que Transforman Experiencias',
      description:
        'Hemos trabajado en soluciones móviles que conectan a usuarios con marcas, productos y servicios de manera eficaz.'
    },
    callToAction: {
      title: '¿Listo para Tener tu Propia App?',
      description:
        'Transforma tu idea en una aplicación funcional, rápida y moderna. Hablemos de lo que quieres construir.',
      textButton: 'Quiero mi app personalizada'
    }
  }
})
