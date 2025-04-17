import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: '웹 개발',
  descriptionLite:
    '우리는 경쟁이 치열한 디지털 환경에서 두드러지고, 유치하고, 전환할 수 있도록 설계된 현대적이고 안전하며 고성능 웹사이트를 만듭니다.',
  path: `${servicesMenu.path}/web-development`,
  slug: 'web-development',
  pageSections: {
    metaTag: {
      title: `웹 개발 | ${COMPANY_NAME}`,
      description:
        '우리는 성능, 보안 및 사용성에 중점을 두고 귀하의 요구에 맞는 웹사이트를 만들어 디지털 환경에서 돋보이게 만듭니다.',
      keywords: [
        '웹 개발',
        '웹사이트',
        '웹 페이지',
        '반응형 웹 디자인',
        '맞춤 개발',
        '웹 최적화',
        '적응형 웹 디자인',
        '현대적인 웹 기술'
      ],
      ogTitle: `웹 개발 | ${COMPANY_NAME}`,
      ogDescription:
        '사용자 경험을 중시하고 성능과 접근성을 최적화한 웹사이트로 온라인 존재감을 강화하세요.',
      ogImage: coverImage,
      twitterTitle: `웹 개발 | ${COMPANY_NAME}`,
      twitterDescription:
        '우리는 사용자 경험을 개선하고 비즈니스의 디지털 영향을 극대화하는 고성능 웹사이트를 개발합니다.',
      twitterImage: coverImage
    },
    hero: {
      title: '전문적인 웹 개발',
      description:
        '최신 트렌드와 기술을 사용하여 속도, 보안 및 성능을 고려한 맞춤형 웹사이트로 온라인 존재감을 강화합니다.'
    },
    description: {
      title: '비즈니스에 맞는 웹 솔루션',
      description:
        '요구 사항 정의부터 최종 배포까지 직관적이고 견고하며 확장 가능한 웹 경험을 제공합니다. 아자일 방법론과 현대적인 도구를 사용하여 프로젝트가 시작부터 강력한 기반을 갖추도록 합니다.',
      description2:
        '우리는 기술적인 우수성, 접근성 및 효율성에 중점을 둡니다. 랜딩 페이지든 복잡한 웹 시스템이든, 귀하의 사이트가 완벽하게 작동하고 비즈니스와 함께 성장할 준비가 되어 있음을 보장합니다.'
    },
    features: {
      title: '우리 서비스에는 무엇이 포함되나요?',
      items: [
        {
          title: '고성능 웹사이트',
          description:
            '모든 기술적 측면을 최적화하여 로딩 시간을 최소화하고 우수한 사용자 경험을 제공하며 모든 장치에서 안정적인 결과를 얻습니다.'
        },
        {
          title: '반응형 디자인',
          description:
            '귀하의 사이트는 모든 화면 크기에서 완벽하게 표시되며, 컴퓨터에서 모바일 장치까지 일관된 경험을 제공합니다.'
        },
        {
          title: '자원 최적화',
          description:
            '고급 압축 기술을 사용하여 이미지와 파일 크기를 줄이되, 시각적 품질과 기능을 손상시키지 않습니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '전략적 계획',
        description:
          '우리는 프로젝트 목표, 주요 기능 및 명확한 개발 로드맵을 함께 정의합니다.'
      },
      {
        title: '디자인 및 프로토타입',
        description:
          '개발 구조를 위한 시각적 가이드로 작용하며, 아이디어를 코딩하기 전에 확인할 수 있는 와이어프레임 또는 프로토타입을 생성합니다.'
      },
      {
        title: '개발 및 검증',
        description:
          '현대적인 도구를 사용하여 사이트를 구현하고 성능, 호환성 및 안정성을 보장하기 위해 철저한 테스트를 진행합니다.'
      },
      {
        title: '배포 및 지원',
        description:
          '귀하의 사이트를 프로덕션 환경에 게시하고, 원하시면 월간 지원 계획을 제공하여 최신 상태, 보안 및 기능을 유지합니다.'
      }
    ],
    recentWorks: {
      title: '최근 프로젝트',
      description:
        '우리는 전략, 기술 및 실행을 결합하여 뛰어난 웹 결과를 제공한 최근 프로젝트를 소개합니다.'
    },
    callToAction: {
      title: '다음 웹 프로젝트를 개발할 준비가 되셨나요?',
      description:
        '귀하의 요구 사항에 대해 이야기하고 어떻게 효과적이고 확장 가능한 웹 솔루션을 구축할 수 있는지 알아보세요.',
      textButton: '프로젝트에 대해 이야기해봅시다'
    }
  }
})
