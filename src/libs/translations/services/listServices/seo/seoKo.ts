import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoKo = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'SEO 최적화',
  descriptionLite:
    '검색 엔진에서 귀하의 웹사이트 가시성을 높여 더 많은 유기적 트래픽을 유도합니다.',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `SEO 최적화 | ${COMPANY_NAME}`,
      description:
        '검색 엔진에서 귀하의 웹사이트 가시성을 높여 더 많은 유기적 트래픽을 유도합니다.',
      keywords: [
        'SEO',
        '검색 엔진 최적화',
        '웹사이트 포지셔닝',
        '기술적 SEO',
        '온페이지 SEO',
        '키워드 분석',
        '로컬 SEO',
        'SEO 리포트'
      ],
      ogTitle: `SEO 최적화 | ${COMPANY_NAME}`,
      ogDescription:
        '귀하의 웹사이트가 검색 엔진에서 더 높은 순위를 차지할 수 있도록 도와드립니다.',
      ogImage: coverImage,
      twitterTitle: `SEO 최적화 | ${COMPANY_NAME}`,
      twitterDescription:
        '맞춤형 SEO 서비스로 온라인 가시성을 높이고 유기적 트래픽을 향상시키세요.',
      twitterImage: coverImage
    },
    hero: {
      title: '가장 먼저 발견되세요',
      description:
        '귀하의 온라인 존재감을 최적화하여 제품과 서비스가 검색 결과 상위에 노출되도록 합니다.'
    },
    description: {
      title: '기술적 SEO 및 콘텐츠 SEO',
      description:
        '웹사이트의 기술적 성능을 점검하고 관련 키워드를 기반으로 콘텐츠를 최적화합니다.',
      description2:
        '우리는 유기적 트래픽을 늘리고 Google과 같은 검색 엔진에서 브랜드 순위를 향상시키는 것을 목표로 합니다.'
    },
    features: {
      title: '무엇을 제공하나요?',
      items: [
        {
          title: '기술적 SEO 점검',
          description:
            '사이트의 기술적 상태를 분석합니다: 속도, 구조, 태그, URL, 리디렉션, 인덱싱 등.'
        },
        {
          title: '온페이지 최적화',
          description:
            '제목, 메타 설명, 헤딩 구조, 내부 링크를 베스트 프랙티스에 맞게 최적화합니다.'
        },
        {
          title: '키워드 분석',
          description:
            '귀사의 비즈니스에 가장 관련성 높은 키워드를 식별하고 콘텐츠에 자연스럽게 통합합니다.'
        },
        {
          title: '로컬 SEO (선택 사항)',
          description:
            '로컬 비즈니스의 경우 지도, 디렉토리, 위치 기반 검색 결과에서 가시성을 향상시킵니다.'
        },
        {
          title: '모니터링 및 리포트',
          description:
            '유기적 트래픽, 키워드 순위, 사이트 성장 등을 포함한 주요 지표에 대한 리포트를 제공합니다.'
        }
      ]
    },
    flowWork: [
      {
        title: '초기 진단',
        description:
          '웹사이트를 분석하여 기술적 또는 콘텐츠 문제 및 개선 기회를 식별합니다.'
      },
      {
        title: 'SEO 전략 수립',
        description:
          '비즈니스 유형, 타겟 시장, 관련 검색을 기반으로 전략을 설계합니다.'
      },
      {
        title: '지속적인 최적화',
        description:
          '기술적 및 콘텐츠 개선을 실행하고 결과를 추적하여 전략을 조정합니다.'
      },
      {
        title: '성과 제공',
        description:
          '명확한 리포트를 통해 SEO 진행 상황을 공유하며, ROI와 성장을 중점으로 제공합니다.'
      }
    ],
    recentWorks: {
      title: '검증된 SEO 프로젝트',
      description:
        '검색 엔진 결과에서 더 나은 순위를 얻고 광고에 의존하지 않고 트래픽을 증가시킨 고객 사례입니다.'
    },
    callToAction: {
      title: '귀하의 웹사이트를 실질적으로 활용하세요',
      description:
        'Google에서의 가시성을 향상시키고 맞춤형 SEO 전략으로 더 많은 고객을 확보하세요.',
      textButton: '더 상위에 노출되고 싶어요'
    }
  }
})
