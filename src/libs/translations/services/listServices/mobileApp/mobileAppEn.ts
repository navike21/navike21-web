import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'Mobile Apps',
  descriptionLite:
    'We develop custom apps for Android and iOS, designed to offer smooth and modern experiences.',
  path: `${servicesMenu.path}/mobile-apps`,
  slug: 'mobile-apps',
  pageSections: {
    metaTag: {
      title: `Mobile App Development | ${COMPANY_NAME}`,
      description:
        'We create custom apps for Android and iOS that combine performance, modern design, and excellent user experience.',
      keywords: [
        'mobile app development',
        'custom apps',
        'React Native',
        'Flutter',
        'Android apps',
        'iOS apps',
        'mobile UX/UI',
        'App Store publishing',
        'cross-platform development'
      ],
      ogTitle: `Custom Mobile Apps | ${COMPANY_NAME}`,
      ogDescription:
        'Turn your idea into a functional, modern, and scalable app. We create mobile apps for Android and iOS with exceptional design and performance.',
      ogImage: coverImage,
      twitterTitle: `Custom Mobile Apps | ${COMPANY_NAME}`,
      twitterDescription:
        'We create apps for Android and iOS focused on user experience, speed, and quality. Launch your app with us.',
      twitterImage: coverImage
    },

    hero: {
      title: 'Apps that Bring Your Business into the User’s Pocket',
      description:
        'We create custom mobile apps that combine performance, appealing design, and flawless user experience.'
    },
    description: {
      title: 'Custom Mobile Solutions',
      description:
        'We analyze your needs, design effective workflows, and develop an app focused on scalability, usability, and efficiency.',
      description2:
        'From internal service apps to commercial products, we guide you through the entire process of ideation, design, and development.'
    },
    features: {
      title: 'What’s Included in Our Service?',
      items: [
        {
          title: 'Mobile UX/UI Design',
          description:
            'We create the visual interface and user experience with a focus on accessibility and simplicity.'
        },
        {
          title: 'Native or Cross-Platform Development',
          description:
            'We select the best technology for your project: React Native, Flutter, or native development when needed.'
        },
        {
          title: 'API and Backend Integration',
          description:
            'We connect the app with your existing system or create a new one, integrating cloud services, databases, or payment gateways.'
        },
        {
          title: 'Testing and Quality Control',
          description:
            'We perform functional and performance testing to ensure the app works across different devices and scenarios.'
        },
        {
          title: 'App Store Publishing',
          description:
            'We guide or handle the process of uploading and publishing the app on Google Play Store and the App Store.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Exploration and Analysis',
        description:
          'We identify project objectives, understand business flows, and propose an appropriate mobile solution.'
      },
      {
        title: 'UX/UI Prototyping',
        description:
          'We design a functional and attractive interface with a mobile-first approach and continuous validation.'
      },
      {
        title: 'App Development',
        description:
          'We program the app using modern technologies, ensuring scalability, speed, and performance.'
      },
      {
        title: 'Testing and Delivery',
        description:
          'We conduct tests in various environments, fix bugs, and deliver the app ready for publication.'
      }
    ],
    recentWorks: {
      title: 'Apps that Transform Experiences',
      description:
        'We have worked on mobile solutions that effectively connect users with brands, products, and services.'
    },
    callToAction: {
      title: 'Ready for Your Own App?',
      description:
        'Turn your idea into a functional, fast, and modern app. Let’s talk about what you want to build.',
      textButton: 'I want my custom app'
    }
  }
})
