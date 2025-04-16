import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const customSoftwareServiceJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.CUSTOM_SOFTWARE,
  title: 'カスタムソフトウェア開発',
  descriptionLite:
    '御社の特有のニーズに応じてカスタマイズされたソフトウェアを開発し、業務効率と競争力を向上させます。',
  path: `${servicesMenu.path}/software-kaihatsu`,
  slug: 'software-kaihatsu',
  pageSections: {
    metaTag: {
      title: `カスタムソフトウェア開発 | ${COMPANY_NAME}`,
      description:
        '業務プロセスに完璧に適合するソフトウェアを設計・開発し、スケーラビリティと効率性を実現します。',
      keywords: [
        'カスタムソフトウェア',
        '業務アプリケーション',
        'ソフトウェア開発',
        'オーダーメイドソフト',
        '業務効率化',
        'システム開発',
        '企業向けソフトウェア',
        'クラウドソリューション'
      ],
      ogTitle: `カスタムソフトウェア開発 | ${COMPANY_NAME}`,
      ogDescription:
        '御社の業務ニーズに合わせたソフトウェアを開発し、プロセスの最適化と成長を支援します。',
      ogImage: coverImage,
      twitterTitle: `企業向けカスタムソフトウェア | ${COMPANY_NAME}`,
      twitterDescription:
        'ビジネスプロセスに適したテクノロジーソリューションを提供し、スケーラブルな成長を可能にします。',
      twitterImage: coverImage
    },
    hero: {
      title: '御社専用のソフトウェアを開発します',
      description:
        'ビジネスニーズに合わせたオーダーメイドのソフトウェアで、業務を効率化し、競争力を高めます。'
    },
    description: {
      title: '企業に最適なカスタムソリューション',
      description:
        'デスクトップ、モバイル、または統合型システムであれ、御社に価値をもたらす効率的なソフトウェアを設計・開発します。',
      description2:
        'アジャイルな開発手法で、ニーズに沿った柔軟で保守性の高いソリューションを迅速に提供します。'
    },
    features: {
      title: 'サービス内容',
      items: [
        {
          title: '最適なアーキテクチャ設計',
          description:
            'スケーラビリティ、セキュリティ、パフォーマンスを考慮したシステム構成を提案します。'
        },
        {
          title: 'フルスタック開発',
          description:
            'React、Node.js、.NET、Java、Pythonなどの技術を用いて、フロントエンドからバックエンド、モバイルまで対応します。'
        },
        {
          title: 'APIと外部システム連携',
          description:
            'シームレスなシステム統合を実現するAPIの設計・開発で業務全体を最適化します。'
        },
        {
          title: 'テストと品質保証',
          description:
            '機能性、パフォーマンス、セキュリティのあらゆる側面を厳密に検証し、高品質なソフトウェアを提供します。'
        },
        {
          title: 'クラウド技術の活用',
          description:
            'AWS、Azure、Google Cloudなどを活用し、柔軟性と安定性の高いシステムを構築します。'
        },
        {
          title: 'アジャイル開発',
          description:
            'Scrumなどの手法を取り入れ、継続的に価値を届ける開発体制を構築します。'
        },
        {
          title: '操作研修と引き継ぎ',
          description:
            '導入後に安心して運用できるよう、クライアントチームへの操作説明・トレーニングを行います。'
        },
        {
          title: '導入後サポート（オプション）',
          description:
            '導入後の技術サポートやアップデート、改善対応は別途サポートプランにて承ります。'
        }
      ]
    },
    flowWork: [
      {
        title: '要件定義とヒアリング',
        description:
          'ステークホルダーとの対話を通じて、目的やニーズを明確にし、開発の方向性を定めます。'
      },
      {
        title: 'システム設計と技術選定',
        description:
          '最適なアーキテクチャと使用技術を決定し、効率的かつ拡張性のある設計を行います。'
      },
      {
        title: 'フロントエンド・バックエンド開発',
        description:
          '直感的なUIと堅牢なサーバー処理で、全体としてバランスの取れたアプリケーションを開発します。'
      },
      {
        title: '統合とテスト',
        description:
          '継続的インテグレーションと自動テストにより、品質の高いソフトウェアを安定的に提供します。'
      },
      {
        title: 'デプロイとモニタリング',
        description:
          'クラウド環境へのリリースと稼働後のモニタリングにより、システムの健全性を常に保ちます。'
      },
      {
        title: '納品とトレーニング',
        description:
          '運用マニュアルの提供と実地研修により、安心して導入・利用をスタートできます。'
      },
      {
        title: '保守と継続支援（オプション）',
        description:
          'アップデートや改善対応、障害対応など、運用後の技術サポートをオプションでご提供します。'
      }
    ],
    recentWorks: {
      title: '実績紹介',
      description:
        '多業種のお客様向けに開発したカスタムソフトウェアの事例をご覧ください。'
    },
    callToAction: {
      title: '御社専用ソフトウェアを開発しませんか？',
      description:
        '業務にぴったり合ったシステムをお探しですか？まずはお気軽にご相談ください。',
      textButton: '相談する'
    }
  }
})
