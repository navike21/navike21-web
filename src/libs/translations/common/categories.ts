import {
  CUSTOM_SOFTWARE,
  ECOMMERCE,
  EMAIL_MARKETING,
  LANDING_PAGES,
  MOBILE_APPS,
  SEO_SEM,
  UI_UX_DESIGN,
  WEB_SITES
} from '@Constants/categories'
import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export type TCategory = {
  [key in TLanguageKey]: {
    id: number
    title: string
  }
}

export const categories = {
  [ES]: [
    {
      id: WEB_SITES,
      title: 'Sitios web corporativos',
      description:
        'Desarrollamos sitios web modernos que reflejan la identidad de empresas y profesionales, enfocados en presencia y confianza digital.'
    },
    {
      id: ECOMMERCE,
      title: 'Tiendas online',
      description:
        'Creamos soluciones de comercio electrónico personalizadas para vender productos o servicios de forma efectiva y segura.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'Software a medida',
      description:
        'Desarrollamos sistemas adaptados a las necesidades de tu negocio: gestión interna, automatización de procesos y más.'
    },
    {
      id: MOBILE_APPS,
      title: 'Aplicaciones móviles',
      description:
        'Diseñamos y desarrollamos apps móviles (iOS/Android) centradas en usabilidad, rendimiento y objetivos del negocio.'
    },
    {
      id: 'landing-pages',
      title: 'Landing pages y campañas',
      description:
        'Páginas optimizadas para campañas publicitarias, lanzamientos o generación de leads, con foco en conversión.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'Diseño UI/UX',
      description:
        'Diseño de interfaces claras y atractivas, enfocadas en brindar experiencias intuitivas y funcionales al usuario.'
    },
    {
      id: SEO_SEM,
      title: 'SEO y SEM',
      description:
        'Mejoramos la visibilidad online con estrategias de posicionamiento orgánico (SEO) y campañas de publicidad digital (SEM).'
    },
    {
      id: 'email-marketing',
      title: 'Email marketing',
      description:
        'Diseñamos campañas de correo efectivas para comunicar, fidelizar y promover productos o servicios.'
    }
  ],
  [EN]: [
    {
      id: WEB_SITES,
      title: 'Corporate websites',
      description:
        'We build modern websites that reflect the identity of businesses and professionals, focused on digital presence and trust.'
    },
    {
      id: ECOMMERCE,
      title: 'Online stores',
      description:
        'We create tailored e-commerce solutions to sell products or services effectively and securely.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'Custom software',
      description:
        'We develop systems adapted to your business needs: internal management, process automation, and more.'
    },
    {
      id: MOBILE_APPS,
      title: 'Mobile apps',
      description:
        'We design and build mobile apps (iOS/Android) focused on usability, performance, and business goals.'
    },
    {
      id: 'landing-pages',
      title: 'Landing pages & campaigns',
      description:
        'Optimized pages for advertising campaigns, launches, or lead generation, with a focus on conversion.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'UI/UX Design',
      description:
        'Clear, attractive interface designs focused on delivering intuitive and functional user experiences.'
    },
    {
      id: SEO_SEM,
      title: 'SEO & SEM',
      description:
        'We improve online visibility through SEO strategies and digital advertising campaigns (SEM).'
    },
    {
      id: 'email-marketing',
      title: 'Email marketing',
      description:
        'We design effective email campaigns to communicate, retain customers, and promote products or services.'
    }
  ],
  [DE]: [
    {
      id: WEB_SITES,
      title: 'Unternehmenswebsites',
      description:
        'Wir erstellen moderne Websites, die die Identität von Unternehmen und Fachkräften widerspiegeln – mit Fokus auf digitale Präsenz und Vertrauen.'
    },
    {
      id: ECOMMERCE,
      title: 'Onlineshops',
      description:
        'Wir entwickeln maßgeschneiderte E-Commerce-Lösungen, um Produkte oder Dienstleistungen effektiv und sicher online zu verkaufen.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'Individuelle Softwarelösungen',
      description:
        'Wir entwickeln Systeme, die auf die spezifischen Bedürfnisse deines Unternehmens zugeschnitten sind: interne Verwaltung, Prozessautomatisierung und mehr.'
    },
    {
      id: MOBILE_APPS,
      title: 'Mobile Apps',
      description:
        'Wir konzipieren und entwickeln mobile Apps (iOS/Android) mit Fokus auf Benutzerfreundlichkeit, Leistung und geschäftliche Ziele.'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages & Kampagnen',
      description:
        'Optimierte Seiten für Werbekampagnen, Produkteinführungen oder Lead-Generierung – mit klarem Fokus auf Konversion.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'UI/UX Design',
      description:
        'Klares und ansprechendes Interface-Design für intuitive und funktionale Nutzererlebnisse – sowohl für Web als auch Mobile.'
    },
    {
      id: SEO_SEM,
      title: 'SEO & SEA',
      description:
        'Wir steigern deine Online-Sichtbarkeit durch Suchmaschinenoptimierung (SEO) und bezahlte Onlinewerbung (SEA).'
    },
    {
      id: 'email-marketing',
      title: 'E-Mail-Marketing',
      description:
        'Wir erstellen wirkungsvolle E-Mail-Kampagnen zur Kundenbindung, Kommunikation und Bewerbung deiner Angebote.'
    }
  ],
  [FR]: [
    {
      id: WEB_SITES,
      title: 'Sites web d’entreprise',
      description:
        'Nous créons des sites modernes qui reflètent l’identité des entreprises et des professionnels, en mettant l’accent sur la présence et la confiance numériques.'
    },
    {
      id: ECOMMERCE,
      title: 'Boutiques en ligne',
      description:
        'Solutions e-commerce sur mesure pour vendre des produits ou services en ligne de manière efficace et sécurisée.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'Logiciels sur mesure',
      description:
        'Développement de systèmes adaptés aux besoins de votre activité : gestion interne, automatisation des processus, etc.'
    },
    {
      id: MOBILE_APPS,
      title: 'Applications mobiles',
      description:
        'Conception et développement d’applications mobiles (iOS/Android) axées sur l’ergonomie, la performance et les objectifs business.'
    },
    {
      id: 'landing-pages',
      title: 'Landing pages et campagnes',
      description:
        'Pages optimisées pour les campagnes publicitaires, les lancements ou la génération de leads, centrées sur la conversion.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'Design UI/UX',
      description:
        'Conception d’interfaces claires et attrayantes, orientées vers des expériences utilisateur intuitives et efficaces.'
    },
    {
      id: SEO_SEM,
      title: 'SEO et SEA',
      description:
        'Amélioration de la visibilité en ligne grâce à des stratégies de référencement naturel (SEO) et de publicité digitale (SEA).'
    },
    {
      id: 'email-marketing',
      title: 'Email marketing',
      description:
        'Création de campagnes d’emailing efficaces pour fidéliser, communiquer et promouvoir vos produits ou services.'
    }
  ],
  [IT]: [
    {
      id: WEB_SITES,
      title: 'Siti web aziendali',
      description:
        'Realizziamo siti web moderni che rispecchiano l’identità di aziende e professionisti, con attenzione alla presenza digitale e alla fiducia.'
    },
    {
      id: ECOMMERCE,
      title: 'Negozi online',
      description:
        'Soluzioni e-commerce su misura per vendere prodotti o servizi online in modo efficace e sicuro.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'Software su misura',
      description:
        'Sviluppiamo sistemi personalizzati per le esigenze aziendali: gestione interna, automazione dei processi e altro.'
    },
    {
      id: MOBILE_APPS,
      title: 'App mobili',
      description:
        'Progettiamo e sviluppiamo app mobili (iOS/Android) con focus su usabilità, prestazioni e obiettivi di business.'
    },
    {
      id: 'landing-pages',
      title: 'Landing page e campagne',
      description:
        'Pagine ottimizzate per campagne pubblicitarie, lanci o generazione di contatti, con un focus sulla conversione.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'Design UI/UX',
      description:
        'Design di interfacce chiare e accattivanti, pensate per offrire esperienze intuitive e funzionali.'
    },
    {
      id: SEO_SEM,
      title: 'SEO e SEM',
      description:
        'Miglioriamo la visibilità online attraverso strategie SEO (organiche) e campagne pubblicitarie digitali (SEM).'
    },
    {
      id: 'email-marketing',
      title: 'Email marketing',
      description:
        'Creiamo campagne email efficaci per fidelizzare i clienti, comunicare e promuovere i tuoi prodotti o servizi.'
    }
  ],
  [JA]: [
    {
      id: WEB_SITES,
      title: '企業向けウェブサイト',
      description:
        '企業や専門家のブランドを反映した現代的なウェブサイトを制作し、デジタルでの信頼と存在感を高めます。'
    },
    {
      id: ECOMMERCE,
      title: 'オンラインストア',
      description:
        '製品やサービスを安全かつ効果的に販売するための、カスタマイズされたECソリューションを構築します。'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'カスタムソフトウェア開発',
      description:
        '業務のニーズに合わせたシステムを開発し、社内管理や業務プロセスの自動化などを実現します。'
    },
    {
      id: MOBILE_APPS,
      title: 'モバイルアプリ開発',
      description:
        '使いやすさとパフォーマンスを重視したiOS/Androidアプリを開発し、ビジネス目標の達成を支援します。'
    },
    {
      id: 'landing-pages',
      title: 'ランディングページとキャンペーン',
      description:
        '広告やローンチ、リード獲得に最適化されたページを制作し、高いコンバージョン率を目指します。'
    },
    {
      id: UI_UX_DESIGN,
      title: 'UI/UXデザイン',
      description:
        '明確で魅力的なインターフェースを設計し、直感的で機能的なユーザー体験を提供します。'
    },
    {
      id: SEO_SEM,
      title: 'SEOとSEM',
      description:
        'SEOによる自然検索の最適化と、SEMによるデジタル広告を組み合わせ、オンラインでの認知度を高めます。'
    },
    {
      id: 'email-marketing',
      title: 'メールマーケティング',
      description:
        '効果的なメールキャンペーンを設計し、情報発信、ロイヤルティ強化、商品やサービスの促進を行います。'
    }
  ],
  [KO]: [
    {
      id: WEB_SITES,
      title: '기업 웹사이트',
      description:
        '기업 및 전문가의 정체성을 반영한 현대적인 웹사이트를 제작하여 신뢰성과 디지털 존재감을 높입니다.'
    },
    {
      id: ECOMMERCE,
      title: '온라인 쇼핑몰',
      description:
        '제품 또는 서비스를 안전하고 효율적으로 판매할 수 있는 맞춤형 전자상거래 솔루션을 제공합니다.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: '맞춤형 소프트웨어',
      description:
        '내부 관리, 프로세스 자동화 등 비즈니스 요구에 맞는 시스템을 개발합니다.'
    },
    {
      id: MOBILE_APPS,
      title: '모바일 앱 개발',
      description:
        '사용성, 성능 및 비즈니스 목표에 초점을 맞춘 iOS/Android 앱을 설계 및 개발합니다.'
    },
    {
      id: 'landing-pages',
      title: '랜딩 페이지 및 캠페인',
      description:
        '광고, 제품 출시 또는 리드 생성에 최적화된 페이지를 제작하여 높은 전환율을 달성합니다.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'UI/UX 디자인',
      description:
        '직관적이고 기능적인 사용자 경험을 위한 명확하고 매력적인 인터페이스를 설계합니다.'
    },
    {
      id: SEO_SEM,
      title: 'SEO 및 SEM',
      description:
        '검색 엔진 최적화(SEO) 및 디지털 광고(SEM)를 통해 온라인 가시성을 향상시킵니다.'
    },
    {
      id: 'email-marketing',
      title: '이메일 마케팅',
      description:
        '효과적인 이메일 캠페인을 설계하여 고객과 소통하고, 충성도를 높이며, 제품 및 서비스를 홍보합니다.'
    }
  ],
  [PT]: [
    {
      id: WEB_SITES,
      title: 'Sites corporativos',
      description:
        'Desenvolvemos sites modernos que refletem a identidade de empresas e profissionais, com foco em presença digital e confiança.'
    },
    {
      id: ECOMMERCE,
      title: 'Lojas online',
      description:
        'Soluções de e-commerce personalizadas para vender produtos ou serviços online de forma eficaz e segura.'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: 'Software sob medida',
      description:
        'Criamos sistemas personalizados para atender às necessidades do seu negócio: gestão interna, automação de processos e mais.'
    },
    {
      id: MOBILE_APPS,
      title: 'Aplicativos móveis',
      description:
        'Desenvolvemos aplicativos móveis (iOS/Android) focados em usabilidade, desempenho e objetivos estratégicos.'
    },
    {
      id: 'landing-pages',
      title: 'Landing pages e campanhas',
      description:
        'Páginas otimizadas para campanhas de marketing, lançamentos ou geração de leads, com foco em conversão.'
    },
    {
      id: UI_UX_DESIGN,
      title: 'Design UI/UX',
      description:
        'Design de interfaces intuitivas e atrativas, com foco em oferecer experiências funcionais para o usuário.'
    },
    {
      id: SEO_SEM,
      title: 'SEO e SEM',
      description:
        'Melhoramos sua presença online com estratégias de SEO (orgânico) e campanhas de marketing digital (SEM).'
    },
    {
      id: 'email-marketing',
      title: 'Email marketing',
      description:
        'Criamos campanhas de e-mail eficazes para engajar, fidelizar e promover seus produtos ou serviços.'
    }
  ],
  [ZH]: [
    {
      id: WEB_SITES,
      title: '企业网站',
      description:
        '我们打造现代化网站，精准展现企业与专业人士的品牌形象，提升数字化可信度与影响力。'
    },
    {
      id: ECOMMERCE,
      title: '在线商店',
      description:
        '量身定制电子商务解决方案，助您高效且安全地在线销售产品或服务。'
    },
    {
      id: CUSTOM_SOFTWARE,
      title: '定制软件开发',
      description:
        '根据业务需求开发系统，如内部管理、流程自动化等，提升运营效率。'
    },
    {
      id: MOBILE_APPS,
      title: '移动应用开发',
      description:
        '我们专注于用户体验与性能，开发符合商业目标的iOS/Android移动应用。'
    },
    {
      id: LANDING_PAGES,
      title: '落地页与广告活动',
      description:
        '针对广告、产品发布或获客需求设计优化页面，专注提升转化效果。'
    },
    {
      id: UI_UX_DESIGN,
      title: 'UI/UX设计',
      description: '我们设计直观且吸引人的界面，带来流畅且高效的用户体验。'
    },
    {
      id: SEO_SEM,
      title: 'SEO与SEM',
      description:
        '结合搜索引擎优化（SEO）与搜索引擎营销（SEM），提升线上曝光度和品牌影响力。'
    },
    {
      id: EMAIL_MARKETING,
      title: '电子邮件营销',
      description:
        '策划高效的邮件营销活动，助您传递信息、增强客户忠诚度并推广产品服务。'
    }
  ]
}
