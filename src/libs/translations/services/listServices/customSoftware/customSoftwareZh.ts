import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: '定制软件开发',
  descriptionLite: '我们根据您企业的独特需求开发个性化软件，提高效率与竞争力。',
  path: `${servicesMenu.path}/ruan-jian-ding-zhi`,
  slug: 'ruan-jian-ding-zhi',
  pageSections: {
    metaTag: {
      title: `定制软件开发 | ${COMPANY_NAME}`,
      description:
        '我们为企业打造量身定制的软件解决方案，提升流程效率、可扩展性和市场竞争力。',
      keywords: [
        '定制软件',
        '软件开发',
        '企业系统',
        '个性化解决方案',
        '业务自动化',
        '系统集成',
        '技术咨询',
        '数字化转型'
      ],
      ogTitle: `为企业打造专属的软件解决方案 | ${COMPANY_NAME}`,
      ogDescription: '我们根据企业的目标和流程定制技术解决方案。',
      ogImage: coverImage,
      twitterTitle: `定制软件开发 | ${COMPANY_NAME}`,
      twitterDescription:
        '为有远见的企业提供高性能、安全且可扩展的数字解决方案。',
      twitterImage: coverImage
    },
    hero: {
      title: '量身定制的软件解决方案',
      description:
        '我们构建与您业务需求完美契合的软件，优化流程并推动业务成长。'
    },
    description: {
      title: '专为您企业打造的软件',
      description:
        '我们提供适用于桌面、移动和 Web 的软件系统，提升企业运营效率并降低成本。',
      description2:
        '我们以敏捷与高效为导向，打造可靠、可扩展且高质量的数字产品。'
    },
    features: {
      title: '服务包含内容',
      items: [
        {
          title: '定制架构设计',
          description:
            '根据您的业务模型构建系统架构，确保安全、可扩展和高效运行。'
        },
        {
          title: '全栈开发',
          description:
            '使用 React、Node.js、.NET、Java 等现代技术开发完整解决方案。'
        },
        {
          title: 'API 与系统集成',
          description: '通过 API 与内部或外部系统集成，确保数据同步和流程统一。'
        },
        {
          title: '测试与质量保障',
          description:
            '通过自动化与手动测试保证系统的可靠性、安全性与可维护性。'
        },
        {
          title: '云服务部署',
          description:
            '使用 AWS、Google Cloud 或 Azure 等云平台，确保系统可用性与稳定性。'
        },
        {
          title: '敏捷开发流程',
          description: '采用 Scrum 或 Kanban 方法实现快速迭代和灵活的项目管理。'
        },
        {
          title: '用户培训',
          description: '为客户提供操作培训与文档，确保系统使用效率。'
        },
        {
          title: '后续支持（可选）',
          description: '可提供技术支持、系统更新与功能迭代等额外服务。'
        }
      ]
    },
    flowWork: [
      {
        title: '需求收集与分析',
        description: '深入了解业务需求与目标，制定明确的开发计划。'
      },
      {
        title: '架构与技术规划',
        description: '构建系统设计方案，选用最适合的技术栈。'
      },
      {
        title: '前后端开发',
        description: '实现交互界面与系统逻辑，保证功能完整与用户体验。'
      },
      {
        title: '测试与持续集成',
        description: '进行质量控制，确保每个版本稳定可靠。'
      },
      {
        title: '部署与监控',
        description: '上线系统并监控性能，快速响应潜在问题。'
      },
      {
        title: '交付与培训',
        description: '交付完整文档与使用培训，确保客户顺利使用系统。'
      },
      {
        title: '支持与升级（可选）',
        description: '根据客户需求提供持续技术服务。'
      }
    ],
    recentWorks: {
      title: '近期项目',
      description: '了解我们为其他企业打造的定制软件项目案例。'
    },
    callToAction: {
      title: '需要为您的企业打造专属软件吗？',
      description: '联系我们的专家团队，为您制定专属数字解决方案。',
      textButton: '请求报价'
    }
  }
})
