import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'Web Development',
  descriptionLite:
    'We create modern, secure, and high-performance websites designed to stand out, engage, and convert in a highly competitive digital environment.',
  path: `${servicesMenu.path}/web-development`,
  slug: 'web-development',
  pageSections: {
    metaTag: {
      title: `Web Development | ${COMPANY_NAME}`,
      description:
        'We create websites tailored to your needs, focusing on performance, security, and usability to stand out in the digital world.',
      keywords: [
        'web development',
        'websites',
        'web pages',
        'responsive web design',
        'custom development',
        'web optimization',
        'adaptive web design',
        'modern web technology'
      ],
      ogTitle: `Web Development | ${COMPANY_NAME}`,
      ogDescription:
        'Boost your online presence with optimized websites designed for user experience, high performance, and accessibility.',
      ogImage: coverImage,
      twitterTitle: `Web Development | ${COMPANY_NAME}`,
      twitterDescription:
        'We build high-performance websites that enhance user experience and maximize your business’s digital impact.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Professional Web Development',
      description:
        'Boost your online presence with custom websites designed for speed, security, and performance, using the latest trends and technologies in modern web development.'
    },
    description: {
      title: 'Web Solutions Tailored to Your Business',
      description:
        'From defining requirements to final deployment, we create intuitive, robust, and scalable web experiences. We use agile methodologies and modern tools to ensure your project has a solid foundation from the start.',
      description2:
        'Our approach is based on technical excellence, accessibility, and efficiency. Whether it’s a landing page or a complex web system, we ensure your site functions flawlessly and is ready to grow with your business.'
    },
    features: {
      title: 'What’s Included in Our Service?',
      items: [
        {
          title: 'High-Performance Websites',
          description:
            'We optimize every technical aspect to achieve minimal load times, good user experience, and solid results from any device.'
        },
        {
          title: 'Responsive Design',
          description:
            'Your website will look perfect on screens of all sizes, ensuring a consistent experience from desktops to mobile devices.'
        },
        {
          title: 'Resource Optimization',
          description:
            'We reduce the weight of images and files with advanced compression techniques, without compromising visual quality or functionality.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Strategic Planning',
        description:
          'We define the project objectives, key features, and a clear roadmap for development with you.'
      },
      {
        title: 'Design and Prototyping',
        description:
          'We create wireframes or functional prototypes that serve as visual guides to structure development and validate ideas before coding.'
      },
      {
        title: 'Development and Validation',
        description:
          'We implement the site using modern tools and conduct thorough testing to ensure performance, compatibility, and stability.'
      },
      {
        title: 'Deployment and Support',
        description:
          'We publish your site in the production environment, and if desired, offer a monthly support plan to keep it updated, secure, and functional.'
      }
    ],
    recentWorks: {
      title: 'Recent Projects',
      description:
        'Discover some of our recent projects that showcase how we combine strategy, technology, and execution to deliver outstanding web results.'
    },
    callToAction: {
      title: 'Ready to Develop Your Next Web Project?',
      description:
        'Let’s discuss your needs and find out how we can help you build an effective, scalable, and business-tailored web solution.',
      textButton: 'Let’s talk about your project'
    }
  }
})
