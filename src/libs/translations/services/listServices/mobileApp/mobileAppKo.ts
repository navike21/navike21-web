import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: '모바일 애플리케이션',
  descriptionLite:
    '우리는 Android 및 iOS용 맞춤형 앱을 개발하여 매끄럽고 현대적인 경험을 제공합니다.',
  path: `${servicesMenu.path}/mobile-app`,
  slug: 'mobile-app',
  pageSections: {
    metaTag: {
      title: `모바일 애플리케이션 개발 | ${COMPANY_NAME}`,
      description:
        '우리는 Android와 iOS용 맞춤형 앱을 개발하여 성능, 현대적인 디자인 및 탁월한 사용자 경험을 제공합니다.',
      keywords: [
        '모바일 애플리케이션 개발',
        '맞춤형 앱',
        'React Native',
        'Flutter',
        'Android 애플리케이션',
        'iOS 애플리케이션',
        '모바일 UX/UI',
        'App Store 게시',
        '크로스 플랫폼 개발'
      ],
      ogTitle: `맞춤형 모바일 애플리케이션 | ${COMPANY_NAME}`,
      ogDescription:
        '아이디어를 기능적이고 현대적이며 확장 가능한 앱으로 변환하세요. Android 및 iOS용 탁월한 디자인과 성능을 갖춘 모바일 애플리케이션을 만듭니다.',
      ogImage: coverImage,
      twitterTitle: `맞춤형 모바일 애플리케이션 | ${COMPANY_NAME}`,
      twitterDescription:
        '사용자 경험, 속도 및 품질에 중점을 둔 Android 및 iOS용 앱을 개발합니다. 우리와 함께 애플리케이션을 출시하세요.',
      twitterImage: coverImage
    },

    hero: {
      title: '비즈니스를 사용자의 주머니에 넣을 앱',
      description:
        '우리는 성능, 매력적인 디자인 및 완벽한 사용자 경험을 결합한 맞춤형 모바일 애플리케이션을 만듭니다.'
    },
    description: {
      title: '맞춤형 모바일 솔루션',
      description:
        '귀하의 요구를 분석하고, 효과적인 흐름을 설계하며, 확장성, 사용성 및 효율성을 고려한 앱을 개발합니다.',
      description2:
        '내부 서비스부터 상업용 제품까지, 우리는 아이디어 구상, 디자인 및 개발의 모든 과정에서 함께 합니다.'
    },
    features: {
      title: '우리 서비스에는 무엇이 포함되나요?',
      items: [
        {
          title: '모바일 UX/UI 디자인',
          description:
            '접근성과 단순성에 중점을 두고 사용자 인터페이스와 경험을 설계합니다.'
        },
        {
          title: '네이티브 또는 크로스 플랫폼 개발',
          description:
            '프로젝트에 맞는 최적의 기술을 선택합니다: React Native, Flutter 또는 필요한 경우 네이티브 개발.'
        },
        {
          title: 'API 및 백엔드 통합',
          description:
            '앱을 기존 시스템에 연결하거나 새로운 시스템을 구축하여 클라우드 서비스, 데이터베이스 또는 게이트웨이를 통합합니다.'
        },
        {
          title: '테스트 및 품질 관리',
          description:
            '앱이 다양한 디바이스와 환경에서 잘 동작하는지 확인하기 위해 기능 테스트 및 성능 테스트를 수행합니다.'
        },
        {
          title: '앱 스토어 게시',
          description:
            'Google Play Store와 App Store에 앱을 업로드하고 게시하는 과정을 지원합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '탐색 및 분석',
        description:
          '프로젝트 목표를 정의하고 비즈니스 흐름을 이해한 후 적합한 모바일 솔루션을 제시합니다.'
      },
      {
        title: 'UX/UI 프로토타입 설계',
        description:
          '모바일 우선 접근법으로 기능적이고 매력적인 인터페이스를 디자인하고 지속적으로 검증합니다.'
      },
      {
        title: '애플리케이션 개발',
        description:
          '현대적인 기술로 앱을 프로그래밍하고 확장성, 속도 및 성능을 보장합니다.'
      },
      {
        title: '테스트 및 납품',
        description:
          '다양한 환경에서 테스트를 진행하고 오류를 수정한 후 앱을 게시 준비가 완료된 상태로 전달합니다.'
      }
    ],
    recentWorks: {
      title: '경험을 변화시키는 앱',
      description:
        '우리는 사용자와 브랜드, 제품, 서비스를 효율적으로 연결하는 모바일 솔루션을 개발했습니다.'
    },
    callToAction: {
      title: '자신만의 앱을 만들 준비가 되셨나요?',
      description:
        '아이디어를 기능적이고 빠르며 현대적인 애플리케이션으로 변환하세요. 함께 무엇을 만들지 이야기해봅시다.',
      textButton: '맞춤형 앱 원합니다'
    }
  }
})
