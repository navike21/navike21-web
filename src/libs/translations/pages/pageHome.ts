import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'
import { getInfoPage } from '@Utils/getInfoPage'

export type THeroSectionValue = {
  principalText: string
  rotateWords: string[]
  description: string
  controlActionText: string
  controlActionLink: string
}

export type THomeInfoStructure = {
  title: string
  subtitle: string
  description: string
  controlActionText: string
  controlActionLink: string
}

export type TCounterMetrics = {
  key: string
  symbol: string
  value: number
  label: {
    [key in TLanguageKey]: string
  }
}

export type THeroSection = {
  [key in TLanguageKey]: THeroSectionValue
}

export type THomeStructure = {
  [key in TLanguageKey]: THomeInfoStructure
}

const CONTACT = 'contact'
const ABOUT_US = 'about-us'
const PROJECTS = 'projects'

export const heroSection: THeroSection = {
  [ES]: {
    principalText: 'Damos vida a tus ideas en ',
    rotateWords: [
      'sitios web',
      'apps móviles',
      'ecommerce',
      'software a medida',
      'landing pages',
      'UX/UI'
    ],
    description:
      'Creamos soluciones digitales pensadas para conectar con tus usuarios y hacer crecer tu negocio.',
    controlActionText: 'Conversemos',
    controlActionLink: getInfoPage({ key: CONTACT, lang: ES }).href
  },
  [EN]: {
    principalText: 'We bring your ideas to life as ',
    rotateWords: [
      'websites',
      'mobile apps',
      'ecommerce',
      'custom software',
      'landing pages',
      'UX/UI'
    ],
    description:
      'We design digital solutions that connect with your users and help your business grow.',
    controlActionText: 'Let’s talk',
    controlActionLink: getInfoPage({ key: CONTACT, lang: EN }).href
  },
  [FR]: {
    principalText: 'Nous donnons vie à vos idées en ',
    rotateWords: [
      'sites web',
      'applications mobiles',
      'ecommerce',
      'logiciels sur mesure',
      "pages d'atterrissage",
      'UX/UI'
    ],
    description:
      'Nous créons des solutions numériques pensées pour engager vos utilisateurs et développer votre activité.',
    controlActionText: 'Discutons',
    controlActionLink: getInfoPage({ key: CONTACT, lang: FR }).href
  },
  [IT]: {
    principalText: 'Diamo vita alle tue idee in ',
    rotateWords: [
      'siti web',
      'app mobili',
      'ecommerce',
      'software su misura',
      'landing pages',
      'UX/UI'
    ],
    description:
      'Progettiamo soluzioni digitali per coinvolgere i tuoi utenti e far crescere il tuo business.',
    controlActionText: 'Parliamone',
    controlActionLink: getInfoPage({ key: CONTACT, lang: IT }).href
  },
  [DE]: {
    principalText: 'Wir erwecken Ihre Ideen zum Leben als ',
    rotateWords: [
      'websites',
      'mobile apps',
      'ecommerce',
      'maßgeschneiderte Software',
      'landing pages',
      'UX/UI'
    ],
    description:
      'Wir entwickeln digitale Lösungen, die Ihre Nutzer ansprechen und Ihr Geschäft voranbringen.',
    controlActionText: 'Lass uns sprechen',
    controlActionLink: getInfoPage({ key: CONTACT, lang: DE }).href
  },
  [JA]: {
    principalText: 'あなたのアイデアを形にする ',
    rotateWords: [
      'ウェブサイト',
      'モバイルアプリ',
      'ECサイト',
      'カスタムソフトウェア',
      'ランディングページ',
      'UX/UI'
    ],
    description:
      'ユーザーとのつながりを大切に、ビジネスを成長させるデジタルソリューションを提供します。',
    controlActionText: '話しましょう',
    controlActionLink: getInfoPage({ key: CONTACT, lang: JA }).href
  },
  [KO]: {
    principalText: '아이디어를 현실로 만드는 ',
    rotateWords: [
      '웹사이트',
      '모바일 앱',
      '이커머스',
      '맞춤형 소프트웨어',
      '랜딩 페이지',
      'UX/UI'
    ],
    description:
      '사용자와의 연결을 중시하며 비즈니스를 성장시키는 디지털 솔루션을 만듭니다.',
    controlActionText: '이야기해요',
    controlActionLink: getInfoPage({ key: CONTACT, lang: KO }).href
  },
  [PT]: {
    principalText: 'Damos vida às suas ideias em ',
    rotateWords: [
      'sites web',
      'apps móveis',
      'ecommerce',
      'software personalizado',
      'landing pages',
      'UX/UI'
    ],
    description:
      'Criamos soluções digitais pensadas para envolver os seus utilizadores e impulsionar o seu negócio.',
    controlActionText: 'Vamos conversar',
    controlActionLink: getInfoPage({ key: CONTACT, lang: PT }).href
  },
  [ZH]: {
    principalText: '让您的创意成为现实：',
    rotateWords: [
      '网站',
      '移动应用',
      '电商平台',
      '定制软件',
      '落地页',
      'UX/UI'
    ],
    description: '专注用户体验，助力业务增长的数字化解决方案。',
    controlActionText: '聊一聊',
    controlActionLink: getInfoPage({ key: CONTACT, lang: ZH }).href
  }
}

export const aboutSection: THomeStructure = {
  [ES]: {
    title: 'Mas que software, **creamos soluciones**',
    subtitle: '¿Quiénes somos?',
    description:
      'Somos un equipo apasionado por la tecnología y el diseño, dedicados a crear soluciones innovadoras que mejoran la interacción en el mundo digital.',
    controlActionText: 'Conoce más',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: ES }).href
  },
  [EN]: {
    title: 'More than software, **we build solutions**',
    subtitle: 'Who are we?',
    description:
      'We are a team passionate about technology and design, dedicated to creating innovative solutions that enhance digital interaction.',
    controlActionText: 'Learn more',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: EN }).href
  },
  [FR]: {
    title: 'Au-delà des logiciels, **nous concevons des solutions**',
    subtitle: 'Qui sommes-nous ?',
    description:
      'Nous sommes une équipe passionnée par la technologie et le design, dédiée à créer des solutions innovantes qui améliorent l’interaction dans le monde numérique.',
    controlActionText: 'En savoir plus',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: FR }).href
  },
  [IT]: {
    title: 'Oltre al software, **progettiamo soluzioni**',
    subtitle: 'Chi siamo?',
    description:
      'Siamo un team appassionato di tecnologia e design, dedicato a creare soluzioni innovative che migliorano l’interazione nel mondo digitale.',
    controlActionText: 'Scopri di più',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: IT }).href
  },
  [DE]: {
    title: 'Über Software hinaus, **entwickeln wir Lösungen**',
    subtitle: 'Wer sind wir?',
    description:
      'Wir sind ein Team, das von Technologie und Design begeistert ist und innovative Lösungen entwickelt, die die Interaktion in der digitalen Welt verbessern.',
    controlActionText: 'Mehr erfahren',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: DE }).href
  },
  [JA]: {
    title: 'ソフトウェアを超えて、**ソリューションを生み出します**',
    subtitle: '私たちは誰ですか？',
    description:
      '私たちはテクノロジーとデザインに情熱を注ぐチームで、デジタル世界でのインタラクションを向上させる革新的なソリューションを提供しています。',
    controlActionText: 'もっと知る',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: JA }).href
  },
  [KO]: {
    title: '소프트웨어를 넘어, **솔루션을 개발합니다**',
    subtitle: '우리는 누구인가요?',
    description:
      '우리는 기술과 디자인에 열정을 가진 팀으로, 디지털 세계에서의 상호작용을 향상시키는 혁신적인 솔루션을 제공합니다.',
    controlActionText: '자세히 알아보기',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: KO }).href
  },
  [PT]: {
    title: 'Para além do software, **desenvolvemos soluções**',
    subtitle: 'Quem somos?',
    description:
      'Somos uma equipa apaixonada por tecnologia e design, dedicada a criar soluções inovadoras que melhoram a interação no mundo digital.',
    controlActionText: 'Saiba mais',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: PT }).href
  },
  [ZH]: {
    title: '超越软件，**我们打造解决方案**',
    subtitle: '我们是谁？',
    description:
      '我们是一个热爱技术和设计的团队，致力于创造创新解决方案，提升数字世界中的互动体验。',
    controlActionText: '了解更多',
    controlActionLink: getInfoPage({ key: ABOUT_US, lang: ZH }).href
  }
}

export const counterMetrics: TCounterMetrics[] = [
  {
    key: 'projects',
    symbol: '+',
    value: 62,
    label: {
      [ES]: 'Proyectos completados',
      [EN]: 'Completed projects',
      [FR]: 'Projets réalisés',
      [IT]: 'Progetti realizzati',
      [DE]: 'Abgeschlossene Projekte',
      [JA]: '完了したプロジェクト',
      [KO]: '완료된 프로젝트',
      [PT]: 'Projetos concluídos',
      [ZH]: '已完成项目'
    }
  },
  {
    key: 'clients',
    symbol: '+',
    value: 10,
    label: {
      [ES]: 'Clientes satisfechos',
      [EN]: 'Satisfied clients',
      [FR]: 'Clients satisfaits',
      [IT]: 'Clienti soddisfatti',
      [DE]: 'Zufriedene Kunden',
      [JA]: '満足しているクライアント',
      [KO]: '만족한 클라이언트',
      [PT]: 'Clientes satisfeitos',
      [ZH]: '满意客户'
    }
  },
  {
    key: 'experience',
    symbol: '+',
    value: 5,
    label: {
      [ES]: 'Años de experiencia',
      [EN]: 'Years of experience',
      [FR]: 'Années d’expérience',
      [IT]: 'Anni di esperienza',
      [DE]: 'Jahre Erfahrung',
      [JA]: '年の経験',
      [KO]: '년 경력',
      [PT]: 'Anos de experiência',
      [ZH]: '年经验'
    }
  },
  {
    key: 'quality',
    symbol: '%',
    value: 100,
    label: {
      [ES]: 'Compromiso con la calidad',
      [EN]: 'Commitment to quality',
      [FR]: 'Engagement qualité',
      [IT]: 'Impegno per la qualità',
      [DE]: 'Engagement für Qualität',
      [JA]: '品質へのこだわり',
      [KO]: '품질에 대한 약속',
      [PT]: 'Compromisso com a qualidade',
      [ZH]: '品质承诺'
    }
  }
]

export const recentWorks: THomeStructure = {
  [ES]: {
    title: 'Lo último en **nuestros proyectos**',
    subtitle: 'Trabajos recientes',
    description:
      'Aquí puedes ver algunos de nuestros trabajos más recientes, donde hemos aplicado nuestras habilidades y conocimientos para crear soluciones efectivas y atractivas.',
    controlActionText: 'Ver más proyectos',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: ES }).href
  },
  [EN]: {
    title: 'The latest in **our projects**',
    subtitle: 'Recent works',
    description:
      'Here you can see some of our most recent works, where we have applied our skills and knowledge to create effective and attractive solutions.',
    controlActionText: 'See more projects',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: EN }).href
  },
  [FR]: {
    title: 'Les dernières nouveautés de **nos projets**',
    subtitle: 'Travaux récents',
    description:
      'Vous pouvez découvrir ici quelques-uns de nos travaux les plus récents, où nous avons mis en œuvre nos compétences et connaissances pour créer des solutions efficaces et attrayantes.',
    controlActionText: 'Voir plus de projets',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: FR }).href
  },
  [IT]: {
    title: 'Le ultime novità sui **nostri progetti**',
    subtitle: 'Lavori recenti',
    description:
      'Qui puoi vedere alcuni dei nostri lavori più recenti, dove abbiamo applicato le nostre competenze e conoscenze per creare soluzioni efficaci e attraenti.',
    controlActionText: 'Vedi altri progetti',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: IT }).href
  },
  [DE]: {
    title: 'Neuigkeiten aus **unseren Projekten**',
    subtitle: 'Aktuelle Arbeiten',
    description:
      'Hier können Sie einige unserer neuesten Arbeiten sehen, in denen wir unsere Fähigkeiten und Kenntnisse eingesetzt haben, um effektive und ansprechende Lösungen zu schaffen.',
    controlActionText: 'Weitere Projekte ansehen',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: DE }).href
  },
  [JA]: {
    title: '**私たちのプロジェクト**最新情報',
    subtitle: '最近の作品',
    description:
      'ここでは、私たちの最近の作品の一部をご覧いただけます。効果的で魅力的なソリューションを作成するために、私たちのスキルと知識を活用しています。',
    controlActionText: '他のプロジェクトを見る',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: JA }).href
  },
  [KO]: {
    title: '**우리 프로젝트** 최신 소식',
    subtitle: '최근 작업',
    description:
      '여기에서 우리의 최근 작업 중 일부를 볼 수 있습니다. 우리는 효과적이고 매력적인 솔루션을 만들기 위해 우리의 기술과 지식을 적용했습니다.',
    controlActionText: '더 많은 프로젝트 보기',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: KO }).href
  },
  [PT]: {
    title: 'Novidades recentes em **nossos projetos**',
    subtitle: 'Trabalhos recentes',
    description:
      'Aqui você pode ver alguns dos nossos trabalhos mais recentes, onde aplicamos nossas habilidades e conhecimentos para criar soluções eficazes e atraentes.',
    controlActionText: 'Ver mais projetos',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: PT }).href
  },
  [ZH]: {
    title: '**我们项目**最新动态',
    subtitle: '最近的作品',
    description:
      '在这里，您可以看到我们最近的一些工作，我们运用我们的技能和知识，创造出有效且吸引人的解决方案。',
    controlActionText: '查看更多项目',
    controlActionLink: getInfoPage({ key: PROJECTS, lang: ZH }).href
  }
}
