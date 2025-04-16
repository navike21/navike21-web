import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: '数字营销',
  descriptionLite:
    '我们通过量身定制的战略、有效的广告和强大的社交媒体存在，推动您的品牌在数字环境中的发展。',
  path: `${servicesMenu.path}/shuzi-yingxiao`,
  slug: 'shuzi-yingxiao',
  pageSections: {
    metaTag: {
      title: `数字营销 | 战略与在线广告 | ${COMPANY_NAME}`,
      description:
        '通过数字营销策略、付费广告、社交媒体和优化内容推动您的品牌。使用navike21获取可衡量的结果。',
      ogTitle: `数字营销 | 战略与在线广告 | ${COMPANY_NAME}`,
      ogDescription:
        '通过量身定制的广告、社交媒体和高效广告增强您的在线存在感。使用navike21实现真实的结果。',
      ogImage: coverImage,
      twitterTitle: `数字营销 | 在线战略 | ${COMPANY_NAME}`,
      twitterDescription:
        '数字广告、社交媒体和在线广告带来实际效果。了解navike21如何为您的品牌带来价值。',
      twitterImage: coverImage
    },
    hero: {
      title: '带来实际成果的数字策略',
      description:
        '我们设计并执行与您的商业目标一致的数字广告活动，提升您的在线曝光率并吸引正确的客户。'
    },
    description: {
      title: '为您的企业定制的营销',
      description:
        '我们分析您的现状并制定一个符合您目标、预算和受众的数字营销战略。我们专注于创造真正且可衡量的影响。',
      description2:
        '我们成为您数字增长的合作伙伴，不断监督广告活动并进行必要的调整，以最大化投资回报率（ROI）。'
    },
    features: {
      title: '我们的服务包括哪些内容？',
      items: [
        {
          title: '数字平台广告',
          description:
            '我们管理Google Ads、Meta Ads、TikTok Ads等平台的付费广告活动，优化广告以吸引优质流量并提高转化率。'
        },
        {
          title: '社交媒体管理',
          description:
            '我们制定内容策略并管理您的社交媒体账户，帮助建立忠实的社群并提升您的在线存在感。'
        },
        {
          title: '内容创作',
          description:
            '我们设计图形作品并撰写有说服力的文案，以在各个阶段与您的目标受众建立联系。'
        },
        {
          title: '像素和测量工具安装',
          description:
            '我们为Facebook、TikTok、Google Ads和Adobe配置跟踪像素，以准确衡量广告活动的效果。'
        }
      ]
    },
    flowWork: [
      {
        title: '诊断与目标设定',
        description:
          '我们评估您的当前在线状态，并根据您的业务设定明确的数字营销目标。'
      },
      {
        title: '战略规划',
        description:
          '我们制定详细的行动计划，定义使用的广告平台、内容类型、预算以及广告活动的时间表。'
      },
      {
        title: '广告活动执行',
        description: '我们实施广告活动，确保适当的定位和创意，并进行专业执行。'
      },
      {
        title: '数据分析与优化',
        description:
          '我们实时监控广告效果并进行必要调整，以最大化广告效益并实现既定目标。'
      }
    ],
    recentWorks: {
      title: '带来改变的广告活动',
      description: '查看我们如何通过数字策略提升多个行业品牌的在线存在感。'
    },
    callToAction: {
      title: '准备好提升您的品牌了吗？',
      description:
        '让我们聊聊您的目标，共同制定一套数字营销策略，提升您的营销效果。',
      textButton: '我想改善我的营销'
    }
  }
})
