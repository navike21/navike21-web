import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: '맞춤형 소프트웨어',
  descriptionLite:
    '귀사의 고유한 비즈니스 요구사항에 완벽히 맞는 맞춤형 소프트웨어 솔루션을 개발하여 효율성과 경쟁력을 향상시킵니다.',
  path: `${servicesMenu.path}/mateumhyeong-sopeuteuweeo`,
  slug: 'mateumhyeong-sopeuteuweeo',
  pageSections: {
    metaTag: {
      title: `맞춤형 소프트웨어 개발 | ${COMPANY_NAME}`,
      description:
        '귀사에 딱 맞는 소프트웨어를 개발하여 프로세스를 최적화하고 확장성과 경쟁력을 높입니다.',
      keywords: [
        '맞춤형 소프트웨어',
        '맞춤 개발',
        '기업 솔루션',
        '전용 애플리케이션',
        '비즈니스 소프트웨어',
        '소프트웨어 개발',
        '커스텀 시스템',
        '맞춤형 개발'
      ],
      ogTitle: `맞춤형 소프트웨어 개발 | ${COMPANY_NAME}`,
      ogDescription:
        '귀사의 요구에 맞게 설계된 소프트웨어로 효율적인 운영과 확장 가능한 솔루션을 제공합니다.',
      ogImage: coverImage,
      twitterTitle: `기업을 위한 맞춤형 소프트웨어 | ${COMPANY_NAME}`,
      twitterDescription:
        '귀사만을 위한 효율적이고 확장 가능한 맞춤형 기술 솔루션.',
      twitterImage: coverImage
    },
    hero: {
      title: '맞춤형 소프트웨어 솔루션',
      description:
        '기업의 고유한 요구사항에 맞게 최적화된 소프트웨어를 개발하여 효율적이고 안전한 시스템을 제공합니다.'
    },
    description: {
      title: '귀사를 위한 맞춤형 소프트웨어',
      description:
        '데스크탑, 모바일 또는 통합 시스템 등 다양한 형태의 맞춤형 소프트웨어를 제공하여 비즈니스 운영을 최적화하고 가치를 극대화합니다.',
      description2:
        '유연하고 민첩한 접근 방식을 통해 유지 관리가 쉬운 고품질 소프트웨어를 신속히 제공합니다.'
    },
    features: {
      title: '서비스에 포함되는 기능',
      items: [
        {
          title: '맞춤형 아키텍처 설계',
          description:
            '비즈니스 요구에 따라 보안, 확장성 및 성능을 고려한 아키텍처를 설계합니다.'
        },
        {
          title: '풀스택 개발',
          description:
            '프론트엔드, 백엔드 및 모바일 개발에 특화된 팀이 React, Node.js, .NET, Java, Python 등 다양한 기술을 사용하여 완전한 솔루션을 제공합니다.'
        },
        {
          title: 'API 및 시스템 통합',
          description:
            '다른 시스템 및 서비스와의 연동을 위한 강력한 API를 구현하여 유기적인 상호작용을 가능하게 합니다.'
        },
        {
          title: '테스트 및 QA',
          description:
            '기능, 성능, 보안에 대한 철저한 테스트를 통해 최고의 품질을 보장합니다.'
        },
        {
          title: '클라우드 기술',
          description:
            'AWS, Azure, Google Cloud 등 클라우드 플랫폼을 활용하여 안정적이고 확장 가능한 환경을 제공합니다.'
        },
        {
          title: '애자일 방법론',
          description:
            'Scrum 등 애자일 방법론을 적용하여 유연한 개발과 지속적인 가치 제공을 실현합니다.'
        },
        {
          title: '맞춤형 교육',
          description:
            '소프트웨어 사용 및 유지 관리를 위한 고객 맞춤형 교육을 제공합니다.'
        },
        {
          title: '프로젝트 후 지원 (추가 서비스)',
          description:
            '출시 이후의 지속적인 지원 및 유지보수는 추가 서비스로 제공되며, 필요에 따라 기술적 지원, 업데이트 및 최적화를 포함합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '요구사항 정의',
        description:
          '비즈니스의 요구를 명확히 이해하고 소프트웨어 목표를 함께 정의합니다.'
      },
      {
        title: '시스템 설계 및 아키텍처',
        description:
          '기술 아키텍트를 통해 보안과 성능을 고려한 최적의 기술 구조를 설계합니다.'
      },
      {
        title: '프론트엔드 및 백엔드 개발',
        description:
          '사용자 친화적인 UI와 강력한 서버 기능을 갖춘 시스템을 통합적으로 개발합니다.'
      },
      {
        title: '지속적인 테스트 및 통합',
        description:
          'CI/CD 및 자동화된 테스트를 통해 시스템 품질을 유지하고 오류를 사전에 방지합니다.'
      },
      {
        title: '배포 및 모니터링',
        description:
          '클라우드 환경에 배포하고 성능과 안정성을 위한 지속적인 모니터링을 수행합니다.'
      },
      {
        title: '교육 및 지식 이전',
        description:
          '운영팀이 소프트웨어를 효과적으로 사용할 수 있도록 교육 및 문서를 제공합니다.'
      },
      {
        title: '지속적인 유지보수 (추가 서비스)',
        description:
          '버그 수정, 성능 개선, 기능 확장 등 고객 요구에 따른 유지보수 서비스를 별도로 제공합니다.'
      }
    ],
    recentWorks: {
      title: '최근 프로젝트',
      description:
        '다양한 산업 분야에서 진행한 소프트웨어 프로젝트를 통해 우리 기술력을 확인해 보세요.'
    },
    callToAction: {
      title: '맞춤형 소프트웨어가 필요하신가요?',
      description:
        '귀사만의 요구사항에 완벽히 부합하는 소프트웨어 솔루션을 함께 만들어보세요!',
      textButton: '상담 신청하기'
    }
  }
})
