import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const digitalMarketingJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.DIGITAL_MARKETING,
  title: 'デジタルマーケティング',
  descriptionLite:
    'カスタマイズされた戦略、効果的な広告、強力なソーシャルメディアで、デジタル環境であなたのブランドを成長させます。',
  path: `${servicesMenu.path}/dejitaru-maketingu`,
  slug: 'dejitaru-maketingu',
  pageSections: {
    metaTag: {
      title: `デジタルマーケティング | 戦略とオンライン広告 | ${COMPANY_NAME}`,
      description:
        'デジタルマーケティング戦略、支払い広告、ソーシャルメディア、最適化されたコンテンツであなたのブランドを強化します。navike21で測定可能な結果を。',
      ogTitle: `デジタルマーケティング | 戦略とオンライン広告 | ${COMPANY_NAME}`,
      ogDescription:
        'カスタマイズされたキャンペーン、ソーシャルメディア、効果的な広告でオンラインプレゼンスを強化します。navike21で実際の結果を。',
      ogImage: coverImage,
      twitterTitle: `デジタルマーケティング | オンライン戦略 | ${COMPANY_NAME}`,
      twitterDescription:
        'デジタルキャンペーン、ソーシャルメディア、オンライン広告で結果を生み出します。navike21があなたのブランドにできることを発見してください。',
      twitterImage: coverImage
    },
    hero: {
      title: '結果を生み出すデジタル戦略',
      description:
        'ビジネスの目標に合わせたデジタルキャンペーンを設計・実行し、オンラインでの視認性を最適化し、正しい顧客を引き寄せます。'
    },
    description: {
      title: 'あなたのビジネスに合わせたマーケティング',
      description:
        '現在の状況を分析し、あなたの目標、予算、ターゲットに合ったデジタルマーケティング戦略を立てます。実際の影響を生み出し、測定可能な結果を目指します。',
      description2:
        'デジタル成長のパートナーとして、キャンペーンを常に監視し、投資収益率（ROI）を最大化するために必要な調整を行います。'
    },
    features: {
      title: '私たちのサービスには何が含まれていますか？',
      items: [
        {
          title: 'デジタルプラットフォームでの広告',
          description:
            'Google Ads、Meta Ads、TikTok Adsなどで有料キャンペーンを管理し、質の高いトラフィックを引き寄せ、コンバージョンを生成します。'
        },
        {
          title: 'ソーシャルメディア管理',
          description:
            'コンテンツ戦略を作成し、アカウントを管理して忠実なコミュニティを築き、デジタルプレゼンスを強化します。'
        },
        {
          title: 'コンテンツ作成',
          description:
            'グラフィックデザインと説得力のあるテキストを作成し、ファネルの各段階でターゲットオーディエンスとつながります。'
        },
        {
          title: 'ピクセルと測定ツールの設定',
          description:
            'Facebook、TikTok、Google Ads、Adobeの追跡ピクセルを設定し、キャンペーンパフォーマンスを正確に測定します。'
        }
      ]
    },
    flowWork: [
      {
        title: '診断と目標設定',
        description:
          '現在のオンラインプレゼンスを評価し、ビジネスに基づいた明確なデジタルマーケティング目標を設定します。'
      },
      {
        title: '戦略的計画',
        description:
          '使用するプラットフォーム、コンテンツの種類、投資額、キャンペーンのスケジュールを定義した詳細なアクションプランを作成します。'
      },
      {
        title: 'キャンペーン実行',
        description:
          'プロフェッショナルな実行でキャンペーンを立ち上げ、適切なセグメンテーションと適応したクリエイティブを保証します。'
      },
      {
        title: '測定と最適化',
        description:
          '結果を監視し、リアルタイムで調整を行い、パフォーマンスを最大化し、設定された目標を達成します。'
      }
    ],
    recentWorks: {
      title: '違いを生むキャンペーン',
      description:
        'さまざまな業界で、私たちのデジタル戦略がブランドのオンラインプレゼンスを強化したケースを紹介します。'
    },
    callToAction: {
      title: 'あなたのブランドを強化する準備はできましたか？',
      description:
        'あなたの目標について話し合い、一緒にデジタルマーケティング戦略を作成して、あなたの成果を強化しましょう。',
      textButton: 'マーケティングを改善したい'
    }
  }
})
