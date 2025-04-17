import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: '이메일 마케팅',
  descriptionLite:
    '맞춤형 이메일 캠페인을 통해 고객과 직접적이고 효과적으로 연결됩니다.',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `이메일 마케팅 | 효과적인 캠페인 | ${COMPANY_NAME}`,
      description:
        'HTML 반응형, 자동화 및 정밀한 세그먼트를 사용하여 맞춤형 이메일 마케팅 캠페인을 설계하고 개발합니다.',
      ogTitle: `이메일 마케팅 | 효과적인 캠페인 | ${COMPANY_NAME}`,
      ogDescription:
        '디자인되고 자동화된, 세그먼트화된 이메일 캠페인으로 적시에 오디언스와 연결하세요.',
      ogImage: coverImage,
      twitterTitle: `이메일 마케팅 | 맞춤형 전략 | ${COMPANY_NAME}`,
      twitterDescription:
        '변환을 촉진하는 이메일 마케팅 캠페인 생성: 시각적 디자인, HTML 반응형 개발, 자동화 및 스마트 세그먼트화.',
      twitterImage: coverImage
    },
    hero: {
      title: '연결되고 설득력 있는 이메일 캠페인',
      description:
        '강력한 디자인과 정밀한 세그먼트를 통해 고객과의 커뮤니케이션과 충성도를 향상시키는 이메일 마케팅 전략을 만듭니다.'
    },
    description: {
      title: '전달되는 메시지, 인상적인 디자인',
      description:
        '귀하의 캠페인을 위한 HTML 디자인과 개발을 담당하며, 모든 디바이스와 이메일 클라이언트에서 호환성을 보장합니다.',
      description2:
        '또한 Mailchimp와 같은 플랫폼을 사용하여 자동화 및 세그먼트화 전략을 구현하여 각 메시지가 적절한 타이밍에 올바른 오디언스에게 전달되도록 합니다.'
    },
    features: {
      title: '우리 서비스에는 무엇이 포함되어 있나요?',
      items: [
        {
          title: '이메일 디자인 및 레이아웃',
          description:
            '귀하의 브랜드에 맞는 시각적 요소를 디자인하고, 모든 디바이스와 이메일 클라이언트에서 최적화된 HTML로 개발합니다.'
        },
        {
          title: '플랫폼 설정',
          description:
            'Mailchimp와 같은 도구를 구현하고 설정하여 캠페인과 오디언스를 중앙에서 관리합니다.'
        },
        {
          title: '자동화된 플로우',
          description:
            '웰컴 이메일, 장바구니 이탈, 정기 뉴스레터 등 자동화된 플로우를 만들어 오디언스와의 접촉을 유지합니다.'
        },
        {
          title: '오디언스 세그먼트화',
          description:
            '행동, 관심사 또는 인구 통계를 기준으로 연락처 목록을 세그먼트화하여 개방률과 전환율을 높입니다.'
        },
        {
          title: '측정 및 보고서',
          description:
            '각 캠페인의 성과(개봉, 클릭, 전환)를 분석하여 향후 배포를 최적화합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '커뮤니케이션 브리핑',
        description:
          '비즈니스 전략에 맞게 목표, 톤, 빈도 및 보낼 콘텐츠 유형을 정의합니다.'
      },
      {
        title: '이메일 디자인 및 개발',
        description:
          '시각적 디자인을 생성하고 HTML 반응형으로 개발하여 정확한 표시를 보장합니다.'
      },
      {
        title: 'Mailchimp에 구현',
        description:
          '캠페인을 업로드하고 설정하며, 오디언스를 세그먼트화하고 발송 또는 자동화를 준비합니다.'
      },
      {
        title: '발송, 측정 및 최적화',
        description:
          '캠페인을 시작하고, 결과를 측정하며, 효과를 향상시키기 위해 지속적으로 개선합니다.'
      }
    ],
    recentWorks: {
      title: '고효율 캠페인',
      description:
        '높은 개방률과 전환율을 달성한 이메일 마케팅 디자인 몇 가지를 확인해보세요.'
    },
    callToAction: {
      title: '귀하의 오디언스와 더 나은 소통을 원하시나요?',
      description:
        '시각적이고 기능적인 이메일을 생성하여 결과를 도출합니다. 오늘부터 귀하의 다음 이메일 마케팅 캠페인을 시작합시다.',
      textButton: '효과적인 캠페인을 원합니다'
    }
  }
})
