import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const ecommerceJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.ECOMMERCE,
  title: 'Eコマース',
  descriptionLite:
    'カスタマイズされたオンラインストアを構築し、ビジネスニーズに合わせて最適化。決済、配送、在庫管理を統合した完全なソリューションを提供します。',
  path: `${servicesMenu.path}/ecommerce`,
  slug: 'ecommerce',
  pageSections: {
    metaTag: {
      title: `Eコマース | オンラインストア開発 | ${COMPANY_NAME}`,
      description:
        '魅力的なデザインとコンバージョン重視の機能を備えた、カスタマイズ可能なオンラインストアを構築。WooCommerceまたはフルカスタムでの開発が可能です。',
      ogTitle: `Eコマース | オンラインストア開発 | ${COMPANY_NAME}`,
      ogDescription:
        'あなたのビジネスに最適なオンラインストアで売上を伸ばしましょう。WooCommerceまたはフルカスタム開発に対応します。',
      ogImage: coverImage,
      twitterTitle: `Eコマース | オンラインストア開発 | ${COMPANY_NAME}`,
      twitterDescription:
        '拡張性と収益性を備えたオンラインストアを構築。デザイン、機能、パフォーマンスに優れたEコマースを提供します。',
      twitterImage: coverImage
    },
    hero: {
      title: 'オーダーメイドのEコマース開発',
      description:
        '直感的なナビゲーション、美しいデザイン、コンバージョンに特化したオンラインストアを構築します。販売向上のための機能をすべて統合。'
    },
    description: {
      title: 'あなたのビジネスに最適なEコマースソリューション',
      description:
        'オンラインショップの立ち上げから運用、最適化まで、包括的なサポートを提供します。管理がしやすく、ビジネスの成長に応じて拡張可能なストアを構築します。',
      description2:
        '開発方法は、**WordPress + WooCommerce** を用いたテンプレートベースと、**完全カスタム開発** の2種類から選べます。フルカスタムをご希望の場合、技術的な知識をお持ちの方に最適です。'
    },
    features: {
      title: 'サービスに含まれる内容',
      items: [
        {
          title: 'カスタムオンラインストアのデザインと開発',
          description:
            'ブランドに合わせたユニークなデザインと、ユーザー体験を重視したオンラインストアを開発します。'
        },
        {
          title: '商品と在庫の管理システム',
          description:
            '直感的でスケーラブルなインターフェースで、商品、価格、在庫、キャンペーンを簡単に管理できます。'
        },
        {
          title: 'Facebook、Google Ads、TikTokピクセルの統合',
          description:
            '広告効果測定のために、主要なプラットフォームのピクセルを統合し、データを活用した最適化を行います。'
        },
        {
          title: '保守・アップデート対応（オプション）',
          description:
            'セキュリティ、データベース、機能のアップデートなど、継続的なメンテナンスをオプションでご提供します。'
        }
      ]
    },
    flowWork: [
      {
        title: '要件定義',
        description:
          '商品内容やターゲット顧客、決済・配送方法など、オンラインショップに必要な全ての要素をヒアリングし、仕様を固めます。'
      },
      {
        title: 'デザインとプロトタイプ作成',
        description:
          'ブランドイメージに合わせたUI/UXデザインを作成し、プロトタイプで確認後に開発へ移行します。'
      },
      {
        title: 'オンラインストアの開発',
        description:
          'WooCommerceや完全カスタム開発など、最適な技術スタックで高性能なストアを構築します。'
      },
      {
        title: 'テストと品質保証',
        description:
          'カート機能、決済処理、商品管理など、すべての機能が正しく動作するか厳密にチェックします。'
      },
      {
        title: '公開と本番環境への移行',
        description:
          'セキュリティとパフォーマンスに優れた本番環境でストアを公開し、レスポンシブ対応も万全です。'
      },
      {
        title: 'トレーニングと納品',
        description:
          '商品追加、キャンペーン設定、在庫管理など、運用に必要な操作をお客様にトレーニングします。'
      },
      {
        title: '継続的なサポートと保守（オプション）',
        description:
          '必要に応じて技術サポートやアップデート、最適化のサービスをご提供します。'
      }
    ],
    recentWorks: {
      title: '最近の制作事例',
      description:
        '私たちが手がけたEコマースプロジェクトの一部をご紹介します。戦略・デザイン・開発で成果を生み出します。'
    },
    callToAction: {
      title: 'オンラインストアを始めましょう',
      description:
        '売上に直結するオンラインストアを一緒に作りませんか？目的に合わせた最適なソリューションを提供します。',
      textButton: '無料相談する'
    }
  }
})
