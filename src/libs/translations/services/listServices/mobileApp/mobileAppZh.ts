import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: '移动应用程序',
  descriptionLite:
    '我们为Android和iOS开发定制应用，旨在提供流畅且现代化的用户体验。',
  path: `${servicesMenu.path}/ying-yong-xi-tong`,
  slug: 'ying-yong-xi-tong',
  pageSections: {
    metaTag: {
      title: `移动应用程序开发 | ${COMPANY_NAME}`,
      description:
        '我们为Android和iOS创建定制应用，结合了高性能、现代设计和卓越的用户体验。',
      keywords: [
        '移动应用开发',
        '定制应用',
        'React Native',
        'Flutter',
        'Android应用',
        'iOS应用',
        '移动UX/UI',
        'App Store发布',
        '跨平台开发'
      ],
      ogTitle: `定制移动应用程序 | ${COMPANY_NAME}`,
      ogDescription:
        '将您的创意转化为功能强大、现代且可扩展的应用。我们为Android和iOS开发具有出色设计和性能的移动应用。',
      ogImage: coverImage,
      twitterTitle: `定制移动应用程序 | ${COMPANY_NAME}`,
      twitterDescription:
        '我们为Android和iOS创建专注于用户体验、速度和质量的应用。与我们一起发布您的应用。',
      twitterImage: coverImage
    },

    hero: {
      title: '将您的业务带到用户的口袋里',
      description:
        '我们创建定制的移动应用程序，结合了高性能、吸引人的设计和卓越的用户体验。'
    },
    description: {
      title: '量身定制的移动解决方案',
      description:
        '我们分析您的需求，设计有效的流程，并开发一款注重可扩展性、可用性和效率的应用。',
      description2:
        '从内部服务应用到商业产品，我们将在整个理想化、设计和开发过程中为您提供支持。'
    },
    features: {
      title: '我们的服务包括什么？',
      items: [
        {
          title: '移动UX/UI设计',
          description: '我们设计视觉界面和用户体验，注重可访问性和简洁性。'
        },
        {
          title: '原生或跨平台开发',
          description:
            '根据项目需要，我们选择最合适的技术：React Native、Flutter或必要时的原生开发。'
        },
        {
          title: '与API和后端集成',
          description:
            '我们将应用与现有系统连接，或创建一个新的系统，集成云服务、数据库或网关。'
        },
        {
          title: '测试与质量控制',
          description: '我们进行功能和性能测试，确保应用适应各种设备和场景。'
        },
        {
          title: '应用商店发布',
          description:
            '我们会指导或处理将应用上传并发布到Google Play Store和App Store的过程。'
        }
      ]
    },
    flowWork: [
      {
        title: '探索与分析',
        description:
          '我们识别项目目标，理解业务流程，并提出适当的移动解决方案。'
      },
      {
        title: 'UX/UI原型设计',
        description: '我们设计功能性和吸引人的界面，专注于移动优先和持续验证。'
      },
      {
        title: '应用程序开发',
        description: '我们使用现代技术开发应用程序，确保可扩展性、速度和性能。'
      },
      {
        title: '测试与交付',
        description:
          '我们在不同的环境中进行测试，修复错误，并交付准备发布的应用程序。'
      }
    ],
    recentWorks: {
      title: '改变体验的应用程序',
      description:
        '我们致力于开发连接用户与品牌、产品和服务的有效移动解决方案。'
    },
    callToAction: {
      title: '准备好拥有自己的应用程序了吗？',
      description:
        '将您的创意转化为功能强大、快速且现代的应用程序。让我们来讨论一下您想要构建的内容。',
      textButton: '我想要我的定制应用'
    }
  }
})
