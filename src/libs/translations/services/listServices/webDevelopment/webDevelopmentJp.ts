import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const webDevelopmentJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.WEB_DEVELOPMENT,
  title: 'ウェブ開発',
  descriptionLite:
    '現代的で安全、高パフォーマンスなウェブサイトを作成し、競争の激しいデジタル環境で目立ち、引き寄せ、コンバージョンを実現します。',
  path: `${servicesMenu.path}/web-development`,
  slug: 'web-development',
  pageSections: {
    metaTag: {
      title: `ウェブ開発 | ${COMPANY_NAME}`,
      description:
        'パフォーマンス、安全性、ユーザビリティに焦点を当てた、あなたのニーズに合わせたウェブサイトを作成し、デジタル環境で際立たせます。',
      keywords: [
        'ウェブ開発',
        'ウェブサイト',
        'ウェブページ',
        'レスポンシブウェブデザイン',
        'カスタム開発',
        'ウェブ最適化',
        'アダプティブウェブデザイン',
        '現代的なウェブ技術'
      ],
      ogTitle: `ウェブ開発 | ${COMPANY_NAME}`,
      ogDescription:
        '最適化され、ユーザーエクスペリエンス、パフォーマンス、アクセシビリティを重視して設計されたウェブサイトで、オンラインプレゼンスを強化します。',
      ogImage: coverImage,
      twitterTitle: `ウェブ開発 | ${COMPANY_NAME}`,
      twitterDescription:
        '私たちは、ユーザーエクスペリエンスを改善し、ビジネスのデジタルインパクトを最大化する、高パフォーマンスなウェブサイトを開発します。',
      twitterImage: coverImage
    },
    hero: {
      title: 'プロフェッショナルなウェブ開発',
      description:
        '最新のトレンドと技術を駆使して、スピード、安全性、パフォーマンスを考慮したカスタマイズされたウェブサイトで、オンラインプレゼンスを強化します。'
    },
    description: {
      title: 'ビジネスに合わせたウェブソリューション',
      description:
        '要件定義から最終デプロイまで、直感的で堅牢、スケーラブルなウェブ体験を提供します。アジャイルな手法とモダンなツールを使用し、プロジェクトの開始から堅固な基盤を築きます。',
      description2:
        '私たちのアプローチは、技術的な卓越性、アクセシビリティ、効率性に基づいています。ランディングページでも複雑なウェブシステムでも、あなたのサイトが完璧に機能し、ビジネスの成長に合わせてスケールすることを保証します。'
    },
    features: {
      title: '私たちのサービスには何が含まれていますか？',
      items: [
        {
          title: '高パフォーマンスなウェブサイト',
          description:
            'すべての技術的な側面を最適化し、最小の読み込み時間と優れたユーザー体験を提供し、どのデバイスでも安定した結果を出します。'
        },
        {
          title: 'レスポンシブデザイン',
          description:
            'どんな画面サイズでも完璧に表示され、コンピュータからモバイルデバイスまで一貫した体験を提供します。'
        },
        {
          title: 'リソースの最適化',
          description:
            '高度な圧縮技術で画像やファイルのサイズを縮小し、ビジュアル品質や機能性を損なうことなく処理します。'
        }
      ]
    },
    flowWork: [
      {
        title: '戦略的計画',
        description:
          'プロジェクトの目標、重要な機能、開発の明確なロードマップを共に定義します。'
      },
      {
        title: 'デザインとプロトタイピング',
        description:
          '開発を構築するための視覚的ガイドとして機能し、アイデアをコード化する前に検証するためのワイヤーフレームやプロトタイプを作成します。'
      },
      {
        title: '開発と検証',
        description:
          'モダンなツールを使用してサイトを実装し、パフォーマンス、互換性、安定性を確保するために徹底的なテストを行います。'
      },
      {
        title: 'デプロイとサポート',
        description:
          'あなたのサイトを本番環境に公開し、希望に応じて、月次サポートプランを提供して最新の状態、セキュリティ、機能を保ちます。'
      }
    ],
    recentWorks: {
      title: '最近のプロジェクト',
      description:
        '戦略、技術、実行を組み合わせて、優れたウェブ結果を提供した最近のプロジェクトをご紹介します。'
    },
    callToAction: {
      title: '次のウェブプロジェクトを開発する準備はできていますか？',
      description:
        'あなたのニーズについて話し合い、効果的でスケーラブル、ビジネスに合わせたウェブソリューションをどのように構築できるかをご覧ください。',
      textButton: 'プロジェクトについて話しましょう'
    }
  }
})
