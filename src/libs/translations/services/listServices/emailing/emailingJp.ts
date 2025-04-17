import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const emailingJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.EMAIL_MARKETING,
  title: 'Eメールマーケティング',
  descriptionLite:
    'パーソナライズされたメールキャンペーンを通じて、顧客と直接的かつ効果的に接続します。',
  path: `${servicesMenu.path}/email-marketing`,
  slug: 'email-marketing',
  pageSections: {
    metaTag: {
      title: `Eメールマーケティング | 効果的なキャンペーン | ${COMPANY_NAME}`,
      description:
        'HTMLレスポンシブ、オートメーション、精密なセグメンテーションを使用してカスタマイズされたEメールマーケティングキャンペーンを設計・開発します。',
      ogTitle: `Eメールマーケティング | 効果的なキャンペーン | ${COMPANY_NAME}`,
      ogDescription:
        'デザインされた、オートメーション化された、セグメント化されたEメールキャンペーンで、タイミングよくオーディエンスと接続しましょう。',
      ogImage: coverImage,
      twitterTitle: `Eメールマーケティング | パーソナライズされた戦略 | ${COMPANY_NAME}`,
      twitterDescription:
        'コンバージョンを促進するEメールマーケティングキャンペーンを作成：視覚デザイン、HTMLレスポンシブ開発、オートメーション、インテリジェントなセグメンテーション。',
      twitterImage: coverImage
    },
    hero: {
      title: 'つながり、説得するEメールキャンペーン',
      description:
        'インパクトのあるデザインと精密なセグメンテーションを使って、あなたのコミュニケーションとロイヤリティを向上させるEメールマーケティング戦略を作成します。'
    },
    description: {
      title: '届くメッセージ、インパクトのあるデザイン',
      description:
        'キャンペーン用のHTMLデザインと開発を行い、すべてのデバイスとメールクライアントでの互換性を保証します。',
      description2:
        'さらに、Mailchimpなどのプラットフォームを使用して自動化およびセグメンテーション戦略を実装し、各メッセージが適切なタイミングでターゲットオーディエンスに届くようにします。'
    },
    features: {
      title: '私たちのサービスには何が含まれていますか？',
      items: [
        {
          title: 'Eメールのデザインとレイアウト',
          description:
            'あなたのブランドに合わせたビジュアルをデザインし、すべてのデバイスとメールクライアントに最適化されたHTMLで開発します。'
        },
        {
          title: 'プラットフォームの設定',
          description:
            'Mailchimpなどのツールを実装および設定し、キャンペーンとオーディエンスを中央で管理します。'
        },
        {
          title: 'フローの自動化',
          description:
            'ウェルカムメール、放棄されたカート、定期的なニュースレターなど、自動化されたフローを作成してオーディエンスとの接触を維持します。'
        },
        {
          title: 'オーディエンスのセグメンテーション',
          description:
            '開封率やコンバージョンを向上させるために、行動、興味、または人口統計に基づいて連絡先リストをセグメント化します。'
        },
        {
          title: '測定とレポート',
          description:
            '各キャンペーンのパフォーマンス（開封、クリック、コンバージョン）を分析し、次回の配信を最適化します。'
        }
      ]
    },
    flowWork: [
      {
        title: 'コミュニケーションブリーフ',
        description:
          'ビジネス戦略に基づいて、目標、トーン、頻度、配信するコンテンツのタイプを定義します。'
      },
      {
        title: 'Eメールのデザインと開発',
        description:
          '視覚的なデザインを作成し、HTMLレスポンシブで開発して正しい表示を保証します。'
      },
      {
        title: 'Mailchimpでの実装',
        description:
          'キャンペーンをアップロードして設定し、オーディエンスをセグメント化して送信または自動化を準備します。'
      },
      {
        title: '送信、測定、最適化',
        description:
          'キャンペーンを開始し、結果を測定し、効果を高めるために継続的に改善を行います。'
      }
    ],
    recentWorks: {
      title: '高インパクトキャンペーン',
      description:
        '開封率とコンバージョン率が高いメールマーケティングデザインのいくつかをご覧ください。'
    },
    callToAction: {
      title: 'オーディエンスとのコミュニケーションを改善したいですか？',
      description:
        '視覚的で機能的なEメールを作成し、結果を得ます。今日からあなたの次のEメールマーケティングキャンペーンを始めましょう。',
      textButton: '効果的なキャンペーンを希望'
    }
  }
})
