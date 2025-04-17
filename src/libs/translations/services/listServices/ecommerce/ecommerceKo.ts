import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: '이커머스',
  descriptionLite:
    '비즈니스 요구에 맞춰 최적화된 맞춤형 온라인 스토어 구축. 결제, 배송, 재고 관리 기능이 통합된 완전한 솔루션을 제공합니다.',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `이커머스 | 온라인 스토어 개발 | ${COMPANY_NAME}`,
      description:
        '매력적인 디자인과 전환율 중심의 기능을 갖춘 맞춤형 온라인 스토어 구축. WooCommerce 또는 완전 맞춤형 개발이 가능합니다.',
      ogTitle: `이커머스 | 온라인 스토어 개발 | ${COMPANY_NAME}`,
      ogDescription:
        '비즈니스에 최적화된 온라인 스토어로 매출을 높이세요. WooCommerce 또는 풀 커스텀 개발을 지원합니다.',
      ogImage: coverImage,
      twitterTitle: `이커머스 | 온라인 스토어 개발 | ${COMPANY_NAME}`,
      twitterDescription:
        '확장성과 수익성을 갖춘 온라인 스토어 구축. 디자인, 기능, 성능이 우수한 이커머스를 제공합니다.',
      twitterImage: coverImage
    },
    hero: {
      title: '맞춤형 이커머스 개발',
      description:
        '직관적인 네비게이션과 아름다운 디자인, 전환 중심의 기능이 결합된 온라인 스토어를 구축하여 판매를 극대화합니다.'
    },
    description: {
      title: '당신의 비즈니스에 최적화된 이커머스 솔루션',
      description:
        '온라인 스토어 기획부터 개발, 운영, 최적화까지 전 과정을 지원합니다. 확장 가능하고 관리하기 쉬운 플랫폼으로 비즈니스를 성장시키세요.',
      description2:
        '**WordPress + WooCommerce** 기반 템플릿 방식과 **완전 맞춤형 개발** 중 선택 가능합니다. 완전 맞춤형은 기술적인 지식이 있는 경우에 적합합니다.'
    },
    features: {
      title: '포함되는 서비스',
      items: [
        {
          title: '맞춤형 온라인 스토어 디자인 및 개발',
          description:
            '브랜드에 맞춘 고유한 디자인과 사용자 경험을 고려한 스토어를 설계하고 개발합니다.'
        },
        {
          title: '제품 및 재고 관리 시스템',
          description:
            '제품, 가격, 재고 및 프로모션을 쉽게 관리할 수 있는 직관적인 인터페이스를 제공합니다.'
        },
        {
          title: 'Facebook, Google Ads, TikTok 픽셀 통합',
          description:
            '마케팅 추적과 최적화를 위해 주요 플랫폼의 픽셀을 통합해 광고 효과를 분석할 수 있도록 합니다.'
        },
        {
          title: '유지보수 및 업데이트 (옵션)',
          description:
            '보안, 기능 업데이트, 데이터베이스 유지보수 등을 포함한 지속적인 기술 지원을 옵션으로 제공합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '요구사항 분석',
        description:
          '판매 제품, 대상 고객, 결제/배송 방식 등 온라인 스토어에 필요한 모든 요소를 파악하고 정의합니다.'
      },
      {
        title: '디자인 및 프로토타입',
        description:
          '브랜드 정체성에 맞춘 UI/UX 디자인을 설계하고 프로토타입으로 확인 후 개발을 진행합니다.'
      },
      {
        title: '온라인 스토어 개발',
        description:
          'WooCommerce 또는 맞춤형 개발을 통해 빠르고 안정적인 온라인 스토어를 구축합니다.'
      },
      {
        title: '테스트 및 품질 보증',
        description:
          '결제, 장바구니, 제품 관리 등 모든 기능이 완벽히 작동하는지 테스트하고 검증합니다.'
      },
      {
        title: '런칭 및 배포',
        description:
          '보안성과 성능이 보장된 환경에 스토어를 배포하고, 모든 디바이스에서 반응형으로 작동하도록 설정합니다.'
      },
      {
        title: '교육 및 전달',
        description:
          '제품 추가, 재고 조정, 프로모션 설정 등 실제 운영에 필요한 기능들을 고객에게 교육합니다.'
      },
      {
        title: '지속적인 지원 및 유지보수 (옵션)',
        description:
          '필요 시 기술 지원, 기능 업데이트 및 사이트 최적화를 통해 비즈니스 지속 성장을 지원합니다.'
      }
    ],
    recentWorks: {
      title: '최근 프로젝트',
      description:
        '저희가 제작한 이커머스 사례를 확인해보세요. 전략, 디자인, 개발 측면에서 모두 탁월한 결과를 제공합니다.'
    },
    callToAction: {
      title: '지금 온라인 스토어를 시작하세요',
      description:
        '매출을 올릴 수 있는 온라인 스토어, 지금 함께 시작해보세요. 당신의 목표에 맞는 최적의 솔루션을 제공합니다.',
      textButton: '무료 상담 신청'
    }
  }
})
