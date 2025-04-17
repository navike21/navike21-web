import { COMPANY_NAME } from '@Constants/projectInformation'
import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServiceTranslation } from '@Translations/services/servicesTranslations.types'

export const mobileAppJp = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServiceTranslation => ({
  key: EService.MOBILE_APP,
  title: 'モバイルアプリケーション',
  descriptionLite:
    'AndroidおよびiOS向けにカスタマイズされたアプリを開発し、スムーズでモダンな体験を提供します。',
  path: `${servicesMenu.path}/mobile-applications`,
  slug: 'mobile-applications',
  pageSections: {
    metaTag: {
      title: `モバイルアプリケーションの開発 | ${COMPANY_NAME}`,
      description:
        'AndroidおよびiOS向けにカスタマイズされたアプリを作成し、パフォーマンス、モダンなデザイン、優れたユーザー体験を提供します。',
      keywords: [
        'モバイルアプリ開発',
        'カスタマイズされたアプリ',
        'React Native',
        'Flutter',
        'Androidアプリ',
        'iOSアプリ',
        'モバイルUX/UI',
        'App Store公開',
        'クロスプラットフォーム開発'
      ],
      ogTitle: `カスタマイズされたモバイルアプリ | ${COMPANY_NAME}`,
      ogDescription:
        'あなたのアイデアを機能的でモダンかつ拡張性のあるアプリに変換します。AndroidおよびiOS向けに優れたデザインとパフォーマンスを備えたモバイルアプリを開発します。',
      ogImage: coverImage,
      twitterTitle: `カスタマイズされたモバイルアプリ | ${COMPANY_NAME}`,
      twitterDescription:
        'ユーザー体験、速度、品質に焦点を当てたAndroidおよびiOS向けのアプリを開発します。私たちと一緒にアプリを公開しましょう。',
      twitterImage: coverImage
    },

    hero: {
      title: 'あなたのビジネスをユーザーのポケットに届けるアプリ',
      description:
        'パフォーマンス、魅力的なデザイン、完璧なユーザー体験を兼ね備えたカスタマイズされたモバイルアプリを作成します。'
    },
    description: {
      title: 'カスタマイズされたモバイルソリューション',
      description:
        'あなたのニーズを分析し、効果的なフローを設計し、スケーラビリティ、使いやすさ、効率性を考慮したアプリを開発します。',
      description2:
        '社内向けアプリから商業用製品まで、アイデアの立案、デザイン、開発のすべてのプロセスでサポートします。'
    },
    features: {
      title: '私たちのサービスに含まれるものは？',
      items: [
        {
          title: 'モバイルUX/UIデザイン',
          description:
            'アクセシビリティとシンプルさに焦点を当てて、ビジュアルインターフェースとユーザー体験を作成します。'
        },
        {
          title: 'ネイティブまたはクロスプラットフォーム開発',
          description:
            'プロジェクトに最適な技術を選択します：React Native、Flutter、または必要に応じてネイティブ開発。'
        },
        {
          title: 'APIおよびバックエンドとの統合',
          description:
            'アプリを既存のシステムに接続するか、新しいシステムを作成し、クラウドサービス、データベース、ゲートウェイを統合します。'
        },
        {
          title: 'テストと品質管理',
          description:
            'アプリがさまざまなデバイスやシナリオに適応することを確認するために、機能テストとパフォーマンステストを実施します。'
        },
        {
          title: 'ストアへの公開',
          description:
            'Google PlayストアとApp Storeでのアプリのアップロードと公開のプロセスをサポートします。'
        }
      ]
    },
    flowWork: [
      {
        title: '調査と分析',
        description:
          'プロジェクトの目標を特定し、ビジネスフローを理解し、適切なモバイルソリューションを提案します。'
      },
      {
        title: 'UX/UIプロトタイピング',
        description:
          'モバイルファーストのアプローチで機能的で魅力的なインターフェースをデザインし、継続的に検証します。'
      },
      {
        title: 'アプリの開発',
        description:
          'モダンな技術でアプリをプログラムし、スケーラビリティ、速度、パフォーマンスを確保します。'
      },
      {
        title: 'テストと納品',
        description:
          'さまざまな環境でテストを実施し、バグを修正して、公開の準備が整ったアプリを納品します。'
      }
    ],
    recentWorks: {
      title: '体験を変えるアプリ',
      description:
        '私たちは、ユーザーとブランド、製品、サービスを効果的に結びつけるモバイルソリューションに取り組んできました。'
    },
    callToAction: {
      title: '自分のアプリを持つ準備はできましたか？',
      description:
        'あなたのアイデアを機能的で高速かつモダンなアプリに変えましょう。どんなアプリを作りたいか、話しましょう。',
      textButton: 'カスタマイズされたアプリが欲しい'
    }
  }
})
