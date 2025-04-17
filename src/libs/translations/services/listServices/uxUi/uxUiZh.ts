import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'UX/UI 设计',
  descriptionLite:
    '我们通过具有吸引力、功能性和易于使用的界面来转变您的用户体验，专注于简化流程并改善互动。',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `UX/UI 设计 | ${COMPANY_NAME}`,
      description:
        '我们通过具有吸引力和功能性的界面转变您的用户体验，简化流程并改善互动。',
      keywords: [
        'UX 设计',
        'UI 设计',
        '用户体验',
        '用户界面',
        '互动原型',
        '网页设计',
        '响应式设计',
        'UX/UI 优化'
      ],
      ogTitle: `UX/UI 设计 | ${COMPANY_NAME}`,
      ogDescription:
        '通过具有吸引力和功能性的 UX/UI 设计优化用户与您的产品的互动，提升用户体验。',
      ogImage: coverImage,
      twitterTitle: `UX/UI 设计 | ${COMPANY_NAME}`,
      twitterDescription:
        '通过专注于简化和高效性的 UX/UI 设计，转变您与产品的互动。',
      twitterImage: coverImage
    },
    hero: {
      title: '创意 UX/UI 设计',
      description:
        '我们创造改善用户体验的设计解决方案，简化流程并优化与您的产品或服务的互动。'
    },
    description: {
      title: '量身定制的 UX/UI 解决方案',
      description:
        '我们深入理解您的业务流程，提出 UX/UI 解决方案，转变用户与产品的互动，简化每一步，提升整体体验。',
      description2:
        '从概念到最终设计，我们的方案专注于创建清晰、直观且易于访问的用户体验，与您的商业目标对齐。'
    },
    features: {
      title: '我们的服务包括什么？',
      items: [
        {
          title: '流程研究与分析',
          description:
            '我们研究您当前的业务流程，识别改进点和机会，简化用户体验。'
        },
        {
          title: '功能性界面设计',
          description:
            '创建具有视觉吸引力的界面，反映您的品牌形象，确保流畅无阻的导航体验。'
        },
        {
          title: '互动原型',
          description:
            '我们设计互动原型，在实现之前验证所提解决方案，确保流程高效且易于使用。'
        }
      ]
    },
    flowWork: [
      {
        title: '业务研究与理解',
        description:
          '我们深入了解您的业务，理解目标和当前流程，寻找优化用户体验的方式，同时不失去产品的本质。'
      },
      {
        title: '流程分析与 UX 解决方案建议',
        description:
          '我们评估工作流程，提出 UX 解决方案，以简化导航，消除障碍，提高每次互动的效率。'
      },
      {
        title: '视觉设计与原型',
        description:
          '我们创建与品牌形象一致的视觉设计，并开发互动原型，以在实施之前测试和调整流程。'
      },
      {
        title: '验证与优化',
        description:
          '我们与用户进行验证会议，确保设计直观易用，满足期望，并根据反馈进一步优化细节。'
      }
    ],
    recentWorks: {
      title: '近期项目',
      description:
        '了解我们的一些项目，看看我们如何通过专注于流程简化和高效的设计来改善用户体验。'
    },
    callToAction: {
      title: '准备好转变您的用户体验了吗？',
      description:
        '让我们帮助您创建简化流程并改善与您产品互动的用户体验。让我们讨论一下如何在您的下一个 UX/UI 设计项目中合作。',
      textButton: '开始您的 UX/UI 项目'
    }
  }
})
