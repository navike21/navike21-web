import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const seoJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.SEO,
  title: 'SEO最適化',
  descriptionLite:
    '検索エンジンでのあなたのウェブサイトの可視性を高め、質の高いオーガニックトラフィックを増加させます。',
  path: `${servicesMenu.path}/seo`,
  slug: 'seo',
  pageSections: {
    metaTag: {
      title: `SEO最適化 | ${COMPANY_NAME}`,
      description:
        '検索エンジンでのあなたのウェブサイトの可視性を高め、質の高いオーガニックトラフィックを増加させます。',
      keywords: [
        'SEO',
        '検索エンジン最適化',
        'ウェブサイトのポジショニング',
        'テクニカルSEO',
        'オンページSEO',
        'キーワード分析',
        'ローカルSEO',
        'SEOレポート'
      ],
      ogTitle: `SEO最適化 | ${COMPANY_NAME}`,
      ogDescription:
        '検索エンジンでのあなたのウェブサイトの順位を改善し、上位に表示されるようにします。',
      ogImage: coverImage,
      twitterTitle: `SEO最適化 | ${COMPANY_NAME}`,
      twitterDescription:
        '当社のカスタムSEOサービスで、オンラインでの可視性を高め、オーガニックトラフィックを増やしましょう。',
      twitterImage: coverImage
    },
    hero: {
      title: '一番に見つけてもらおう',
      description:
        'オンラインでの存在感を最適化し、あなたの製品やサービスが検索結果の上位に表示されるようにします。'
    },
    description: {
      title: 'テクニカルSEOとコンテンツSEO',
      description:
        'ウェブサイトの技術的パフォーマンスを監査・改善し、関連するキーワードに基づいてコンテンツを最適化します。',
      description2:
        '私たちの目標は、オーガニックトラフィックを増加させ、Googleなどの検索エンジンでブランドの順位を向上させることです。'
    },
    features: {
      title: '私たちのサービスには何が含まれていますか？',
      items: [
        {
          title: 'テクニカルSEO監査',
          description:
            'サイトの技術的状態を確認します：速度、構造、タグ、URL、リダイレクト、インデックスなど。'
        },
        {
          title: 'オンページ最適化',
          description:
            'タイトル、メタディスクリプション、見出し構造、内部リンクをベストプラクティスに従って改善します。'
        },
        {
          title: 'キーワード分析',
          description:
            'あなたのビジネスにとって最も関連性の高い検索キーワードを特定し、自然な形でコンテンツに統合します。'
        },
        {
          title: 'ローカルSEO（オプション）',
          description:
            'ローカルビジネスの場合、マップ、ディレクトリ、位置情報付き検索結果でのプレゼンスを強化します。'
        },
        {
          title: 'モニタリングとレポート',
          description:
            'オーガニックトラフィック、キーワードの順位、サイトの成長などの主要指標を含むレポートを提供します。'
        }
      ]
    },
    flowWork: [
      {
        title: '初期診断',
        description:
          'ウェブサイトを分析し、技術的・コンテンツ面の問題や改善の機会を特定します。'
      },
      {
        title: 'SEO戦略',
        description:
          'ビジネスの種類、ターゲット市場、関連する検索に基づいた計画を設計します。'
      },
      {
        title: '継続的な最適化',
        description:
          '技術的およびコンテンツ面での改善を実施し、結果を監視しながら必要に応じて戦略を調整します。'
      },
      {
        title: '成果の提供',
        description:
          '明確なレポートを通じてSEOの進捗を報告し、リターンと成長に焦点を当てます。'
      }
    ],
    recentWorks: {
      title: '実績あるSEOプロジェクト',
      description:
        '私たちは企業が検索結果で順位を上げ、広告に頼らずにトラフィックを増やすのを支援してきました。'
    },
    callToAction: {
      title: 'あなたのウェブサイトを働かせよう',
      description:
        'Googleでの可視性を向上させ、カスタムSEO戦略でより多くの顧客を獲得しましょう。',
      textButton: 'もっと上位に表示されたい'
    }
  }
})
