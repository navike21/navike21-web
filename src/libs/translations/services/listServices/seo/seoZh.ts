import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'SEO优化',
  descriptionLite:
    '我们提升您网站在搜索引擎中的可见性，从而吸引更多优质的自然流量。',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `SEO优化 | ${COMPANY_NAME}`,
      description:
        '我们提升您网站在搜索引擎中的可见性，从而吸引更多优质的自然流量。',
      keywords: [
        'SEO',
        '搜索引擎优化',
        '网站排名',
        '技术SEO',
        '页面SEO',
        '关键词分析',
        '本地SEO',
        'SEO报告'
      ],
      ogTitle: `SEO优化 | ${COMPANY_NAME}`,
      ogDescription:
        '我们提升您网站的排名，让您在搜索引擎中脱颖而出，位列前茅。',
      ogImage: coverImage,
      twitterTitle: `SEO优化 | ${COMPANY_NAME}`,
      twitterDescription:
        '通过我们的定制SEO服务，提高您的在线可见性，吸引更多自然流量。',
      twitterImage: coverImage
    },
    hero: {
      title: '让客户首先找到你',
      description:
        '我们优化您的在线形象，使您的产品或服务在搜索结果中排名靠前。'
    },
    description: {
      title: '技术与内容SEO',
      description:
        '我们专注于审核并提升您网站的技术性能，同时根据相关关键词优化内容。',
      description2:
        '我们的目标是增加自然流量并提升您品牌在Google等搜索引擎中的排名。'
    },
    features: {
      title: '我们的服务包含什么？',
      items: [
        {
          title: '技术SEO审核',
          description:
            '我们检查网站的技术状态：速度、结构、标签、URL、重定向、索引等方面。'
        },
        {
          title: '页面优化',
          description: '我们根据最佳实践优化标题、元描述、标题结构和内部链接。'
        },
        {
          title: '关键词分析',
          description:
            '我们识别对您的业务最相关的搜索词，并自然地整合到您的内容中。'
        },
        {
          title: '本地SEO（可选）',
          description:
            '如果您的业务是本地的，我们会提升您在地图、目录和本地搜索结果中的曝光度。'
        },
        {
          title: '监控与报告',
          description:
            '我们提供关键指标的报告，如自然流量、关键词排名和网站表现趋势。'
        }
      ]
    },
    flowWork: [
      {
        title: '初步诊断',
        description: '我们分析您的网站，发现技术和内容方面的问题及改进机会。'
      },
      {
        title: 'SEO策略',
        description: '我们根据业务类型、目标市场和相关搜索设计定制的优化计划。'
      },
      {
        title: '持续优化',
        description:
          '我们实施技术和内容方面的改进，持续监控效果并根据需要调整策略。'
      },
      {
        title: '结果交付',
        description: '我们通过清晰的报告展示SEO的成果，专注于投资回报和增长。'
      }
    ],
    recentWorks: {
      title: '真实排名的项目案例',
      description:
        '我们帮助企业在搜索结果中排名提升，增加流量，而不仅仅依赖于付费广告。'
    },
    callToAction: {
      title: '让您的网站为您工作',
      description:
        '通过量身定制的SEO策略，提升在Google中的可见性，吸引更多客户。',
      textButton: '我要提升我的排名'
    }
  }
})
