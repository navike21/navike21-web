import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'Digital Marketing',
  descriptionLite:
    'We boost your brand in the digital space with customized strategies, effective advertising, and a strong social media presence.',
  path: `${servicesMenu.path}/digital-marketing`,
  slug: 'digital-marketing',
  pageSections: {
    metaTag: {
      title: `Digital Marketing | Strategies and Online Advertising | ${COMPANY_NAME}`,
      description:
        'Boost your brand with digital marketing strategies, paid campaigns, social media, and optimized content. Measurable results with navike21.',
      ogTitle: `Digital Marketing | Strategies and Online Advertising | ${COMPANY_NAME}`,
      ogDescription:
        'Enhance your online presence with personalized campaigns, social media, and effective ads. Real results with navike21.',
      ogImage: coverImage,
      twitterTitle: `Digital Marketing | Online Strategies | ${COMPANY_NAME}`,
      twitterDescription:
        'Digital campaigns, social media, and online advertising that deliver results. Discover what navike21 can do for your brand.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Digital Strategies That Deliver Results',
      description:
        'We design and execute digital campaigns aligned with your business goals, optimizing your online visibility and attracting the right customers.'
    },
    description: {
      title: 'Personalized Marketing for Your Business',
      description:
        'We analyze your current situation and create a strategic digital marketing plan tailored to your goals, budget, and audience. We focus on generating real and measurable impact.',
      description2:
        'We become your partner in digital growth, continuously monitoring campaigns and making the necessary adjustments to maximize your return on investment (ROI).'
    },
    features: {
      title: 'What Does Our Service Include?',
      items: [
        {
          title: 'Advertising on Digital Platforms',
          description:
            'We manage paid campaigns on Google Ads, Meta Ads, TikTok Ads, and more, optimized to attract quality traffic and drive conversions.'
        },
        {
          title: 'Social Media Management',
          description:
            'We create content strategies and manage your accounts to build a loyal community and boost your digital presence.'
        },
        {
          title: 'Content Creation',
          description:
            'We design visual assets and write persuasive copy that connects with your audience at every stage of the funnel.'
        },
        {
          title: 'Pixel Installation and Measurement Tools',
          description:
            'We set up tracking pixels for Facebook, TikTok, Google Ads, and Adobe to accurately measure your campaign performance.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Assessment and Goals',
        description:
          'We evaluate your current presence and define clear digital marketing goals based on your business.'
      },
      {
        title: 'Strategic Planning',
        description:
          'We create a detailed action plan outlining platforms to use, content types, budget, and campaign schedule.'
      },
      {
        title: 'Campaign Execution',
        description:
          'We professionally launch campaigns, ensuring proper targeting and tailored creative assets.'
      },
      {
        title: 'Measurement and Optimization',
        description:
          'We monitor performance and make real-time adjustments to maximize results and meet set goals.'
      }
    ],
    recentWorks: {
      title: 'Campaigns That Make a Difference',
      description:
        'Explore case studies where our digital strategies have enhanced the online presence of brands in various sectors.'
    },
    callToAction: {
      title: 'Ready to Boost Your Brand?',
      description:
        'Let’s talk about your goals and create a digital marketing strategy together that drives results.',
      textButton: 'I want to improve my marketing'
    }
  }
})
