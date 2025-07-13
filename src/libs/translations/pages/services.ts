import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import {
  businessPersonLookingFinanceGraphs,
  handHoldingCardLaptop,
  homepageLaptop,
  manCheckingHisEmailLaptop,
  nutritionalCounterApp,
  programmingWithPerson,
  searchBar,
  viewManWorkingDesk
} from '@Constants/backgroundImages'
import { TLanguageKey } from '@Types/languages'
import { StaticImageData } from 'next/image'

export type TLanguageServiceValue = {
  title: string
  slug: string
  description: string
}

export type TLanguageService = {
  [key in TLanguageKey]: TLanguageServiceValue
}

export interface IService {
  id: string
  language: TLanguageService
  image: StaticImageData
}

export const services: IService[] = [
  {
    id: 'web-design',
    image: homepageLaptop.sm,
    language: {
      [ES]: {
        title: 'Desarrollo de páginas web',
        description: 'Sitios web modernos, rápidos y personalizados.',
        slug: 'desarrollo-de-paginas-web'
      },
      [EN]: {
        title: 'Web Design',
        description: 'Modern, fast, and personalized websites.',
        slug: 'web-design'
      },
      [DE]: {
        title: 'Webdesign',
        description: 'Moderne, schnelle und personalisierte Websites.',
        slug: 'webdesign'
      },
      [FR]: {
        title: 'Conception de sites web',
        description: 'Sites web modernes, rapides et personnalisés.',
        slug: 'conception-de-sites-web'
      },
      [IT]: {
        title: 'Progettazione web',
        description: 'Siti web moderni, veloci e personalizzati.',
        slug: 'progettazione-web'
      },
      [JA]: {
        title: 'ウェブデザイン',
        description: 'モダンで高速、カスタマイズ可能なウェブサイト。',
        slug: 'web-design'
      },
      [KO]: {
        title: '웹 디자인',
        description: '현대적이고 빠르며 개인화된 웹사이트.',
        slug: 'web-design'
      },
      [PT]: {
        title: 'Design de sites web',
        description: 'Sites web modernos, rápidos e personalizados.',
        slug: 'design-de-sites-web'
      },
      [ZH]: {
        title: '网页设计',
        description: '现代、快速且个性化的网站。',
        slug: 'wangye-sheji'
      }
    }
  },
  {
    id: 'eCommerce',
    image: handHoldingCardLaptop.sm,
    language: {
      [ES]: {
        title: 'Ecommerce web',
        description: 'Tiendas online seguras, escalables.',
        slug: 'ecommerce'
      },
      [EN]: {
        title: 'Ecommerce web',
        description: 'Secure, scalable online stores.',
        slug: 'ecommerce'
      },
      [DE]: {
        title: 'Ecommerce web',
        description: 'Sichere, skalierbare Online-Shops.',
        slug: 'ecommerce'
      },
      [FR]: {
        title: 'Ecommerce web',
        description: 'Magasins en ligne sécurisés et évolutifs.',
        slug: 'ecommerce'
      },
      [IT]: {
        title: 'Ecommerce web',
        description: 'Negozi online sicuri e scalabili.',
        slug: 'ecommerce'
      },
      [JA]: {
        title: 'ECサイト',
        description: '安全で拡張可能なオンラインストア。',
        slug: 'ecommerce'
      },
      [KO]: {
        title: '이커머스',
        description: '안전하고 확장 가능한 온라인 쇼핑몰.',
        slug: 'ecommerce'
      },
      [PT]: {
        title: 'Ecommerce web',
        description: 'Lojas online seguras e escaláveis.',
        slug: 'ecommerce'
      },
      [ZH]: {
        title: '电商网站',
        description: '安全、可扩展的电商网站。',
        slug: 'dianzi-shangwu'
      }
    }
  },
  {
    id: 'software-development',
    image: programmingWithPerson.sm,
    language: {
      [ES]: {
        title: 'Desarrollo de Software',
        description: 'Soluciones digitales adaptadas a tu negocio.',
        slug: 'desarrollo-de-software'
      },
      [EN]: {
        title: 'Software Development',
        description: 'Digital solutions tailored to your business.',
        slug: 'software-development'
      },
      [DE]: {
        title: 'Softwareentwicklung',
        description:
          'Digitale Lösungen, die auf Ihr Geschäft zugeschnitten sind.',
        slug: 'softwareentwicklung'
      },
      [FR]: {
        title: 'Développement de logiciels',
        description: 'Solutions numériques adaptées à votre entreprise.',
        slug: 'developpement-de-logiciels'
      },
      [IT]: {
        title: 'Sviluppo Software',
        description: 'Soluzioni digitali su misura per il tuo business.',
        slug: 'sviluppo-software'
      },
      [JA]: {
        title: 'ソフトウェア開発',
        description: 'ビジネスに合わせたデジタルソリューション。',
        slug: 'sofutowea-kaihatsu'
      },
      [KO]: {
        title: '소프트웨어 개발',
        description: '비즈니스에 맞춘 디지털 솔루션.',
        slug: 'software-gaebal'
      },
      [PT]: {
        title: 'Desenvolvimento de Software',
        description: 'Soluções digitais adaptadas ao seu negócio.',
        slug: 'desenvolvimento-de-software'
      },
      [ZH]: {
        title: '软件开发',
        description: '为您的业务量身定制的数字解决方案。',
        slug: 'ruanjian-kaifa'
      }
    }
  },
  {
    id: 'mobile-apps',
    image: nutritionalCounterApp.sm,
    language: {
      [ES]: {
        title: 'Aplicaciones móviles',
        description: 'Apps funcionales, para iOS y Android.',
        slug: 'aplicaciones-moviles'
      },
      [EN]: {
        title: 'Mobile Apps',
        description: 'Functional apps for iOS and Android.',
        slug: 'mobile-apps'
      },
      [DE]: {
        title: 'Mobile Apps',
        description: 'Funktionale Apps für iOS und Android.',
        slug: 'mobile-apps'
      },
      [FR]: {
        title: 'Applications mobiles',
        description: 'Applications fonctionnelles pour iOS et Android.',
        slug: 'applications-mobiles'
      },
      [IT]: {
        title: 'Applicazioni mobili',
        description: 'App funzionali per iOS e Android.',
        slug: 'applicazioni-mobili'
      },
      [JA]: {
        title: 'モバイルアプリ',
        description: 'iOSとAndroid向けの機能的なアプリ。',
        slug: 'mobairu-apuri'
      },
      [KO]: {
        title: '모바일 앱',
        description: 'iOS 및 Android용 기능성 앱.',
        slug: 'mobile-apps'
      },
      [PT]: {
        title: 'Aplicativos móveis',
        description: 'Apps funcionais para iOS e Android.',
        slug: 'aplicativos-moveis'
      },
      [ZH]: {
        title: '移动应用',
        description: '适用于iOS和Android的功能性应用。',
        slug: 'yidong-yingyong'
      }
    }
  },
  {
    id: 'marketing-digital',
    image: businessPersonLookingFinanceGraphs.sm,
    language: {
      [ES]: {
        title: 'Marketing Digital',
        description: 'Estrategias que impulsan tu marca y ventas.',
        slug: 'marketing-digital'
      },
      [EN]: {
        title: 'Digital Marketing',
        description: 'Strategies that boost your brand and sales.',
        slug: 'digital-marketing'
      },
      [DE]: {
        title: 'Digitales Marketing',
        description: 'Strategien, die Ihre Marke und Verkäufe ankurbeln.',
        slug: 'digitales-marketing'
      },
      [FR]: {
        title: 'Marketing Digital',
        description: 'Stratégies qui boostent votre marque et vos ventes.',
        slug: 'marketing-digital'
      },
      [IT]: {
        title: 'Marketing Digitale',
        description: 'Strategie che potenziano il tuo marchio e le vendite.',
        slug: 'marketing-digitale'
      },
      [JA]: {
        title: 'デジタルマーケティング',
        description: 'ブランドと売上を向上させる戦略。',
        slug: 'dejitaru-maaketingu'
      },
      [KO]: {
        title: '디지털 마케팅',
        description: '브랜드와 판매를 촉진하는 전략.',
        slug: 'digital-marketing'
      },
      [PT]: {
        title: 'Marketing Digital',
        description: 'Estratégias que impulsionam sua marca e vendas.',
        slug: 'marketing-digital'
      },
      [ZH]: {
        title: '数字营销',
        description: '推动您的品牌和销售的策略。',
        slug: 'shuzi-yingxiao'
      }
    }
  },
  {
    id: 'seo',
    image: searchBar.sm,
    language: {
      [ES]: {
        title: 'SEO',
        description: 'Posiciona tu negocio en los primeros resultados.',
        slug: 'seo'
      },
      [EN]: {
        title: 'SEO',
        description: 'Rank your business in top search results.',
        slug: 'seo'
      },
      [DE]: {
        title: 'SEO',
        description:
          'Positionieren Sie Ihr Geschäft in den Top-Suchergebnissen.',
        slug: 'seo'
      },
      [FR]: {
        title: 'SEO',
        description:
          'Positionnez votre entreprise dans les premiers résultats.',
        slug: 'seo'
      },
      [IT]: {
        title: 'SEO',
        description: 'Posiziona la tua attività nei primi risultati.',
        slug: 'seo'
      },
      [JA]: {
        title: 'SEO',
        description: 'ビジネスをトップ検索結果にランクインさせる。',
        slug: 'seo'
      },
      [KO]: {
        title: 'SEO',
        description: '비즈니스를 상위 검색 결과에 노출시키세요.',
        slug: 'seo'
      },
      [PT]: {
        title: 'SEO',
        description: 'Posicione seu negócio nos primeiros resultados.',
        slug: 'seo'
      },
      [ZH]: {
        title: '搜索引擎优化',
        description: '将您的业务排名在搜索结果的前列。',
        slug: 'sousuo-yinqing-youhua'
      }
    }
  },
  {
    id: 'ux-ui-design',
    image: viewManWorkingDesk.sm,
    language: {
      [ES]: {
        title: 'Diseño UX/UI',
        description: 'Experiencias digitales centradas en el usuario.',
        slug: 'diseno-ux-ui'
      },
      [EN]: {
        title: 'UX/UI Design',
        description: 'User-centered digital experiences.',
        slug: 'ux-ui-design'
      },
      [DE]: {
        title: 'UX/UI Design',
        description: 'Benutzerzentrierte digitale Erlebnisse.',
        slug: 'ux-ui-design'
      },
      [FR]: {
        title: 'Design UX/UI',
        description: 'Expériences numériques centrées sur l’utilisateur.',
        slug: 'design-ux-ui'
      },
      [IT]: {
        title: 'Design UX/UI',
        description: 'Esperienze digitali incentrate sull’utente.',
        slug: 'design-ux-ui'
      },
      [JA]: {
        title: 'UX/UIデザイン',
        description: 'ユーザー中心のデジタル体験。',
        slug: 'ux-ui-dezain'
      },
      [KO]: {
        title: 'UX/UI 디자인',
        description: '사용자 중심의 디지털 경험.',
        slug: 'ux-ui-design'
      },
      [PT]: {
        title: 'Design UX/UI',
        description: 'Experiências digitais centradas no usuário.',
        slug: 'design-ux-ui'
      },
      [ZH]: {
        title: '用户体验/界面设计',
        description: '以用户为中心的数字体验。',
        slug: 'yonghu-jingmian-sheji'
      }
    }
  },
  {
    id: 'email-marketing',
    image: manCheckingHisEmailLaptop.sm,
    language: {
      [ES]: {
        title: 'Email marketing',
        description: 'Campañas que conectan con tus clientes.',
        slug: 'email-marketing'
      },
      [EN]: {
        title: 'Email Marketing',
        description: 'Campaigns that connect with your customers.',
        slug: 'email-marketing'
      },
      [DE]: {
        title: 'E-Mail-Marketing',
        description: 'Kampagnen, die mit Ihren Kunden verbinden.',
        slug: 'e-mail-marketing'
      },
      [FR]: {
        title: 'Email Marketing',
        description: 'Campagnes qui connectent avec vos clients.',
        slug: 'email-marketing'
      },
      [IT]: {
        title: 'Email Marketing',
        description: 'Campagne che connettono con i tuoi clienti.',
        slug: 'email-marketing'
      },
      [JA]: {
        title: 'メールマーケティング',
        description: '顧客とつながるキャンペーン。',
        slug: 'meeru-maaketingu'
      },
      [KO]: {
        title: '이메일 마케팅',
        description: '고객과 연결되는 캠페인.',
        slug: 'email-marketing'
      },
      [PT]: {
        title: 'Email Marketing',
        description: 'Campanhas que conectam com seus clientes.',
        slug: 'email-marketing'
      },
      [ZH]: {
        title: '电子邮件营销',
        description: '与客户连接的营销活动。',
        slug: 'dianzi-youjian-yingxiao'
      }
    }
  }
]
