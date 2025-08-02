import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export type TTitleAndDescriptionServices = {
  [key in TLanguageKey]: {
    title: string
    description: string
  }
}

export const heroSectionServices: TTitleAndDescriptionServices = {
  [ES]: {
    title: 'De ideas a **resultados confiables**',
    description:
      'Creamos sitios web, apps y sistemas a medida para impulsar tu negocio con tecnología.'
  },
  [EN]: {
    title: 'From ideas to **reliable results**',
    description:
      'We create custom websites, apps, and systems to boost your business with technology.'
  },
  [DE]: {
    title: 'Von Ideen zu **verlässlichen Ergebnissen**',
    description:
      'Wir entwickeln maßgeschneiderte Websites, Apps und Systeme, um dein Business mit Technologie voranzubringen.'
  },
  [FR]: {
    title: 'Des idées aux **résultats fiables**',
    description:
      'Nous créons des sites web, des applications et des systèmes sur mesure pour dynamiser votre activité grâce à la technologie.'
  },
  [IT]: {
    title: 'Dalle idee a **risultati affidabili**',
    description:
      'Realizziamo siti web, app e sistemi su misura per far crescere il tuo business con la tecnologia.'
  },
  [JA]: {
    title: 'アイデアから**信頼できる成果**へ',
    description:
      'ウェブサイト、アプリ、システムをオーダーメイドで開発し、テクノロジーでビジネスを後押しします。'
  },
  [KO]: {
    title: '아이디어에서 **신뢰할 수 있는 결과**로',
    description:
      '맞춤형 웹사이트, 앱, 시스템을 개발하여 기술로 비즈니스를 성장시킵니다.'
  },
  [PT]: {
    title: 'De ideias a **resultados confiáveis**',
    description:
      'Criamos sites, aplicativos e sistemas sob medida para impulsionar seu negócio com tecnologia.'
  },
  [ZH]: {
    title: '从创意到**可靠成果**',
    description: '我们打造定制的网站、应用和系统，借助技术推动您的业务发展。'
  }
}

export const servicesList: TTitleAndDescriptionServices = {
  [ES]: {
    title: 'Nuestros servicios',
    description:
      'Lo que necesitas para poder crecer, **lo construiremos juntos**'
  },
  [EN]: {
    title: 'Our Services',
    description: 'What you need to grow, **we’ll build it together**'
  },
  [DE]: {
    title: 'Unsere Leistungen',
    description: 'Was du zum Wachsen brauchst, **bauen wir gemeinsam auf**'
  },
  [FR]: {
    title: 'Nos services',
    description:
      'Ce dont vous avez besoin pour évoluer, **nous le construirons ensemble**'
  },
  [IT]: {
    title: 'I nostri servizi',
    description: 'Costruiamo insieme **ciò di cui hai bisogno per crescere**'
  },
  [JA]: {
    title: '私たちのサービス',
    description: 'あなたの成長に必要なものを、**一緒に作り上げます**'
  },
  [KO]: {
    title: '저희의 서비스',
    description: '성장을 위해 필요한 것들, **함께 만들어갑니다**'
  },
  [PT]: {
    title: 'Nossos serviços',
    description: 'O que você precisa para crescer, **vamos construir juntos**'
  },
  [ZH]: {
    title: '我们的服务',
    description: '助你成长所需的一切，**我们一同打造**'
  }
}

export const contactUsServices: TTitleAndDescriptionServices = {
  [ES]: {
    title: '¿Necesitas un sitio web, app o sistema a medida?',
    description:
      'Contamos con un equipo de expertos listos para ayudarte a transformar tus ideas en soluciones digitales efectivas.'
  },
  [EN]: {
    title: 'Need a website, app, or custom system?',
    description:
      'We have a team of experts ready to help turn your ideas into effective digital solutions.'
  },
  [DE]: {
    title:
      'Besoin d’un site web, d’une application ou d’un système sur mesure ?',
    description:
      'Notre équipe d’experts est prête à transformer vos idées en solutions numériques efficaces.'
  },
  [FR]: {
    title:
      'Besoin d’un site web, d’une application ou d’un système sur mesure ?',
    description:
      'Notre équipe d’experts est prête à transformer vos idées en solutions numériques efficaces.'
  },
  [IT]: {
    title: 'Hai bisogno di un sito web, un’app o un sistema su misura?',
    description:
      'Il nostro team di esperti è pronto ad aiutarti a trasformare le tue idee in soluzioni digitali efficaci.'
  },
  [JA]: {
    title: 'ウェブサイト、アプリ、またはカスタムシステムが必要ですか？',
    description:
      '私たちの専門チームが、あなたのアイデアを効果的なデジタルソリューションに変えるお手伝いをします。'
  },
  [KO]: {
    title: '웹사이트, 앱, 맞춤형 시스템이 필요하신가요?',
    description:
      '저희 전문가 팀이 귀하의 아이디어를 효과적인 디지털 솔루션으로 전환해 드립니다.'
  },
  [PT]: {
    title: 'Precisa de um site, app ou sistema sob medida?',
    description:
      'Nossa equipe de especialistas está pronta para transformar suas ideias em soluções digitais eficazes.'
  },
  [ZH]: {
    title: '需要网站、应用或定制系统？',
    description: '我们的专家团队随时准备将您的想法转化为高效的数字解决方案。'
  }
}
