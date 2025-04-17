import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: '电子商务网站',
  descriptionLite:
    '为您的业务量身打造的在线商店，具有付款、配送和库存管理等全面功能。',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `电子商务网站 | 在线商店开发 | ${COMPANY_NAME}`,
      description:
        '我们使用 WooCommerce 或完全定制的方式开发电子商务网站，专注于设计、性能和用户体验。',
      ogTitle: `电子商务网站 | 在线商店开发 | ${COMPANY_NAME}`,
      ogDescription:
        '为增长型企业打造高性能、可扩展的在线商店。提供 WooCommerce 或定制化开发服务。',
      ogImage: coverImage,
      twitterTitle: `电子商务网站 | 在线商店开发 | ${COMPANY_NAME}`,
      twitterDescription:
        '开发以转化率为核心的在线商店，具备现代设计与优质性能。支持 WooCommerce 与定制平台。',
      twitterImage: coverImage
    },
    hero: {
      title: '专业定制的在线商店开发服务',
      description:
        '我们打造用户体验优越、设计吸引人、功能强大的电子商务平台，助力销售增长。'
    },
    description: {
      title: '为您量身打造的电商解决方案',
      description:
        '我们从规划、设计、开发到集成与优化，提供完整的电商建站服务。最终成果将是一个安全、可扩展、易于管理的在线商店。',
      description2:
        '可选择使用 **WordPress + WooCommerce** 或完全 **定制开发**，满足不同业务需求。'
    },
    features: {
      title: '服务内容',
      items: [
        {
          title: '定制化设计与开发',
          description:
            '为您的品牌量身打造独一无二的在线商店界面，增强用户体验与品牌认知。'
        },
        {
          title: '商品与库存管理',
          description:
            '提供直观的管理后台，可轻松编辑商品、价格、库存及促销活动。'
        },
        {
          title: '整合 Facebook、Google Ads 与 TikTok Pixel',
          description: '帮助您设置追踪像素，有效分析广告成效，实现精准营销。'
        },
        {
          title: '技术维护与更新（可选）',
          description:
            '提供技术支持、网站安全维护与功能优化服务，确保网站长期稳定运行。'
        }
      ]
    },
    flowWork: [
      {
        title: '需求调研',
        description: '了解您商店的目标、受众、支付方式、物流、结构与所需功能。'
      },
      {
        title: '界面设计与原型开发',
        description: '根据品牌形象设计网页，并制定用户流程，优化用户体验。'
      },
      {
        title: '网站开发',
        description:
          '使用 WooCommerce 或进行定制开发，打造高性能、高效率的在线商店。'
      },
      {
        title: '测试与质量把控',
        description:
          '确保每一项功能运行正常，包括注册、下单、支付、配送及后台管理。'
      },
      {
        title: '上线与部署',
        description: '将网站部署至安全服务器，并确保在所有设备上正常访问。'
      },
      {
        title: '操作培训与交付',
        description:
          '我们将指导您如何管理商店：添加商品、调整价格、设置优惠与管理内容等。'
      },
      {
        title: '售后支持（可选）',
        description:
          '可选提供持续支持与维护服务，协助改进功能、优化性能并保障稳定运行。'
      }
    ],
    recentWorks: {
      title: '近期项目',
      description: '欢迎查看我们近期完成的电商项目，专注结果与客户满意度。'
    },
    callToAction: {
      title: '想要建立您的电子商务网站？',
      description:
        '我们为您打造一个真正为销售服务的在线商店，量身定制，结果导向。',
      textButton: '获取报价'
    }
  }
})
