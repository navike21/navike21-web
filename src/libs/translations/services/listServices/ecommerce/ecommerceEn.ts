import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'Ecommerce',
  descriptionLite:
    'We create custom online stores optimized for conversion and tailored to your business needs, integrating payment, shipping, and inventory management solutions.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `Ecommerce | Custom Online Stores | ${COMPANY_NAME}`,
      description:
        'We build custom online stores with attractive design, full features, and a focus on conversion. Solutions with WooCommerce or custom development.',
      ogTitle: `Ecommerce | Custom Online Stores | ${COMPANY_NAME}`,
      ogDescription:
        'Boost your sales with an online store tailored to your business. From WooCommerce to custom solutions, we build ecommerce that sells.',
      ogImage: coverImage,
      twitterTitle: `Ecommerce | Online Stores | ${COMPANY_NAME}`,
      twitterDescription:
        'Online stores built to scale. Customized, functional, and focused on conversion. Launch your ecommerce with navike21.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Custom Ecommerce',
      description:
        'We develop tailored online stores with an attractive, user-friendly design optimized to maximize sales. We integrate all necessary features for your ecommerce to grow.'
    },
    description: {
      title: 'Ecommerce Solutions for Your Business',
      description:
        'From creating the online store to its maintenance and optimization, we provide a comprehensive approach that covers all aspects of ecommerce. We ensure your store is easy to manage and scalable as your business grows.',
      description2:
        'We offer two types of ecommerce development: one predefined using **WordPress and WooCommerce**, and another fully **custom from scratch**. If you choose custom development, we recommend a suitable technical profile, as this approach offers greater scalability and long-term flexibility.'
    },
    features: {
      title: 'What Does Our Service Include?',
      items: [
        {
          title: 'Custom Online Store Design and Development',
          description:
            'We create unique, tailor-made online stores with an attractive design, easy navigation, and optimized for conversions, based on your business needs and goals.'
        },
        {
          title: 'Inventory and Product Management',
          description:
            'We develop intuitive and scalable inventory management systems that allow users to easily manage products, prices, stock, and promotions.'
        },
        {
          title: 'Integration of Facebook, Google Ads, and TikTok Pixels',
          description:
            'We integrate the necessary tracking pixels for advertising campaigns on platforms like Facebook, Google Ads, and TikTok, enabling you to measure and optimize your marketing efforts.'
        },
        {
          title: 'Maintenance and Updates (Add-on Service)',
          description:
            'Ongoing maintenance and updates for your store, such as adding new features, updating databases, and system security, are offered as an additional service.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Ecommerce Requirements Definition',
        description:
          'We start with a detailed consultation to understand your business goals, products, customers, and ecommerce expectations. We define purchase flows, payment methods, and necessary features.'
      },
      {
        title: 'Store Design and Prototyping',
        description:
          'We create a visual design of your online store, adapted to your brand and optimized for user experience. We validate these designs with interactive prototypes before starting development.'
      },
      {
        title: 'Online Store Development',
        description:
          'We build the store using the best ecommerce platforms (WordPress with WooCommerce), or if you prefer a more flexible development, we propose a fully custom solution from scratch, always with the right technical profile.'
      },
      {
        title: 'Store Testing and QA',
        description:
          'We conduct thorough testing of the online store to ensure all functionalities (shopping cart, payment gateway, product management) work perfectly before launch.'
      },
      {
        title: 'Online Store Deployment',
        description:
          'We deploy your online store on a secure server and ensure its optimal performance on different devices, guaranteeing a responsive design and a smooth experience on desktop and mobile.'
      },
      {
        title: 'Training and Knowledge Transfer',
        description:
          'We train your team to manage products, run promotions, handle inventories, and maintain the store independently without relying on a technical team.'
      },
      {
        title: 'Ongoing Support and Maintenance (Add-on Service)',
        description:
          'We offer technical support and additional maintenance as a separate service, including software updates, inventory management, and ongoing ecommerce optimization.'
      }
    ],
    recentWorks: {
      title: 'Recent Projects',
      description:
        'Discover some recent projects that showcase how we combine strategy, technology, and execution to deliver outstanding ecommerce results.'
    },
    callToAction: {
      title: 'Ready to Build Your Online Store?',
      description:
        'Let’s talk about how we can help you build an efficient, scalable ecommerce store optimized to convert visitors into customers.',
      textButton: 'Start your online store'
    }
  }
})
