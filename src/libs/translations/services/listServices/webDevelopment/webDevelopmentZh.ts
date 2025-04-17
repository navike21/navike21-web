import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: '网页开发',
  descriptionLite:
    '我们创建现代、安全且高性能的网站，旨在突出、吸引和转化，在高度竞争的数字环境中脱颖而出。',
  path: `${servicesMenu.path}/web-development`,
  slug: 'web-development',
  pageSections: {
    metaTag: {
      title: `网页开发 | ${COMPANY_NAME}`,
      description:
        '我们根据您的需求定制网站，专注于性能、安全性和可用性，在数字环境中脱颖而出。',
      keywords: [
        '网页开发',
        '网站',
        '网页',
        '响应式网站',
        '定制开发',
        '网站优化',
        '自适应网页设计',
        '现代网页技术'
      ],
      ogTitle: `网页开发 | ${COMPANY_NAME}`,
      ogDescription:
        '通过优化并专为用户体验设计的网站提升您的在线存在感，具备高性能和可访问性。',
      ogImage: coverImage,
      twitterTitle: `网页开发 | ${COMPANY_NAME}`,
      twitterDescription:
        '我们开发高性能的网站，提升用户体验并最大化您业务的数字影响力。',
      twitterImage: coverImage
    },
    hero: {
      title: '专业网页开发',
      description:
        '通过定制网站增强您的在线存在感，这些网站专为速度、安全性和性能而设计，采用最新的网页开发趋势和技术。'
    },
    description: {
      title: '为您的业务量身定制的网页解决方案',
      description:
        '从需求定义到最终部署，我们创造直观、强大且可扩展的网页体验。我们采用敏捷方法和现代工具，以确保您的项目从一开始就有坚实的基础。',
      description2:
        '我们的方法基于技术卓越、可访问性和效率。无论是着陆页还是复杂的网页系统，我们都确保您的网站运行无障碍，并为您的业务增长做好准备。'
    },
    features: {
      title: '我们的服务包括什么？',
      items: [
        {
          title: '高性能网站',
          description:
            '我们优化每个技术细节，以实现最低加载时间、良好的用户体验和从任何设备获得稳定的结果。'
        },
        {
          title: '自适应设计',
          description:
            '您的网站将在各种尺寸的屏幕上完美呈现，确保从电脑到移动设备的体验一致。'
        },
        {
          title: '资源优化',
          description:
            '我们通过先进的压缩技术减少图片和文件的大小，同时不牺牲视觉质量或功能性。'
        }
      ]
    },
    flowWork: [
      {
        title: '战略规划',
        description: '我们与您一起定义项目目标、关键功能和清晰的开发路线图。'
      },
      {
        title: '设计与原型制作',
        description:
          '我们制作线框图或功能性原型，作为开发结构的视觉指南，并在编码前验证想法。'
      },
      {
        title: '开发与验证',
        description:
          '我们使用现代工具实现网站，并进行全面的测试，以确保性能、兼容性和稳定性。'
      },
      {
        title: '部署与支持',
        description:
          '我们将您的网站发布到生产环境，并根据需要提供月度支持计划，确保其保持最新、安全和功能齐全。'
      }
    ],
    recentWorks: {
      title: '已完成项目',
      description:
        '查看一些最近的项目，展示我们如何结合战略、技术和执行来交付卓越的网页结果。'
    },
    callToAction: {
      title: '准备好开发您的下一个网页项目了吗？',
      description:
        '让我们讨论您的需求，看看我们如何帮助您构建一个高效、可扩展且适应您业务的网页解决方案。',
      textButton: '让我们谈谈您的项目'
    }
  }
})
