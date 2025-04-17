import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const uxUiJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.UX_UI,
  title: 'UX/UIデザイン',
  descriptionLite:
    '魅力的で使いやすいインターフェースを通じて、ユーザー体験を変革します。フローの簡素化とインタラクションの改善に重点を置いています。',
  path: `${servicesMenu.path}/ux-ui`,
  slug: 'ux-ui',
  pageSections: {
    metaTag: {
      title: `UX/UIデザイン | ${COMPANY_NAME}`,
      description:
        '魅力的で機能的なインターフェースを通じて、ユーザー体験を変革します。フローを簡素化し、インタラクションを改善します。',
      keywords: [
        'UXデザイン',
        'UIデザイン',
        'ユーザー体験',
        'インターフェースデザイン',
        'インタラクティブプロトタイプ',
        'ウェブデザイン',
        'レスポンシブデザイン',
        'UX/UI最適化'
      ],
      ogTitle: `UX/UIデザイン | ${COMPANY_NAME}`,
      ogDescription:
        '魅力的で機能的なUX/UIデザインで、製品とのインタラクションを最適化し、ユーザー体験を向上させます。',
      ogImage: coverImage,
      twitterTitle: `UX/UIデザイン | ${COMPANY_NAME}`,
      twitterDescription:
        'シンプルさと効果を重視したUX/UIデザインで、製品とのインタラクションを変革します。',
      twitterImage: coverImage
    },
    hero: {
      title: '創造的なUX/UIデザイン',
      description:
        'ユーザー体験を向上させるデザインソリューションを作成し、フローを簡素化し、製品やサービスとのインタラクションを最適化します。'
    },
    description: {
      title: 'カスタマイズされたUX/UIソリューション',
      description:
        'ビジネスフローの深い理解に基づいて、ユーザーとのインタラクションを変革するUX/UIソリューションを提案し、各ステップを簡素化し、全体的な体験を向上させます。',
      description2:
        'コンセプトから最終デザインまで、私たちのアプローチは、最終ユーザーにとって明確で直感的でアクセスしやすい体験を作成することに焦点を当てています。これはあなたのビジネス目標に合わせています。'
    },
    features: {
      title: '私たちのサービスには何が含まれていますか？',
      items: [
        {
          title: 'フローの調査と分析',
          description:
            '現在のビジネスフローを調査し、ユーザー体験を簡素化するための改善ポイントと機会を特定します。'
        },
        {
          title: '機能的なインターフェースデザイン',
          description:
            '視覚的に魅力的で、ブランドのアイデンティティを反映し、スムーズでフリクションのないナビゲーションを提供するインターフェースを作成します。'
        },
        {
          title: 'インタラクティブプロトタイプ',
          description:
            '提案されたソリューションを実装前に検証するためにインタラクティブなプロトタイプを設計し、フローが効率的で使いやすいことを確認します。'
        }
      ]
    },
    flowWork: [
      {
        title: 'ビジネスの調査と理解',
        description:
          'あなたのビジネスに深く関わり、目標と現在のフローを理解し、ユーザー体験を最適化する方法を探ります。'
      },
      {
        title: 'フローの分析とUXソリューションの提案',
        description:
          '作業フローを評価し、ナビゲーションを容易にするUXソリューションを提案し、障害を取り除き、インタラクションの効率を最大化します。'
      },
      {
        title: '視覚デザインとプロトタイプ',
        description:
          'ブランドのアイデンティティに合わせた視覚的なデザインを作成し、フローをテストおよび調整するためのインタラクティブなプロトタイプを開発します。'
      },
      {
        title: '検証と洗練',
        description:
          'ユーザーとの検証セッションを実施し、提案されたデザインが直感的で期待に応えていることを確認し、フィードバックに基づいて詳細を洗練します。'
      }
    ],
    recentWorks: {
      title: '最近のプロジェクト',
      description:
        '私たちが手掛けたプロジェクトの一部をご覧ください。シンプルさと効果的なフローに焦点を当てたデザインを通じてユーザー体験を向上させました。'
    },
    callToAction: {
      title: 'ユーザー体験を変革する準備はできましたか？',
      description:
        'あなたのプロセスを簡素化し、製品とのインタラクションを改善するユーザー体験を作り上げるお手伝いをさせてください。次のUX/UIデザインプロジェクトでどのように協力できるかを話し合いましょう。',
      textButton: 'UX/UIプロジェクトを始める'
    }
  }
})
