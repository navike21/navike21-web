import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingZh = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: '电子邮件营销',
  descriptionLite:
    '通过个性化的电子邮件营销活动，直接有效地与您的客户建立联系。',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `电子邮件营销 | 高效的活动 | ${COMPANY_NAME}`,
      description:
        '我们设计和开发个性化的电子邮件营销活动，使用响应式HTML、自动化和精准的细分，以最大化结果。',
      ogTitle: `电子邮件营销 | 高效的活动 | ${COMPANY_NAME}`,
      ogDescription:
        '通过精心设计、自动化和细分的电子邮件营销活动，在正确的时机与您的受众建立联系。',
      ogImage: coverImage,
      twitterTitle: `电子邮件营销 | 个性化的策略 | ${COMPANY_NAME}`,
      twitterDescription:
        '创建转化率高的电子邮件营销活动：视觉设计、响应式HTML开发、自动化和智能细分。',
      twitterImage: coverImage
    },
    hero: {
      title: '连接和说服的电子邮件营销活动',
      description:
        '我们通过令人印象深刻的设计和精准的细分创建电子邮件营销策略，提升您的沟通和客户忠诚度。'
    },
    description: {
      title: '到达的消息，震撼的设计',
      description:
        '我们负责为您的活动设计和开发HTML，确保在所有设备和邮件客户端上兼容。',
      description2:
        '此外，我们还通过使用像Mailchimp这样的平台实施自动化和细分策略，确保每条信息在正确的时机到达合适的受众。'
    },
    features: {
      title: '我们的服务包括什么？',
      items: [
        {
          title: '电子邮件设计与排版',
          description:
            '我们设计符合您品牌的视觉素材，并将其开发为适用于所有设备和邮件客户端的优化HTML。'
        },
        {
          title: '平台配置',
          description:
            '我们实施并配置诸如Mailchimp等工具，以集中管理您的活动和受众。'
        },
        {
          title: '流程自动化',
          description:
            '我们创建自动化流程，如欢迎邮件、放弃购物车邮件或定期的新闻通讯，以保持与受众的联系。'
        },
        {
          title: '受众细分',
          description:
            '我们根据行为、兴趣或人口统计数据对您的联系人列表进行细分，以提高打开率和转化率。'
        },
        {
          title: '测量与报告',
          description:
            '我们分析每个活动的效果（打开率、点击率、转化率），以优化未来的发送。'
        }
      ]
    },
    flowWork: [
      {
        title: '沟通简报',
        description:
          '根据您的商业策略，我们定义目标、语气、频率和发送的内容类型。'
      },
      {
        title: '电子邮件设计与开发',
        description: '我们创建视觉设计，并开发响应式HTML以确保正确显示。'
      },
      {
        title: '在Mailchimp中实施',
        description: '我们上传并配置活动，细分受众并准备好发送或自动化。'
      },
      {
        title: '发送、测量与优化',
        description: '我们启动活动，衡量结果，并持续优化，以提高其效果。'
      }
    ],
    recentWorks: {
      title: '高影响力的活动',
      description:
        '浏览一些我们的电子邮件营销设计，这些设计实现了高打开率和转化率。'
    },
    callToAction: {
      title: '想与您的受众更好地沟通吗？',
      description:
        '我们创建具有视觉吸引力、功能强大的电子邮件，并取得良好的效果。今天就开始您的下一次电子邮件营销活动。',
      textButton: '我要一个有效的活动'
    }
  }
})
