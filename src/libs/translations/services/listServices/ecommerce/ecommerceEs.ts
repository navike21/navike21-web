import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'Ecommerce',
  descriptionLite:
    'Creamos tiendas online personalizadas, optimizadas para la conversión y adaptadas a las necesidades de tu negocio, integrando soluciones de pago, envío y gestión de inventarios.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `Ecommerce | Tiendas Online Personalizadas | ${COMPANY_NAME}`,
      description:
        'Desarrollamos tiendas online a medida con diseño atractivo, funcionalidades completas y enfoque en la conversión. Soluciones con WooCommerce o desarrollo personalizado.',
      ogTitle: `Ecommerce | Tiendas Online Personalizadas | ${COMPANY_NAME}`,
      ogDescription:
        'Impulsa tus ventas con una tienda online adaptada a tu negocio. Desde WooCommerce hasta soluciones personalizadas, construimos ecommerce que venden.',
      ogImage: coverImage,
      twitterTitle: `Ecommerce | Tiendas Online | ${COMPANY_NAME}`,
      twitterDescription:
        'Tiendas online diseñadas para escalar. Personalizadas, funcionales y centradas en la conversión. Trabaja tu ecommerce con navike21.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Ecommerce Personalizado',
      description:
        'Desarrollamos tiendas online a medida, con un diseño atractivo, fácil de usar y optimizado para maximizar las ventas. Integramos todas las funcionalidades necesarias para que tu ecommerce crezca.'
    },
    description: {
      title: 'Soluciones Ecommerce para Tu Negocio',
      description:
        'Desde la creación de la tienda online hasta su mantenimiento y optimización, brindamos un enfoque integral que cubre todos los aspectos del ecommerce. Nos aseguramos de que tu tienda sea fácil de administrar y escalable a medida que tu negocio crece.',
      description2:
        'Ofrecemos dos tipos de desarrollo para tu ecommerce: uno predefinido utilizando **WordPress y WooCommerce** y otro completamente **personalizado desde cero**. En el caso de optar por un desarrollo personalizado, te recomendamos un perfil técnico adecuado, ya que este enfoque brinda mayor escalabilidad y flexibilidad en el largo plazo.'
    },
    features: {
      title: '¿Qué Incluye Nuestro Servicio?',
      items: [
        {
          title: 'Diseño y Desarrollo Personalizado de Tiendas Online',
          description:
            'Creamos tiendas online únicas y a medida, con un diseño atractivo, fácil de navegar y optimizado para conversiones, basados en las necesidades y objetivos de tu negocio.'
        },
        {
          title: 'Gestión de Inventarios y Productos',
          description:
            'Desarrollamos sistemas de gestión de inventarios intuitivos, fáciles de usar y con capacidad para escalar, permitiendo a los usuarios gestionar productos, precios, stock y promociones de manera sencilla.'
        },
        {
          title: 'Integración de Pixeles de Facebook, Google Ads y TikTok',
          description:
            'Integramos los píxeles de seguimiento necesarios para campañas publicitarias en plataformas como Facebook, Google Ads y TikTok, lo que te permitirá medir y optimizar tus esfuerzos de marketing.'
        },
        {
          title: 'Mantenimiento y Actualización (Servicio Adicional)',
          description:
            'El mantenimiento continuo y las actualizaciones de la tienda, como la adición de nuevas funcionalidades, la actualización de la base de datos y la seguridad del sistema, se ofrecen como un servicio adicional.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Definición de Requerimientos del Ecommerce',
        description:
          'Comenzamos con una consulta detallada para entender los objetivos de negocio, los productos, los clientes y las expectativas del ecommerce. Definimos los flujos de compra, los pagos y las funcionalidades necesarias.'
      },
      {
        title: 'Diseño y Prototipado de la Tienda',
        description:
          'Creamos un diseño visual de la tienda online, adaptado a tu marca y optimizado para la experiencia del usuario. Validamos estos diseños con prototipos interactivos antes de comenzar el desarrollo.'
      },
      {
        title: 'Desarrollo de la Tienda Online',
        description:
          'Desarrollamos la tienda utilizando las mejores plataformas de ecommerce (Wordpress con WooCommerce) o, si prefieres un desarrollo más flexible, te proponemos una solución personalizada desde cero, siempre con un perfil técnico adecuado.'
      },
      {
        title: 'Pruebas y QA de la Tienda Online',
        description:
          'Realizamos pruebas exhaustivas en la tienda online para asegurar que todas las funcionalidades (carrito de compras, pasarela de pago, gestión de productos) funcionen perfectamente antes de lanzarla.'
      },
      {
        title: 'Despliegue de la Tienda Online',
        description:
          'Desplegamos la tienda online en un servidor seguro y aseguramos su rendimiento óptimo en diferentes dispositivos, garantizando un diseño responsive y una experiencia fluida en desktop y móviles.'
      },
      {
        title: 'Capacitación y Transferencia de Conocimiento',
        description:
          'Capacitamos al equipo del cliente para gestionar productos, realizar promociones, gestionar inventarios y mantener la tienda online sin depender de un equipo técnico.'
      },
      {
        title: 'Soporte y Mantenimiento Continuo (Servicio Adicional)',
        description:
          'Ofrecemos soporte técnico y mantenimiento adicional como un servicio separado, que incluye actualizaciones de software, gestión de inventarios, y optimización continua del ecommerce.'
      }
    ],
    recentWorks: {
      title: 'Proyectos Realizados',
      description:
        'Conoce algunos proyectos recientes que muestran cómo combinamos estrategia, tecnología y ejecución para entregar resultados ecommerce sobresalientes.'
    },
    callToAction: {
      title: '¿Listo para Crear tu Tienda Online?',
      description:
        'Vamos a hablar sobre cómo podemos ayudarte a construir un ecommerce eficiente, escalable y optimizado para convertir visitantes en clientes.',
      textButton: 'Comienza tu tienda online'
    }
  }
})
