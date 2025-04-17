import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'UX/UI 디자인',
  descriptionLite:
    '매력적이고 사용하기 쉬운 인터페이스를 통해 사용자의 경험을 혁신합니다. 흐름을 단순화하고 상호 작용을 개선하는 데 중점을 둡니다.',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `UX/UI 디자인 | ${COMPANY_NAME}`,
      description:
        '매력적이고 기능적인 인터페이스를 통해 사용자의 경험을 혁신합니다. 흐름을 단순화하고 상호 작용을 개선합니다.',
      keywords: [
        'UX 디자인',
        'UI 디자인',
        '사용자 경험',
        '인터페이스 디자인',
        '인터랙티브 프로토타입',
        '웹 디자인',
        '반응형 디자인',
        'UX/UI 최적화'
      ],
      ogTitle: `UX/UI 디자인 | ${COMPANY_NAME}`,
      ogDescription:
        '매력적이고 기능적인 UX/UI 디자인으로 제품과의 상호 작용을 최적화하고 사용자의 경험을 향상시킵니다.',
      ogImage: coverImage,
      twitterTitle: `UX/UI 디자인 | ${COMPANY_NAME}`,
      twitterDescription:
        '단순함과 효율성을 중시하는 UX/UI 디자인을 통해 제품과의 상호 작용을 혁신합니다.',
      twitterImage: coverImage
    },
    hero: {
      title: '창의적인 UX/UI 디자인',
      description:
        '사용자의 경험을 향상시키는 디자인 솔루션을 만들어 흐름을 단순화하고 제품이나 서비스와의 상호 작용을 최적화합니다.'
    },
    description: {
      title: '맞춤형 UX/UI 솔루션',
      description:
        '비즈니스 흐름에 대한 깊은 이해를 바탕으로 사용자와의 상호 작용을 혁신하는 UX/UI 솔루션을 제안하며, 각 단계를 단순화하고 전반적인 경험을 향상시킵니다.',
      description2:
        '아이디어 단계부터 최종 디자인까지, 우리의 접근 방식은 최종 사용자가 직관적이고 접근하기 쉬운 경험을 할 수 있도록 하는 데 중점을 둡니다. 이는 귀사의 비즈니스 목표에 맞추어집니다.'
    },
    features: {
      title: '우리 서비스에는 무엇이 포함되어 있나요?',
      items: [
        {
          title: '플로우 조사 및 분석',
          description:
            '현재 비즈니스 흐름을 조사하고, 사용자 경험을 단순화할 수 있는 개선 지점과 기회를 파악합니다.'
        },
        {
          title: '기능적인 인터페이스 디자인',
          description:
            '브랜드의 아이덴티티를 반영하고 원활한 탐색과 마찰 없는 내비게이션을 보장하는 시각적으로 매력적인 인터페이스를 만듭니다.'
        },
        {
          title: '인터랙티브 프로토타입',
          description:
            '제안된 솔루션을 구현하기 전에 효율적이고 사용하기 쉬운 흐름을 보장하는 인터랙티브 프로토타입을 디자인하여 검증합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '비즈니스 조사 및 이해',
        description:
          '귀사의 비즈니스에 깊이 관여하여 목표와 현재의 흐름을 이해하고 사용자 경험을 최적화할 방법을 모색합니다.'
      },
      {
        title: '흐름 분석 및 UX 솔루션 제안',
        description:
          '작업 흐름을 평가하고 탐색을 용이하게 할 UX 솔루션을 제안하여 장애물을 제거하고 상호 작용의 효율성을 극대화합니다.'
      },
      {
        title: '시각 디자인 및 프로토타입',
        description:
          '브랜드 아이덴티티에 맞춘 시각적 디자인을 생성하고 흐름을 테스트하고 조정할 수 있는 인터랙티브 프로토타입을 개발합니다.'
      },
      {
        title: '검증 및 개선',
        description:
          '사용자와의 검증 세션을 통해 제안된 디자인이 직관적이고 기대에 부합하는지 확인하며, 피드백을 기반으로 세부 사항을 개선합니다.'
      }
    ],
    recentWorks: {
      title: '최근 프로젝트',
      description:
        '우리가 작업한 일부 프로젝트를 소개합니다. 단순성과 효율성을 강조한 디자인을 통해 사용자 경험을 향상시켰습니다.'
    },
    callToAction: {
      title: '사용자 경험을 혁신할 준비가 되셨나요?',
      description:
        '귀하의 프로세스를 단순화하고 제품과의 상호 작용을 개선하는 사용자 경험을 창출하는 데 도움을 드리겠습니다. 다음 UX/UI 디자인 프로젝트에서 어떻게 협력할 수 있을지 이야기해봅시다.',
      textButton: 'UX/UI 프로젝트 시작하기'
    }
  }
})
