import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'UX/UI Design',
  descriptionLite:
    'We transform your users’ experience through attractive, functional, and easy-to-use interfaces, focusing on simplifying flows and improving interaction.',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `UX/UI Design | ${COMPANY_NAME}`,
      description:
        'We enhance your users’ experience with attractive and functional interfaces, simplifying flows and optimizing interaction.',
      keywords: [
        'UX design',
        'UI design',
        'user experience',
        'user interface',
        'interactive prototypes',
        'web design',
        'responsive design',
        'UX/UI optimization'
      ],
      ogTitle: `UX/UI Design | ${COMPANY_NAME}`,
      ogDescription:
        'Enhance your users’ experience with attractive and functional UX/UI design that improves interaction with your product.',
      ogImage: coverImage,
      twitterTitle: `UX/UI Design | ${COMPANY_NAME}`,
      twitterDescription:
        'Transform how users interact with your product through UX/UI design focused on simplicity and effectiveness.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Creative UX/UI Design',
      description:
        'We craft design solutions that improve user experiences by simplifying flows and optimizing interaction with your product or service.'
    },
    description: {
      title: 'Tailored UX/UI Solutions',
      description:
        'With a deep understanding of your business processes, we offer UX/UI solutions that transform how users interact with your product, simplifying every step and enhancing the overall experience.',
      description2:
        'From concept to final design, our approach focuses on creating clear, intuitive, and accessible experiences aligned with your business goals.'
    },
    features: {
      title: 'What’s Included in Our Service?',
      items: [
        {
          title: 'Research and Flow Analysis',
          description:
            'We analyze your current business flows, identifying areas of improvement and opportunities to simplify the user experience.'
        },
        {
          title: 'Functional Interface Design',
          description:
            'We create visually appealing interfaces that reflect your brand identity and ensure smooth, frictionless navigation.'
        },
        {
          title: 'Interactive Prototypes',
          description:
            'We design interactive prototypes to validate proposed solutions before implementation, ensuring flows are efficient and user-friendly.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Business Research and Understanding',
        description:
          'We dive into your business to understand goals and current flows, seeking ways to optimize the user experience without losing your product’s essence.'
      },
      {
        title: 'Flow Analysis and UX Solutions',
        description:
          'We evaluate workflows and propose UX solutions that enhance navigation, remove barriers, and maximize efficiency in every interaction.'
      },
      {
        title: 'Visual Design and Prototyping',
        description:
          'We create visual designs aligned with your brand identity and develop interactive prototypes to test and refine flows before implementation.'
      },
      {
        title: 'Validation and Refinement',
        description:
          'We conduct user testing sessions to ensure the proposed design is intuitive and meets expectations, refining details based on feedback.'
      }
    ],
    recentWorks: {
      title: 'Recent Projects',
      description:
        'Explore some of the projects we’ve worked on, enhancing user experience through design focused on simplicity and effective flows.'
    },
    callToAction: {
      title: 'Ready to Transform Your Users’ Experience?',
      description:
        'Let us help you craft a user experience that simplifies your processes and improves interaction with your product. Let’s talk about your next UX/UI design project.',
      textButton: 'Start Your UX/UI Project'
    }
  }
})
