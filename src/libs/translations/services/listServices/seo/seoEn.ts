import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoEn = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'SEO Optimization',
  descriptionLite:
    'We improve your website’s visibility in search engines to attract more high-quality organic traffic.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `SEO Optimization | ${COMPANY_NAME}`,
      description:
        'We improve your website’s visibility in search engines to attract more high-quality organic traffic.',
      keywords: [
        'SEO',
        'search engine optimization',
        'web positioning',
        'technical SEO',
        'on-page SEO',
        'keyword analysis',
        'local SEO',
        'SEO reports'
      ],
      ogTitle: `SEO Optimization | ${COMPANY_NAME}`,
      ogDescription:
        'We improve your website ranking so you can appear in the top search engine results.',
      ogImage: coverImage,
      twitterTitle: `SEO Optimization | ${COMPANY_NAME}`,
      twitterDescription:
        'Increase your online visibility and attract more organic traffic with our custom SEO services.',
      twitterImage: coverImage
    },
    hero: {
      title: 'Be Found First',
      description:
        'We optimize your online presence so your products or services appear in top search results.'
    },
    description: {
      title: 'Technical and Content SEO',
      description:
        'We focus on auditing and improving your website’s technical performance while optimizing content based on relevant keywords.',
      description2:
        'Our goal is to increase organic traffic and improve your brand’s ranking on search engines like Google.'
    },
    features: {
      title: 'What’s Included in Our Service?',
      items: [
        {
          title: 'Technical SEO Audit',
          description:
            'We review your website’s technical status: speed, structure, tags, URLs, redirects, indexing, and more.'
        },
        {
          title: 'On-Page Optimization',
          description:
            'We improve titles, meta descriptions, header structure, and internal linking based on best practices.'
        },
        {
          title: 'Keyword Analysis',
          description:
            'We identify the most relevant searches for your business and integrate them naturally into your content.'
        },
        {
          title: 'Local SEO (optional)',
          description:
            'If your business is local, we enhance your presence on maps, directories, and geo-targeted search results.'
        },
        {
          title: 'Monitoring and Reporting',
          description:
            'We provide reports with key metrics like organic traffic, keyword positions, and site performance over time.'
        }
      ]
    },
    flowWork: [
      {
        title: 'Initial Diagnosis',
        description:
          'We analyze your site and identify technical issues, content gaps, and opportunities for improvement.'
      },
      {
        title: 'SEO Strategy',
        description:
          'We design a plan focused on your business type, target market, and relevant searches.'
      },
      {
        title: 'Ongoing Optimization',
        description:
          'We implement technical and content improvements, monitor results, and adjust the strategy as needed.'
      },
      {
        title: 'Results Delivery',
        description:
          'We present your SEO progress through clear reports, focusing on return on investment and growth.'
      }
    ],
    recentWorks: {
      title: 'Projects with Real SEO Results',
      description:
        'We’ve helped businesses climb search rankings and grow traffic without relying solely on paid ads.'
    },
    callToAction: {
      title: 'Let Your Website Work for You',
      description:
        'Increase your visibility on Google and attract more clients with a tailored SEO strategy.',
      textButton: 'I want better rankings'
    }
  }
})
