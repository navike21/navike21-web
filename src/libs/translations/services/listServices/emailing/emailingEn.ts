import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'Email Marketing',
  descriptionLite:
    'Connect with your customers directly and effectively through personalized email campaigns.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `Email Marketing | Effective Campaigns | ${COMPANY_NAME}`,
      description:
        'We design and develop personalized email marketing campaigns with responsive HTML, automation, and precise segmentation to maximize results.',
      ogTitle: `Email Marketing | Effective Campaigns | ${COMPANY_NAME}`,
      ogDescription:
        'Boost your communication with well-designed, automated, and segmented email campaigns to connect with your audience at the right moment.',
      ogImage: coverImage,
      twitterTitle: `Email Marketing | Personalized Strategies | ${COMPANY_NAME}`,
      twitterDescription:
        'Create email campaigns that convert: visual design, responsive HTML development, automation, and intelligent segmentation.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Email Campaigns that Connect and Convince',
      description:
        'We create email marketing strategies with impactful designs and precise segmentation to enhance your communication and customer loyalty.'
    },
    description: {
      title: 'Messages that Reach, Designs that Impact',
      description:
        'We handle the design and HTML development of your campaigns, ensuring compatibility across all devices and email clients.',
      description2:
        'Additionally, we implement automated and segmented strategies using platforms like Mailchimp, ensuring every message reaches the right audience at the right time.'
    },
    features: {
      title: 'What Does Our Service Include?',
      items: [
        {
          title: 'Email Design and Layout',
          description:
            'We design visual pieces aligned with your brand and develop them in HTML optimized for all devices and email clients.'
        },
        {
          title: 'Platform Setup',
          description:
            'We implement and configure tools like Mailchimp to centralize your campaigns and audiences.'
        },
        {
          title: 'Workflow Automation',
          description:
            'We create automated workflows like welcome emails, abandoned carts, or recurring newsletters to maintain contact with your audience.'
        },
        {
          title: 'Audience Segmentation',
          description:
            'We segment your contact lists based on behavior, interests, or demographics to improve open rates and conversions.'
        },
        {
          title: 'Analytics and Reporting',
          description:
            'We analyze the performance of each campaign (opens, clicks, conversions) to optimize future email sends.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Communication Brief',
        description:
          'We define objectives, tone, frequency, and content type to be sent according to your business strategy.'
      },
      {
        title: 'Email Design and Development',
        description:
          'We create the visual design and develop it in responsive HTML to ensure proper viewing.'
      },
      {
        title: 'Implementation in Mailchimp',
        description:
          'We upload and configure the campaign, segment the audience, and prepare the send or automation.'
      },
      {
        title: 'Send, Measure, and Optimize',
        description:
          'We launch the campaign, measure the results, and make continuous improvements to increase its effectiveness.'
      }
    ],
    recentWorks: {
      title: 'High-Impact Campaigns',
      description:
        'Explore some of our email marketing designs that have achieved high open rates and conversions.'
    },
    callToAction: {
      title: 'Want to Communicate Better with Your Audience?',
      description:
        'We create visual, functional emails with measurable results. Let’s start your next email marketing campaign today.',
      textButton: 'I want an effective campaign'
    }
  }
})
