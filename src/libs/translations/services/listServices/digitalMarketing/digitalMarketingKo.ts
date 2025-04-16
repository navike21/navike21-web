import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: '디지털 마케팅',
  descriptionLite:
    '맞춤형 전략, 효과적인 광고, 강력한 소셜 미디어를 통해 디지털 환경에서 브랜드를 성장시킵니다.',
  path: `${servicesMenu.path}/dijiteol-maketing`,
  slug: 'dijiteol-maketing',
  pageSections: {
    metaTag: {
      title: `디지털 마케팅 | 전략 및 온라인 광고 | ${COMPANY_NAME}`,
      description:
        '디지털 마케팅 전략, 유료 광고, 소셜 미디어 및 최적화된 콘텐츠로 브랜드를 강화하세요. navike21과 함께 측정 가능한 결과를 확인하세요.',
      ogTitle: `디지털 마케팅 | 전략 및 온라인 광고 | ${COMPANY_NAME}`,
      ogDescription:
        '맞춤형 캠페인, 소셜 미디어, 효과적인 광고로 온라인 존재감을 강화하세요. navike21에서 실제 결과를 확인하세요.',
      ogImage: coverImage,
      twitterTitle: `디지털 마케팅 | 온라인 전략 | ${COMPANY_NAME}`,
      twitterDescription:
        '디지털 캠페인, 소셜 미디어, 온라인 광고로 결과를 창출하세요. navike21이 당신의 브랜드를 위해 할 수 있는 일을 확인하세요.',
      twitterImage: coverImage
    },
    hero: {
      title: '결과를 창출하는 디지털 전략',
      description:
        '비즈니스 목표에 맞춘 디지털 캠페인을 설계하고 실행하여 온라인 가시성을 최적화하고 적합한 고객을 유치합니다.'
    },
    description: {
      title: '비즈니스에 맞춘 마케팅',
      description:
        '현재 상황을 분석하고 목표, 예산, 타겟에 맞춘 디지털 마케팅 전략을 세웁니다. 실질적이고 측정 가능한 결과를 창출하는 데 집중합니다.',
      description2:
        '디지털 성장을 위한 파트너로서 캠페인을 지속적으로 모니터링하고 투자 수익률(ROI)을 극대화하기 위해 필요한 조정을 합니다.'
    },
    features: {
      title: '우리 서비스에는 무엇이 포함됩니까?',
      items: [
        {
          title: '디지털 플랫폼 광고',
          description:
            'Google Ads, Meta Ads, TikTok Ads 등에서 유료 캠페인을 관리하여 질 높은 트래픽을 유도하고 전환을 창출합니다.'
        },
        {
          title: '소셜 미디어 관리',
          description:
            '콘텐츠 전략을 작성하고 계정을 관리하여 충성도 높은 커뮤니티를 구축하고 디지털 존재감을 강화합니다.'
        },
        {
          title: '콘텐츠 제작',
          description:
            '그래픽 디자인 및 설득력 있는 텍스트를 작성하여 퍼널의 각 단계에서 타겟 오디언스와 연결합니다.'
        },
        {
          title: '픽셀 및 측정 도구 설정',
          description:
            'Facebook, TikTok, Google Ads, Adobe의 추적 픽셀을 설정하여 캠페인 성과를 정확하게 측정합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '진단 및 목표 설정',
        description:
          '현재 온라인 존재감을 평가하고 비즈니스에 기반한 명확한 디지털 마케팅 목표를 설정합니다.'
      },
      {
        title: '전략적 계획',
        description:
          '사용할 플랫폼, 콘텐츠 유형, 투자 금액 및 캠페인 일정을 정의한 상세한 실행 계획을 만듭니다.'
      },
      {
        title: '캠페인 실행',
        description:
          '전문적인 실행으로 캠페인을 시작하고 적절한 세분화와 창의성을 보장합니다.'
      },
      {
        title: '측정 및 최적화',
        description:
          '결과를 모니터링하고 실시간으로 조정하여 성과를 극대화하고 설정된 목표를 달성합니다.'
      }
    ],
    recentWorks: {
      title: '차이를 만드는 캠페인',
      description:
        '다양한 산업 분야에서 우리의 디지털 전략이 브랜드의 온라인 존재감을 강화한 사례를 확인하세요.'
    },
    callToAction: {
      title: '브랜드를 강화할 준비가 되셨나요?',
      description:
        '당신의 목표에 대해 이야기하고 함께 디지털 마케팅 전략을 만들어 결과를 강화하세요.',
      textButton: '마케팅을 개선하고 싶어요'
    }
  }
})
