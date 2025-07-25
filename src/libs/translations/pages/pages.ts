import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import {
  ABOUT_US,
  BLOG,
  COMPLAINTS_BOOK,
  CONTACT,
  HOME,
  LEGAL,
  PRIVACY_POLICY,
  PROJECTS,
  SERVICES,
  TERMS_AND_CONDITIONS
} from '@Constants/pages'
import { TLanguageKey } from '@Types/languages'
import { IMetaData } from '@Types/metaData'

export type TLanguagePageValue = {
  title: string
  slug: string
  subPages?: { title: string; slug: string; metaData: IMetaData; id: string }[]
  metaData: IMetaData
}

export type TLanguagePage = {
  [key in TLanguageKey]: TLanguagePageValue
}

export interface IPage {
  id: string
  showPrincipal: boolean
  showFooter: boolean
  language: TLanguagePage
}

export const pages: IPage[] = [
  {
    id: HOME,
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: {
        title: 'Inicio',
        slug: 'inicio',
        metaData: {
          seo: {
            title: 'Soluciones Web y Apps Móviles | navike21',
            description:
              'Desarrollamos soluciones digitales innovadoras en sitios web y apps móviles, ayudando a crecer negocios con responsabilidad y aprendizaje continuo.'
          },
          openGraph: {
            title:
              'Soluciones digitales y móviles con propósito humano | navike21',
            description:
              'Creamos sitios web y aplicaciones móviles que potencian tu negocio, con enfoque en experiencia de usuario y adaptación tecnológica.'
          },
          twitter: {
            title: 'Apps y Webs que impulsan tu negocio | navike21',
            description:
              'Conecta con soluciones digitales diseñadas para el crecimiento. Desarrollo web y apps móviles con visión y compromiso.'
          }
        }
      },
      [EN]: {
        title: 'Home',
        slug: 'home',
        metaData: {
          seo: {
            title: 'Web and Mobile App Solutions | navike21',
            description:
              'We craft innovative digital solutions for websites and mobile apps, empowering business growth through responsibility and continuous learning.'
          },
          openGraph: {
            title: 'Digital and Mobile Solutions with a Human Touch | navike21',
            description:
              'We build websites and mobile applications that boost your business, focused on user experience and tech adaptability.'
          },
          twitter: {
            title: 'Apps and Websites That Drive Your Business | navike21',
            description:
              'Connect with digital solutions designed for growth. Web and mobile app development with vision and commitment.'
          }
        }
      },
      [DE]: {
        title: 'Startseite',
        slug: 'startseite',
        metaData: {
          seo: {
            title: 'Digitale Lösungen für Web und Mobile | navike21',
            description:
              'Wir entwickeln innovative digitale Lösungen für Websites und mobile Apps und fördern das Wachstum unserer Kunden mit Verantwortung und kontinuierlichem Lernen.'
          },
          openGraph: {
            title: 'Digitale Lösungen mit menschlichem Fokus | navike21',
            description:
              'Wir erstellen Websites und mobile Apps, die dein Unternehmen voranbringen – mit Fokus auf Benutzererfahrung und technologische Anpassung.'
          },
          twitter: {
            title: 'Web & Apps, die dein Business stärken | navike21',
            description:
              'Digitale Lösungen für nachhaltiges Wachstum. Web- und App-Entwicklung mit Vision und Engagement.'
          }
        }
      },
      [FR]: {
        title: 'Accueil',
        slug: 'accueil',
        metaData: {
          seo: {
            title: 'Solutions numériques Web & Mobile | navike21',
            description:
              'Solutions web et mobiles innovantes pour aider les entreprises à croître avec responsabilité et apprentissage.'
          },
          openGraph: {
            title: 'Solutions numériques centrées sur l’humain | navike21',
            description:
              'Sites et applications web qui boostent votre activité avec UX et technologie adaptées.'
          },
          twitter: {
            title: 'Des apps et sites qui propulsent votre business | navike21',
            description:
              'Solutions web et mobiles pour la croissance. Engagement, vision et technologie.'
          }
        }
      },
      [IT]: {
        title: 'Home',
        slug: 'home',
        metaData: {
          seo: {
            title: 'Soluzioni Web e App per il tuo Business | navike21',
            description:
              'Creiamo soluzioni digitali innovative per siti web e app mobili, favorendo la crescita aziendale con responsabilità e apprendimento continuo.'
          },
          openGraph: {
            title: 'Soluzioni digitali e mobili con tocco umano | navike21',
            description:
              'Realizziamo siti e applicazioni che fanno crescere il tuo business, con attenzione all’esperienza utente e all’adattabilità tecnologica.'
          },
          twitter: {
            title: 'App e Siti che fanno crescere il tuo business | navike21',
            description:
              'Connetti il tuo business a soluzioni digitali pensate per la crescita. Sviluppo web e app con visione e impegno.'
          }
        }
      },
      [JA]: {
        title: 'ホーム',
        slug: 'home',
        metaData: {
          seo: {
            title: 'Webとモバイルの革新的ソリューション | navike21',
            description:
              '革新的なWebサイトやモバイルアプリを開発し、責任感と継続的な学習をもって、お客様のビジネスの成長を支援します。'
          },
          openGraph: {
            title: '人に寄り添うデジタルソリューション | navike21',
            description:
              'ユーザー体験と技術適応に重点を置いたWebサイトとアプリで、ビジネスの成長を後押しします。'
          },
          twitter: {
            title: 'あなたのビジネスを後押しするWebとアプリ | navike21',
            description:
              '成長のためのデジタルソリューションを提供。ビジョンと責任をもった開発を行います。'
          }
        }
      },
      [KO]: {
        title: '홈',
        slug: 'home',
        metaData: {
          seo: {
            title: '웹 및 모바일 혁신 솔루션 | navike21',
            description:
              '혁신적인 웹사이트와 모바일 앱을 개발하여 책임감과 지속적인 학습으로 고객의 비즈니스 성장을 지원합니다.'
          },
          openGraph: {
            title: '사람 중심 디지털 솔루션 | navike21',
            description:
              '사용자 경험과 기술 적응을 중심으로 웹사이트와 앱을 개발하여 비즈니스를 성장시킵니다.'
          },
          twitter: {
            title: '비즈니스를 성장시키는 앱과 웹 | navike21',
            description:
              '성장을 위한 디지털 솔루션. 비전과 책임감을 바탕으로 웹 및 앱을 개발합니다.'
          }
        }
      },
      [PT]: {
        title: 'Início',
        slug: 'inicio',
        metaData: {
          seo: {
            title: 'Soluções Web e Mobile para o seu Negócio | navike21',
            description:
              'Desenvolvemos soluções digitais inovadoras para sites e aplicativos móveis, impulsionando o crescimento com responsabilidade e aprendizado contínuo.'
          },
          openGraph: {
            title: 'Soluções digitais e móveis com foco humano | navike21',
            description:
              'Criamos sites e apps que fortalecem seu negócio, com foco na experiência do usuário e na adaptação tecnológica.'
          },
          twitter: {
            title: 'Webs e Apps que fazem seu negócio crescer | navike21',
            description:
              'Conecte-se a soluções digitais pensadas para o crescimento. Desenvolvimento com visão e compromisso.'
          }
        }
      },
      [ZH]: {
        title: '首页',
        slug: 'shou-ye',
        metaData: {
          seo: {
            title: '创新网页与移动应用解决方案 | navike21',
            description:
              '我们专注开发创新网站和移动应用，以责任感和持续学习为基础，助力企业稳健成长。'
          },
          openGraph: {
            title: '以用户为中心的数字化解决方案 | navike21',
            description:
              '我们打造聚焦用户体验与技术适应性的网站和移动应用，助力您的业务增长。'
          },
          twitter: {
            title: '助力业务增长的网站与应用 | navike21',
            description:
              '以愿景与责任为核心，提供推动企业发展的数字解决方案与应用开发服务。'
          }
        }
      }
    }
  },
  {
    id: ABOUT_US,
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: {
        title: 'Sobre nosotros',
        slug: 'sobre-nosotros',
        metaData: {
          seo: {
            title: 'Equipo humano detrás de navike21 | Soluciones digitales',
            description:
              'Conoce al equipo de navike21: personas comprometidas con la creación de soluciones web y móviles que impulsan negocios con responsabilidad, experiencia y aprendizaje continuo.'
          },
          openGraph: {
            title: 'Personas que crean tecnología con propósito | navike21',
            description:
              'Somos un equipo que crea soluciones digitales centradas en la experiencia, la adaptación tecnológica y el crecimiento de tu negocio.'
          },
          twitter: {
            title: 'Conoce al equipo de navike21 | Tecnología con visión',
            description:
              'Combinamos experiencia y compromiso para crear soluciones digitales centradas en las personas y el crecimiento de tu negocio.'
          }
        }
      },
      [EN]: {
        title: 'About us',
        slug: 'about-us',
        metaData: {
          seo: {
            title: 'About navike21: Human-Centered Tech & Growth',
            description:
              'At navike21, we build digital solutions with a focus on people, responsibility, and continuous learning — driving business growth through web and mobile innovation.'
          },
          openGraph: {
            title: 'Discover navike21 | Technology with Purpose',
            description:
              'We are a team that creates digital solutions focused on growth, adaptability, and human experience.'
          },
          twitter: {
            title: 'navike21: Tech for Growth and People',
            description:
              'Learn how navike21 creates digital solutions with purpose, adapting to your business and evolving with technology.'
          }
        }
      },
      [DE]: {
        title: 'Über uns',
        slug: 'ueber-uns',
        metaData: {
          seo: {
            title: 'Über navike21: Menschliche Technologie & Wachstum',
            description:
              'Bei navike21 entwickeln wir digitale Lösungen mit Fokus auf Menschen, Verantwortung und kontinuierliches Lernen – für nachhaltiges Unternehmenswachstum.'
          },
          openGraph: {
            title: 'Lernen Sie navike21 kennen | Technologie mit Sinn',
            description:
              'Wir sind ein Team, das digitale Lösungen für Wachstum, Anpassungsfähigkeit und Nutzerzentrierung entwickelt.'
          },
          twitter: {
            title: 'navike21: Technologie für Menschen & Wachstum',
            description:
              'Entdecken Sie, wie navike21 digitale Lösungen schafft, die sich Ihrem Unternehmen anpassen und mit der Technologie wachsen.'
          }
        }
      },
      [FR]: {
        title: 'À propos de nous',
        slug: 'a-propos-de-nous',
        metaData: {
          seo: {
            title:
              'Qui sommes-nous : Technologie et Croissance humaine | navike21',
            description:
              'Chez navike21, nous développons des solutions numériques avec responsabilité, centrées sur l’humain et l’apprentissage continu, pour faire grandir votre activité.'
          },
          openGraph: {
            title: 'Découvrez navike21 | Solutions numériques avec vision',
            description:
              'Une équipe qui conçoit des sites et des apps centrés sur l’expérience utilisateur, l’adaptabilité et l’impact durable.'
          },
          twitter: {
            title: 'navike21 : Créer de la croissance avec le numérique',
            description:
              'Des solutions numériques pensées pour les gens et les entreprises. Découvrez notre engagement pour un avenir digital durable.'
          }
        }
      },
      [IT]: {
        title: 'Chi siamo',
        slug: 'chi-siamo',
        metaData: {
          seo: {
            title: 'Chi siamo: Tecnologia e Crescita Umana | navike21',
            description:
              'In navike21 sviluppiamo soluzioni digitali con responsabilità, attenzione alle persone e apprendimento continuo, per la crescita del tuo business.'
          },
          openGraph: {
            title: 'Scopri navike21 | Soluzioni digitali con visione',
            description:
              'Siamo un team che crea soluzioni web e app, con focus sull’adattabilità, l’esperienza utente e la crescita sostenibile.'
          },
          twitter: {
            title: 'navike21: Soluzioni digitali per crescere insieme',
            description:
              'Tecnologia pensata per le persone e la crescita. Scopri come navike21 può far evolvere il tuo business.'
          }
        }
      },
      [JA]: {
        title: '私たちについて',
        slug: 'watashitachi-ni-tsuite',
        metaData: {
          seo: {
            title: '私たちについて | 人に寄り添うテクノロジー | navike21',
            description:
              'navike21は、責任感、学びの姿勢、そして人間中心の価値観をもとに、ビジネスの成長を支援するデジタルソリューションを提供しています。'
          },
          openGraph: {
            title: 'navike21とは | 継続的成長を支えるデジタル開発',
            description:
              'ユーザー体験と技術適応を重視し、価値あるWebサイトとアプリを開発するプロフェッショナルチームです。'
          },
          twitter: {
            title: '人とビジネスのためのソリューション | navike21',
            description:
              '未来志向のデジタルサービスを提供し、責任とビジョンを持ってお客様の成長を支えます。'
          }
        }
      },
      [KO]: {
        title: '회사 소개',
        slug: 'hoesa-sogae',
        metaData: {
          seo: {
            title: '회사 소개 | 사람 중심 기술 | navike21',
            description:
              'navike21은 책임감과 지속적인 학습, 사람을 중시하는 가치를 바탕으로 비즈니스 성장을 위한 디지털 솔루션을 제공합니다.'
          },
          openGraph: {
            title: 'navike21 소개 | 지속 가능한 성장을 위한 디지털 개발',
            description:
              '우리는 사용자 경험과 기술 적응에 집중하며, 가치 있는 웹사이트와 앱을 개발하는 전문가 팀입니다.'
          },
          twitter: {
            title: '사람과 비즈니스를 위한 솔루션 | navike21',
            description:
              '비전과 책임감을 바탕으로 미래 지향적인 디지털 서비스를 제공하여 고객의 성장을 지원합니다.'
          }
        }
      },
      [PT]: {
        title: 'Sobre nós',
        slug: 'sobre-nos',
        metaData: {
          seo: {
            title: 'Sobre nós: Tecnologia com foco humano | navike21',
            description:
              'Na navike21, desenvolvemos soluções digitais com responsabilidade, foco nas pessoas e aprendizado contínuo para impulsionar o crescimento do seu negócio.'
          },
          openGraph: {
            title: 'Conheça a navike21 | Soluções digitais com visão',
            description:
              'Equipe dedicada à criação de sites e apps focados na experiência do usuário, adaptabilidade tecnológica e impacto duradouro.'
          },
          twitter: {
            title: 'navike21: Crescimento com tecnologia e propósito',
            description:
              'Soluções digitais feitas para pessoas e negócios. Descubra nosso compromisso com o futuro digital.'
          }
        }
      },
      [ZH]: {
        title: '关于我们',
        slug: 'guanyu-women',
        metaData: {
          seo: {
            title: '关于我们 | 以人为本的科技 | navike21',
            description:
              'navike21 致力于责任与持续学习，打造以人为本的数字解决方案，助力企业实现稳健成长。'
          },
          openGraph: {
            title: '关于 navike21 | 推动成长的数字化开发',
            description:
              '我们专注于用户体验与技术适应，提供高价值的网站和移动应用开发服务。'
          },
          twitter: {
            title: '面向人和企业的数字方案 | navike21',
            description:
              '凭借愿景与责任，我们为客户提供创新的网页与移动开发服务，助力实现业务目标。'
          }
        }
      }
    }
  },
  {
    id: SERVICES,
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: {
        title: 'Servicios',
        slug: 'servicios',
        metaData: {
          seo: {
            title: 'Servicios digitales integrales para tu negocio | navike21',
            description:
              'Impulsa tu negocio con soluciones digitales: web, apps móviles, ecommerce, marketing y más. Calidad, visión y compromiso.'
          },
          openGraph: {
            title: 'Soluciones digitales a medida para empresas | navike21',
            description:
              'Desarrollamos sitios, apps, software y estrategias digitales que potencian tu negocio. Foco en experiencia, tecnología y resultados.'
          },
          twitter: {
            title: 'Servicios digitales para crecer contigo | navike21',
            description:
              'Creamos webs, apps, ecommerce y más. Soluciones digitales para impulsar tu negocio con visión estratégica y enfoque humano.'
          }
        }
      },
      [EN]: {
        title: 'Services',
        slug: 'services',
        metaData: {
          seo: {
            title: 'Integrated Digital Services for Your Business | navike21',
            description:
              'Boost your business with digital solutions: websites, mobile apps, ecommerce, marketing, and more. Quality, vision, and commitment.'
          },
          openGraph: {
            title: 'Tailored Digital Solutions for Companies | navike21',
            description:
              'We build websites, apps, software, and digital strategies to grow your business. Focused on experience, technology, and real results.'
          },
          twitter: {
            title: 'Digital Services to Grow with You | navike21',
            description:
              'We create websites, apps, ecommerce, and more. Digital solutions that drive your business with strategic vision and a human touch.'
          }
        }
      },
      [DE]: {
        title: 'Dienstleistungen',
        slug: 'dienstleistungen',
        metaData: {
          seo: {
            title:
              'Integrierte digitale Services für Ihr Unternehmen | navike21',
            description:
              'Stärken Sie Ihr Business mit digitalen Lösungen: Websites, Apps, E-Commerce, Marketing und mehr. Qualität, Vision und Engagement.'
          },
          openGraph: {
            title:
              'Maßgeschneiderte digitale Lösungen für Unternehmen | navike21',
            description:
              'Wir entwickeln Websites, Apps, Software und Strategien zur Förderung Ihres Wachstums – mit Fokus auf Nutzererlebnis, Technologie und messbare Ergebnisse.'
          },
          twitter: {
            title: 'Digitale Services für nachhaltiges Wachstum | navike21',
            description:
              'Wir realisieren Websites, Apps, E-Commerce und mehr. Digitale Lösungen mit Strategie, Vision und menschlichem Fokus.'
          }
        }
      },
      [FR]: {
        title: 'Services',
        slug: 'services',
        metaData: {
          seo: {
            title:
              'Services numériques intégrés pour votre entreprise | navike21',
            description:
              'Dynamisez votre activité avec des solutions digitales : sites web, apps, e-commerce, marketing et plus encore. Qualité, vision et engagement.'
          },
          openGraph: {
            title:
              'Solutions numériques sur mesure pour votre croissance | navike21',
            description:
              'Nous développons des sites, apps, logiciels et stratégies pour faire évoluer votre entreprise – avec focus sur l’expérience utilisateur, la technologie et les résultats.'
          },
          twitter: {
            title: 'Services numériques pour une croissance durable | navike21',
            description:
              'Nous concevons des sites, apps, e-commerce et bien plus. Des solutions digitales stratégiques, humaines et efficaces.'
          }
        }
      },
      [IT]: {
        title: 'Servizi',
        slug: 'servizi',
        metaData: {
          seo: {
            title: 'Servizi digitali integrati per il tuo business | navike21',
            description:
              'Dai slancio alla tua attività con soluzioni digitali: siti web, app, e-commerce, marketing e molto altro. Qualità, visione e impegno.'
          },
          openGraph: {
            title:
              'Soluzioni digitali su misura per la tua crescita | navike21',
            description:
              'Sviluppiamo siti, app, software e strategie per far crescere il tuo business – con focus su esperienza utente, tecnologia e risultati.'
          },
          twitter: {
            title: 'Servizi digitali per una crescita sostenibile | navike21',
            description:
              'Creiamo siti, app, e-commerce e molto altro. Soluzioni digitali strategiche, umane ed efficaci.'
          }
        }
      },
      [JA]: {
        title: 'サービス',
        slug: 'sa-bisu',
        metaData: {
          seo: {
            title: 'ビジネスのための統合型デジタルサービス | navike21',
            description:
              'Webサイト、アプリ、EC、マーケティングなどのソリューションで、あなたのビジネス成長をサポートします。品質、ビジョン、信頼を大切に。'
          },
          openGraph: {
            title:
              '成長を支えるオーダーメイドのデジタルソリューション | navike21',
            description:
              'ユーザー体験、技術、成果に焦点を当て、Webやアプリ、ソフトウェア開発、戦略立案を通じてビジネスの成長を実現します。'
          },
          twitter: {
            title: '持続的な成長のためのデジタルサービス | navike21',
            description:
              'Web制作、アプリ開発、EC構築などを提供。人間らしさと戦略性を兼ね備えたソリューションをご提案します。'
          }
        }
      },
      [KO]: {
        title: '서비스',
        slug: 'seobiseu',
        metaData: {
          seo: {
            title: '비즈니스를 위한 통합 디지털 서비스 | navike21',
            description:
              '웹사이트, 앱, 이커머스, 마케팅 등 다양한 솔루션을 통해 비즈니스 성장을 지원합니다. 품질, 비전, 신뢰를 바탕으로 합니다.'
          },
          openGraph: {
            title: '비즈니스 성장을 위한 맞춤형 디지털 솔루션 | navike21',
            description:
              '사용자 경험, 기술, 성과에 집중하여 웹, 앱, 소프트웨어 개발 및 전략 기획으로 성공을 이끕니다.'
          },
          twitter: {
            title: '지속 가능한 성장을 위한 디지털 서비스 | navike21',
            description:
              '웹 제작, 앱 개발, 이커머스 구축 등 다양한 서비스를 제공합니다. 사람 중심의 전략적 솔루션을 경험하세요.'
          }
        }
      },
      [PT]: {
        title: 'Serviços',
        slug: 'servicos',
        metaData: {
          seo: {
            title: 'Serviços Digitais Integrados para seu Negócio | navike21',
            description:
              'Apoiamos o crescimento do seu negócio com soluções web, apps, e-commerce e marketing. Qualidade, visão e confiança nos movem.'
          },
          openGraph: {
            title:
              'Soluções Digitais Personalizadas para Crescimento | navike21',
            description:
              'Criamos sites, apps e estratégias digitais com foco na experiência do usuário, desempenho e inovação tecnológica.'
          },
          twitter: {
            title: 'Serviços Digitais que Impulsionam Resultados | navike21',
            description:
              'Do desenvolvimento web à presença digital: soluções estratégicas centradas em pessoas, adaptadas ao seu negócio.'
          }
        }
      },
      [ZH]: {
        title: '服务',
        slug: 'fuwu',
        metaData: {
          seo: {
            title: '一体化数字服务，助力企业发展 | navike21',
            description:
              '我们提供网站开发、移动应用、电商与营销整合服务，以质量、远见与信任推动业务成长。'
          },
          openGraph: {
            title: '定制化数字解决方案，推动增长 | navike21',
            description:
              '我们专注打造以用户体验、性能与技术创新为核心的网站与移动应用。'
          },
          twitter: {
            title: '驱动成果的一体化数字服务 | navike21',
            description:
              '从网站开发到数字战略，为企业量身定制以人为本的高效解决方案。'
          }
        }
      }
    }
  },
  {
    id: PROJECTS,
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: {
        title: 'Proyectos',
        slug: 'proyectos',
        metaData: {
          seo: {
            title: 'Nuestros Proyectos Digitales | navike21',
            description:
              'Descubre soluciones reales que hemos creado en web y apps móviles. Cada proyecto refleja nuestro compromiso con la calidad, el aprendizaje y el crecimiento empresarial.'
          },
          openGraph: {
            title: 'Proyectos que Transforman Negocios | navike21',
            description:
              'Conoce nuestros casos de éxito en desarrollo web y móvil. Proyectos hechos con visión humana y adaptación tecnológica.'
          },
          twitter: {
            title: 'Soluciones Digitales con Impacto Real | navike21',
            description:
              'Explora los proyectos que hemos desarrollado y cómo ayudaron a empresas a crecer con innovación y compromiso.'
          }
        }
      },
      [EN]: {
        title: 'Projects',
        slug: 'projects',
        metaData: {
          seo: {
            title: 'Our Digital Projects | navike21',
            description:
              'Discover real-world digital solutions we’ve built for web and mobile. Each project reflects our commitment to quality, learning, and business growth.'
          },
          openGraph: {
            title: 'Projects That Transform Businesses | navike21',
            description:
              'Explore our success stories in web and mobile development. Projects crafted with a human touch and technological adaptability.'
          },
          twitter: {
            title: 'Digital Solutions with Real Impact | navike21',
            description:
              'See how our projects help businesses grow through innovation, responsibility, and vision-driven development.'
          }
        }
      },
      [DE]: {
        title: 'Projekte',
        slug: 'projekte',
        metaData: {
          seo: {
            title: 'Unsere Digitalprojekte | navike21',
            description:
              'Entdecken Sie digitale Lösungen für Web und Mobile, die wir realisiert haben – mit Fokus auf Qualität, Lernen und geschäftliches Wachstum.'
          },
          openGraph: {
            title: 'Projekte, die Unternehmen verändern | navike21',
            description:
              'Erfolgreiche Web- und App-Projekte, gestaltet mit einem menschlichen Ansatz und technischer Anpassungsfähigkeit.'
          },
          twitter: {
            title: 'Digitale Lösungen mit echtem Mehrwert | navike21',
            description:
              'Unsere Projekte zeigen, wie wir Unternehmen durch Innovation, Verantwortung und Vision voranbringen.'
          }
        }
      },
      [FR]: {
        title: 'Projets',
        slug: 'projets',
        metaData: {
          seo: {
            title: 'Nos projets numériques | navike21',
            description:
              'Découvrez des solutions web et mobiles conçues avec rigueur, apprentissage continu et engagement pour la croissance de nos clients.'
          },
          openGraph: {
            title: 'Des projets qui transforment les entreprises | navike21',
            description:
              'Sites web et applications réalisés avec un regard humain et une adaptation technologique agile.'
          },
          twitter: {
            title: 'Des solutions digitales utiles | navike21',
            description:
              'Nos projets montrent comment nous accompagnons la croissance avec innovation, responsabilité et vision.'
          }
        }
      },
      [IT]: {
        title: 'Progetti',
        slug: 'progetti',
        metaData: {
          seo: {
            title: 'I nostri progetti digitali | navike21',
            description:
              'Scopri soluzioni web e mobile sviluppate con impegno, apprendimento continuo e orientamento alla crescita del cliente.'
          },
          openGraph: {
            title: 'Progetti che trasformano le imprese | navike21',
            description:
              'Realizziamo siti e app con un approccio umano e una forte adattabilità tecnologica.'
          },
          twitter: {
            title: 'Soluzioni digitali con valore | navike21',
            description:
              'Attraverso i nostri progetti promuoviamo innovazione, responsabilità e crescita aziendale.'
          }
        }
      },
      [JA]: {
        title: 'プロジェクト',
        slug: 'purojekuto',
        metaData: {
          seo: {
            title: '私たちのデジタルプロジェクト | navike21',
            description:
              '責任感と継続的な学習を大切に、Webとモバイルの革新的なソリューションを通じて、企業の成長をサポートしています。'
          },
          openGraph: {
            title: 'ビジネスを変えるプロジェクト | navike21',
            description:
              '人に寄り添う視点と技術の適応力を活かし、成果あるWebサイトやアプリを開発しています。'
          },
          twitter: {
            title: '価値あるデジタルソリューション | navike21',
            description:
              '私たちのプロジェクトは、責任・学習・ビジョンを通じて、お客様の成長に貢献しています。'
          }
        }
      },
      [KO]: {
        title: '프로젝트',
        slug: 'peurojekteu',
        metaData: {
          seo: {
            title: '우리가 만든 디지털 프로젝트 | navike21',
            description:
              '책임감과 지속적인 학습을 바탕으로 웹과 모바일의 혁신적인 솔루션을 통해 비즈니스 성장을 지원합니다.'
          },
          openGraph: {
            title: '기업을 변화시키는 프로젝트 | navike21',
            description:
              '사람 중심의 접근과 기술 적응력을 바탕으로 성공적인 웹사이트와 앱을 개발합니다.'
          },
          twitter: {
            title: '가치 있는 디지털 솔루션 | navike21',
            description:
              '우리는 책임감과 비전을 바탕으로 기업 성장을 위한 혁신적인 프로젝트를 실현합니다.'
          }
        }
      },
      [PT]: {
        title: 'Projetos',
        slug: 'projetos',
        metaData: {
          seo: {
            title: 'Nossos projetos digitais | navike21',
            description:
              'Conheça soluções web e mobile criadas com responsabilidade, aprendizado contínuo e foco no crescimento dos nossos clientes.'
          },
          openGraph: {
            title: 'Projetos que transformam negócios | navike21',
            description:
              'Desenvolvemos sites e apps com foco humano e adaptação tecnológica para gerar resultados reais.'
          },
          twitter: {
            title: 'Soluções digitais com propósito | navike21',
            description:
              'Nossos projetos revelam como impulsionamos empresas com inovação, visão e compromisso.'
          }
        }
      },
      [ZH]: {
        title: '项目',
        slug: 'xiangmu',
        metaData: {
          seo: {
            title: '我们的数字项目 | navike21',
            description:
              '我们专注开发创新的网页和移动应用，致力于通过责任和持续学习推动企业成长。'
          },
          openGraph: {
            title: '改变企业的项目 | navike21',
            description:
              '以人为本与技术适应相结合，打造助力增长的网页与应用解决方案。'
          },
          twitter: {
            title: '有价值的数字化解决方案 | navike21',
            description:
              '我们通过创新项目推动企业发展，彰显责任感、远见与成长承诺。'
          }
        }
      }
    }
  },
  {
    id: BLOG,
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: {
        title: 'Blog',
        slug: 'blog',
        metaData: {
          seo: {
            title: 'Blog de tecnología y estrategia digital | navike21',
            description:
              'Historias, ideas y aprendizajes para impulsar proyectos digitales con visión, responsabilidad y experiencia.'
          },
          openGraph: {
            title: 'Explora nuestro blog digital | navike21',
            description:
              'Contenido relevante sobre desarrollo web, apps, innovación y crecimiento empresarial.'
          },
          twitter: {
            title: 'Aprende, innova y crece con nuestro blog | navike21',
            description:
              'Conoce nuestras ideas, procesos y reflexiones sobre tecnología y negocios digitales.'
          }
        }
      },
      [EN]: {
        title: 'Blog',
        slug: 'blog',
        metaData: {
          seo: {
            title: 'Tech & Digital Strategy Blog | navike21',
            description:
              'Stories, ideas, and insights to power digital projects with vision, responsibility, and experience.'
          },
          openGraph: {
            title: 'Explore our digital blog | navike21',
            description:
              'Relevant content on web development, apps, innovation, and business growth.'
          },
          twitter: {
            title: 'Learn, innovate & grow with our blog | navike21',
            description:
              'Discover our ideas, processes, and reflections on technology and digital business.'
          }
        }
      },
      [DE]: {
        title: 'Blog',
        slug: 'blog',
        metaData: {
          seo: {
            title: 'Blog für Technologie & digitale Strategie | navike21',
            description:
              'Erfahrungen, Ideen und Einblicke für digitale Projekte mit Vision, Verantwortung und Know-how.'
          },
          openGraph: {
            title: 'Entdecke unseren Digital-Blog | navike21',
            description:
              'Relevante Inhalte zu Webentwicklung, Apps, Innovation und Unternehmenswachstum.'
          },
          twitter: {
            title: 'Lerne, wachse & gestalte mit unserem Blog | navike21',
            description:
              'Unsere Gedanken, Prozesse und Perspektiven über Technologie und digitales Business.'
          }
        }
      },
      [FR]: {
        title: 'Blog',
        slug: 'blog',
        metaData: {
          seo: {
            title: 'Blog sur la tech et la stratégie digitale | navike21',
            description:
              'Histoires, idées et réflexions pour booster vos projets numériques avec vision et responsabilité.'
          },
          openGraph: {
            title: 'Découvrez notre blog digital | navike21',
            description:
              'Articles sur le développement web, les applis, l’innovation et la croissance des entreprises.'
          },
          twitter: {
            title: 'Apprenez, innovez et évoluez avec nous | navike21',
            description:
              'Nos idées, méthodes et réflexions sur le digital et les affaires en ligne.'
          }
        }
      },
      [IT]: {
        title: 'Blog',
        slug: 'blog',
        metaData: {
          seo: {
            title: 'Blog su tecnologia e strategia digitale | navike21',
            description:
              'Storie, idee e spunti per progetti digitali con visione, responsabilità e competenza.'
          },
          openGraph: {
            title: 'Esplora il nostro blog digitale | navike21',
            description:
              'Contenuti su sviluppo web, app, innovazione e crescita aziendale.'
          },
          twitter: {
            title: 'Impara, innova e cresci con il nostro blog | navike21',
            description:
              'Scopri idee, processi e riflessioni su tecnologia e business digitale.'
          }
        }
      },
      [JA]: {
        title: 'ブログ',
        slug: 'burogu',
        metaData: {
          seo: {
            title: 'テクノロジーと戦略のブログ | navike21',
            description:
              'ビジョンと責任を持って、デジタルプロジェクトを推進するためのストーリー、アイデア、洞察をご紹介します。'
          },
          openGraph: {
            title: 'navike21のデジタルブログをチェック',
            description:
              'Web開発、アプリ、イノベーション、ビジネス成長に関する有益なコンテンツをご紹介します。'
          },
          twitter: {
            title: '学び、革新し、成長するブログ | navike21',
            description:
              '私たちの考え方、開発プロセス、テクノロジーとビジネスへの洞察を共有します。'
          }
        }
      },
      [KO]: {
        title: '블로그',
        slug: 'beullogeu',
        metaData: {
          seo: {
            title: '기술과 디지털 전략 블로그 | navike21',
            description:
              '비전과 책임을 바탕으로 디지털 프로젝트를 위한 이야기, 아이디어, 인사이트를 제공합니다.'
          },
          openGraph: {
            title: 'navike21의 디지털 블로그를 만나보세요',
            description:
              '웹 개발, 앱, 혁신 및 비즈니스 성장에 대한 유익한 콘텐츠를 제공합니다.'
          },
          twitter: {
            title: '배우고 혁신하며 성장하는 블로그 | navike21',
            description:
              '기술과 디지털 비즈니스에 대한 우리의 아이디어와 통찰을 공유합니다.'
          }
        }
      },
      [PT]: {
        title: 'Blog',
        slug: 'blog',
        metaData: {
          seo: {
            title: 'Blog sobre tecnologia e estratégia digital | navike21',
            description:
              'Histórias, ideias e aprendizados para impulsionar projetos digitais com visão e responsabilidade.'
          },
          openGraph: {
            title: 'Explore nosso blog digital | navike21',
            description:
              'Conteúdos sobre desenvolvimento web, apps, inovação e crescimento de negócios.'
          },
          twitter: {
            title: 'Aprenda, inove e cresça com nosso blog | navike21',
            description:
              'Descubra nossas ideias, processos e reflexões sobre tecnologia e negócios digitais.'
          }
        }
      },
      [ZH]: {
        title: '博客',
        slug: 'boke',
        metaData: {
          seo: {
            title: '科技与数字战略博客 | navike21',
            description:
              '通过故事、创意和洞察，助力企业以远见与责任推动数字项目的发展。'
          },
          openGraph: {
            title: '探索我们的数字博客 | navike21',
            description: '涵盖网页开发、移动应用、创新和业务增长的优质内容。'
          },
          twitter: {
            title: '学习、创新、成长 | navike21 博客',
            description: '分享我们对技术与数字业务的见解、流程与思考。'
          }
        }
      }
    }
  },
  {
    id: CONTACT,
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: {
        title: 'Conversemos',
        slug: 'contacto',
        metaData: {
          seo: {
            title: 'Contáctanos | navike21',
            description:
              'Conversemos sobre tu próximo proyecto digital. Estamos listos para ayudarte a crecer con tecnología y estrategia.'
          },
          openGraph: {
            title: 'Hablemos de tu proyecto | navike21',
            description:
              'Completa el formulario o escríbenos directamente. Te acompañamos en cada paso del camino digital.'
          },
          twitter: {
            title: 'Estamos aquí para ayudarte | navike21',
            description:
              'Cuéntanos tu idea. Diseñamos soluciones que se adaptan a tus necesidades y objetivos.'
          }
        }
      },
      [EN]: {
        title: "Let's talk",
        slug: 'contact',
        metaData: {
          seo: {
            title: 'Contáctanos | navike21',
            description:
              'Conversemos sobre tu próximo proyecto digital. Estamos listos para ayudarte a crecer con tecnología y estrategia.'
          },
          openGraph: {
            title: 'Hablemos de tu proyecto | navike21',
            description:
              'Completa el formulario o escríbenos directamente. Te acompañamos en cada paso del camino digital.'
          },
          twitter: {
            title: 'Estamos aquí para ayudarte | navike21',
            description:
              'Cuéntanos tu idea. Diseñamos soluciones que se adaptan a tus necesidades y objetivos.'
          }
        }
      },
      [DE]: {
        title: 'Kontakt',
        slug: 'kontakt',
        metaData: {
          seo: {
            title: 'Kontaktieren Sie uns | navike21',
            description:
              'Sprechen wir über Ihr nächstes Digitalprojekt. Wir unterstützen Sie mit Technologie und Strategie.'
          },
          openGraph: {
            title: 'Sprechen wir über Ihr Projekt | navike21',
            description:
              'Füllen Sie das Formular aus oder schreiben Sie uns direkt. Wir begleiten Sie digital.'
          },
          twitter: {
            title: 'Wir sind für Sie da | navike21',
            description:
              'Teilen Sie uns Ihre Idee mit. Wir entwickeln maßgeschneiderte Lösungen für Ihre Ziele.'
          }
        }
      },
      [FR]: {
        title: 'Contact',
        slug: 'contact',
        metaData: {
          seo: {
            title: 'Contactez-nous | navike21',
            description:
              'Parlons de votre prochain projet digital. Nous vous aidons à grandir avec technologie et stratégie.'
          },
          openGraph: {
            title: 'Discutons de votre projet | navike21',
            description:
              'Remplissez le formulaire ou écrivez-nous. Nous serons là à chaque étape du parcours digital.'
          },
          twitter: {
            title: 'Nous sommes là pour vous | navike21',
            description:
              'Parlez-nous de votre idée. Nous créons des solutions adaptées à vos besoins et objectifs.'
          }
        }
      },
      [IT]: {
        title: 'Contatto',
        slug: 'contatto',
        metaData: {
          seo: {
            title: 'Contattaci | navike21',
            description:
              'Parliamo del tuo prossimo progetto digitale. Ti aiutiamo a crescere con tecnologia e strategia.'
          },
          openGraph: {
            title: 'Parliamo del tuo progetto | navike21',
            description:
              'Compila il modulo o scrivici direttamente. Ti accompagniamo in ogni fase digitale.'
          },
          twitter: {
            title: 'Siamo qui per aiutarti | navike21',
            description:
              'Raccontaci la tua idea. Sviluppiamo soluzioni su misura per te e i tuoi obiettivi.'
          }
        }
      },
      [JA]: {
        title: 'お問い合わせ',
        slug: 'otoiawase',
        metaData: {
          seo: {
            title: 'お問い合わせ | navike21',
            description:
              '次のデジタルプロジェクトについて話しませんか？私たちは技術と戦略であなたの成長をサポートします。'
          },
          openGraph: {
            title: 'あなたのプロジェクトについて話しましょう | navike21',
            description:
              'フォームに記入するか、直接ご連絡ください。デジタルの旅を私たちが支えます。'
          },
          twitter: {
            title: '私たちはあなたをサポートします | navike21',
            description:
              'アイデアをお聞かせください。あなたのニーズと目標に合わせたソリューションを提供します。'
          }
        }
      },
      [KO]: {
        title: '연락하기',
        slug: 'yeollak-hagi',
        metaData: {
          seo: {
            title: '문의하기 | navike21',
            description:
              '다음 디지털 프로젝트에 대해 이야기해보세요. 기술과 전략으로 귀하의 성장을 도와드립니다.'
          },
          openGraph: {
            title: '프로젝트에 대해 이야기해요 | navike21',
            description:
              '양식을 작성하거나 직접 메시지를 보내주세요. 디지털 여정의 모든 순간을 함께합니다.'
          },
          twitter: {
            title: '우리는 당신을 도와드릴 준비가 되어 있습니다 | navike21',
            description:
              '아이디어를 들려주세요. 맞춤형 솔루션으로 귀하의 목표를 실현합니다.'
          }
        }
      },
      [PT]: {
        title: 'Vamos conversar',
        slug: 'contato',
        metaData: {
          seo: {
            title: 'Fale Conosco | navike21',
            description:
              'Vamos conversar sobre seu próximo projeto digital. Estamos prontos para impulsionar seu crescimento com tecnologia e estratégia.'
          },
          openGraph: {
            title: 'Vamos Falar Sobre Seu Projeto | navike21',
            description:
              'Preencha o formulário ou entre em contato direto. Acompanhamos você em cada etapa do caminho digital.'
          },
          twitter: {
            title: 'Conte Conosco Para Ajudar Você | navike21',
            description:
              'Compartilhe sua ideia conosco. Criamos soluções sob medida para suas necessidades e objetivos.'
          }
        }
      },
      [ZH]: {
        title: '联系我们',
        slug: 'lianxi',
        metaData: {
          seo: {
            title: '联系我们 | navike21',
            description:
              '欢迎与我们探讨您的下一个数字项目。我们以技术与策略助您实现业务增长。'
          },
          openGraph: {
            title: '聊聊您的项目 | navike21',
            description:
              '填写表单或直接联系我们。我们将在数字旅程中始终陪伴您。'
          },
          twitter: {
            title: '我们随时为您服务 | navike21',
            description:
              '告诉我们您的想法。我们提供量身定制的解决方案，助您实现目标。'
          }
        }
      }
    }
  },
  {
    id: LEGAL,
    showPrincipal: false,
    showFooter: true,
    language: {
      [ES]: {
        title: 'Área Legal',
        slug: 'area-legal',
        metaData: {
          seo: {
            title: 'Área Legal | navike21',
            description:
              'Conoce nuestras políticas, condiciones y procesos legales. Transparencia, protección y confianza en cada interacción.'
          },
          openGraph: {
            title: 'Documentos y Políticas Legales | navike21',
            description:
              'Accede fácilmente a nuestras políticas, términos de uso y otros documentos legales. Tu confianza es nuestra prioridad.'
          },
          twitter: {
            title:
              'Comprometidos con la legalidad y la transparencia | navike21',
            description:
              'Consulta nuestras políticas legales actualizadas. Una experiencia digital responsable empieza por la confianza.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: 'Libro de reclamaciones',
            slug: 'libro-de-reclamaciones',
            metaData: {
              seo: {
                title: 'Libro de Reclamaciones | navike21',
                description:
                  'Formulario para clientes en Perú que deseen registrar una queja o reclamo sobre nuestros servicios.'
              },
              openGraph: {
                title: 'Registra tu reclamo | navike21',
                description:
                  'Si eres cliente en Perú y tienes una queja o reclamo sobre nuestros servicios, puedes usar nuestro Libro de Reclamaciones en línea.'
              },
              twitter: {
                title: 'Libro de Reclamaciones Perú | navike21',
                description:
                  'Ponemos a tu disposición un formulario de reclamos para garantizar atención oportuna y responsable a nuestros clientes en Perú.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: 'Términos y condiciones',
            slug: 'terminos-y-condiciones',
            metaData: {
              seo: {
                title: 'Términos y Condiciones de Servicio | navike21',
                description:
                  'Revisa las condiciones de uso y responsabilidades aplicables a nuestros servicios digitales. Transparencia y claridad en cada proyecto.'
              },
              openGraph: {
                title: 'Conoce nuestros Términos y Condiciones | navike21',
                description:
                  'Consulta las normas que regulan el uso de nuestros servicios digitales y nuestra relación contigo como cliente.'
              },
              twitter: {
                title: 'Términos de Servicio de navike21',
                description:
                  'Lee los términos que aplican a nuestros servicios digitales y asegura una relación clara y responsable.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'Política de privacidad',
            slug: 'politica-de-privacidad',
            metaData: {
              seo: {
                title: 'Políticas de Privacidad | navike21',
                description:
                  'Conoce cómo protegemos tus datos personales y garantizamos su uso responsable en todos nuestros servicios digitales.'
              },
              openGraph: {
                title: 'Tu privacidad es nuestra prioridad | navike21',
                description:
                  'Consulta nuestras políticas de protección de datos y el compromiso de navike21 con tu privacidad.'
              },
              twitter: {
                title: 'Política de Privacidad de navike21',
                description:
                  'Transparencia y responsabilidad en el uso de tus datos personales. Revisa nuestra política aquí.'
              }
            }
          }
        ]
      },
      [EN]: {
        title: 'Legal Area',
        slug: 'legal-area',
        metaData: {
          seo: {
            title: 'Legal Area | navike21',
            description:
              'Learn about our policies, terms and legal processes. Transparency, protection and trust in every interaction.'
          },
          openGraph: {
            title: 'Legal Policies and Documents | navike21',
            description:
              'Easily access our terms of use, privacy policies, and legal documents. Your trust is our top priority.'
          },
          twitter: {
            title: 'Committed to Legality and Transparency | navike21',
            description:
              'Explore our up-to-date legal policies. A responsible digital experience starts with trust.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: 'Complaints Book',
            slug: 'complaints-book',
            metaData: {
              seo: {
                title: 'Claims Book (Peru Only) | navike21',
                description:
                  'Access our digital claims book for Peru. We value your feedback and seek continuous improvement.'
              },
              openGraph: {
                title: 'Digital Claims Book for Peru | navike21',
                description:
                  'Submit your suggestions or complaints directly through our official claims platform.'
              },
              twitter: {
                title: 'Submit Your Claim | navike21 (Peru)',
                description:
                  'We are here to listen. Use our digital claims book and help us improve.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: 'Terms and Conditions',
            slug: 'terms-and-conditions',
            metaData: {
              seo: {
                title: 'Terms and Conditions | navike21',
                description:
                  'Review the terms that govern the use of our services and digital platforms.'
              },
              openGraph: {
                title: 'Use of Our Services | navike21',
                description:
                  'Read the terms and conditions applicable to navike21’s digital solutions.'
              },
              twitter: {
                title: 'Terms of Use | navike21',
                description:
                  'Transparency and clarity in every interaction. Review our service terms.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'Privacy Policy',
            slug: 'privacy-policy',
            metaData: {
              seo: {
                title: 'Privacy Policy | navike21',
                description:
                  'Learn how navike21 protects your personal data and ensures responsible use of your information.'
              },
              openGraph: {
                title: 'Your Privacy Matters | navike21',
                description:
                  'Understand how we handle data, user rights, and the security of your personal information.'
              },
              twitter: {
                title: 'Privacy at navike21',
                description:
                  'We protect your data. Review our privacy policy to understand our commitment.'
              }
            }
          }
        ]
      },
      [DE]: {
        title: 'Rechtsbereich',
        slug: 'rechtsbereich',
        metaData: {
          seo: {
            title: 'Rechtsbereich | navike21',
            description:
              'Erfahren Sie mehr über unsere Richtlinien, Bedingungen und rechtlichen Verfahren. Transparenz und Vertrauen bei jeder Interaktion.'
          },
          openGraph: {
            title: 'Rechtliche Richtlinien und Dokumente | navike21',
            description:
              'Zugriff auf unsere Nutzungsbedingungen, Datenschutzrichtlinien und rechtlichen Dokumente. Vertrauen steht bei uns an erster Stelle.'
          },
          twitter: {
            title: 'Engagiert für Recht und Transparenz | navike21',
            description:
              'Entdecken Sie unsere aktuellen rechtlichen Richtlinien. Eine vertrauenswürdige digitale Erfahrung beginnt hier.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: 'Beschwerdebuch',
            slug: 'beschwerdebuch',
            metaData: {
              seo: {
                title: 'Beschwerdebuch (nur für Peru) | navike21',
                description:
                  'Wenn Sie in Peru ansässig sind, können Sie hier Ihre Reklamationen oder Vorschläge über unser offizielles Beschwerdeformular einreichen.'
              },
              openGraph: {
                title: 'Offizielles Beschwerdeformular für Peru | navike21',
                description:
                  'Reichen Sie Ihre Reklamation oder Anregung als Nutzer in Peru über unser digitales Formular ein.'
              },
              twitter: {
                title: 'Beschwerdeformular für Peru',
                description:
                  'Navike21 stellt ein digitales Formular zur Verfügung, damit Nutzer in Peru ihre Beschwerden offiziell einreichen können.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: 'Allgemeine Geschäftsbedingungen',
            slug: 'allgemeine-geschaeftsbedingungen',
            metaData: {
              seo: {
                title: 'Allgemeine Geschäftsbedingungen | navike21',
                description:
                  'Lesen Sie die Bedingungen, die unsere digitalen Dienstleistungen regeln und die Interaktion mit unserer Website bestimmen.'
              },
              openGraph: {
                title: 'Rechtliche Nutzungsbedingungen | navike21',
                description:
                  'Erfahren Sie mehr über Ihre Rechte, Pflichten und die Regeln für die Nutzung unserer Dienste.'
              },
              twitter: {
                title: 'AGB für unsere digitalen Dienste',
                description:
                  'Unsere AGB regeln die Nutzung unserer Website und digitalen Lösungen. Bitte lesen Sie diese sorgfältig durch.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'Datenschutzrichtlinie',
            slug: 'datenschutzrichtlinie',
            metaData: {
              seo: {
                title: 'Datenschutzrichtlinie | navike21',
                description:
                  'Erfahren Sie, wie navike21 Ihre personenbezogenen Daten schützt und verantwortungsvoll mit Informationen umgeht.'
              },
              openGraph: {
                title: 'Ihre Privatsphäre zählt | navike21',
                description:
                  'Verstehen Sie, wie wir mit personenbezogenen Daten umgehen, Ihre Rechte schützen und Datensicherheit gewährleisten.'
              },
              twitter: {
                title: 'Datenschutz bei navike21',
                description:
                  'Ihre Daten sind bei uns sicher. Lesen Sie unsere Richtlinie, um mehr über unsere Maßnahmen zu erfahren.'
              }
            }
          }
        ]
      },
      [FR]: {
        title: 'Zone Légale',
        slug: 'zone-legale',
        metaData: {
          seo: {
            title: 'Espace juridique | navike21',
            description:
              'Consultez nos politiques, conditions d’utilisation et procédures légales. Transparence et confiance à chaque étape.'
          },
          openGraph: {
            title: 'Politiques juridiques et documents | navike21',
            description:
              'Accédez à nos conditions générales, politiques de confidentialité et autres documents juridiques. La transparence nous engage.'
          },
          twitter: {
            title: 'Pour une expérience numérique de confiance | navike21',
            description:
              'Découvrez nos politiques juridiques actualisées. Engagement envers la clarté, la protection et la conformité.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: 'Livre de Réclamations',
            slug: 'livre-de-reclamations',
            metaData: {
              seo: {
                title: 'Livre de réclamations (Pérou uniquement) | navike21',
                description:
                  'Si vous êtes basé au Pérou, vous pouvez soumettre vos réclamations ou suggestions via notre formulaire officiel.'
              },
              openGraph: {
                title:
                  'Formulaire officiel de réclamations pour le Pérou | navike21',
                description:
                  'Envoyez vos réclamations ou suggestions en tant qu’utilisateur péruvien via notre formulaire numérique.'
              },
              twitter: {
                title: 'Réclamations pour les utilisateurs au Pérou',
                description:
                  'navike21 fournit un formulaire numérique pour que les utilisateurs péruviens puissent soumettre leurs réclamations.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: 'Conditions Générales',
            slug: 'conditions-generales',
            metaData: {
              seo: {
                title: 'Conditions générales d’utilisation | navike21',
                description:
                  'Consultez les conditions qui régissent nos services numériques et les interactions avec notre site web.'
              },
              openGraph: {
                title: 'Conditions d’utilisation légales | navike21',
                description:
                  'Découvrez vos droits, obligations et les règles encadrant l’utilisation de nos services.'
              },
              twitter: {
                title: 'CGU pour nos services numériques',
                description:
                  'Veuillez lire nos conditions d’utilisation pour connaître les règles d’accès à notre plateforme.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'Politique de Confidentialité',
            slug: 'politique-de-confidentialite',
            metaData: {
              seo: {
                title: 'Politique de confidentialité | navike21',
                description:
                  'Découvrez comment navike21 protège vos données personnelles et traite les informations de manière responsable.'
              },
              openGraph: {
                title: 'Votre confidentialité est notre priorité | navike21',
                description:
                  'Comprenez notre approche en matière de gestion des données, de respect de la vie privée et de sécurité.'
              },
              twitter: {
                title: 'Protection des données chez navike21',
                description:
                  'Vos données sont en sécurité avec nous. Lisez notre politique pour en savoir plus.'
              }
            }
          }
        ]
      },
      [IT]: {
        title: 'Area Legale',
        slug: 'area-legale',
        metaData: {
          seo: {
            title: 'Area legale | navike21',
            description:
              'Consulta le nostre politiche, condizioni d’uso e documenti legali. Trasparenza e fiducia in ogni servizio.'
          },
          openGraph: {
            title: 'Documenti legali e politiche | navike21',
            description:
              'Accedi a termini, privacy e altri documenti legali. Siamo impegnati per la trasparenza e la conformità.'
          },
          twitter: {
            title: 'Esperienza digitale con fiducia | navike21',
            description:
              'Scopri le nostre politiche legali. Sviluppo digitale con chiarezza, impegno e protezione dei dati.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: 'Libro dei Reclami',
            slug: 'libro-dei-reclami',
            metaData: {
              seo: {
                title: 'Registro dei reclami (solo per il Perù) | navike21',
                description:
                  'Gli utenti in Perù possono inviare reclami ufficiali tramite il nostro modulo digitale, tutelando i loro diritti come consumatori.'
              },
              openGraph: {
                title: 'Canale ufficiale per reclami in Perù | navike21',
                description:
                  'Offriamo un mezzo digitale sicuro per inviare reclami formali in modo semplice e rapido.'
              },
              twitter: {
                title: 'Reclami per consumatori in Perù | navike21',
                description:
                  'Se ti trovi in Perù, invia il tuo reclamo ufficiale tramite il nostro sito. Ci impegniamo a dare seguito alla tua segnalazione.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: 'Termini e Condizioni',
            slug: 'termini-e-condizioni',
            metaData: {
              seo: {
                title: 'Termini e condizioni | navike21',
                description:
                  'Consulta le condizioni d’uso del sito web e dei servizi digitali di navike21, per un’esperienza trasparente e sicura.'
              },
              openGraph: {
                title:
                  'Uso responsabile dei nostri servizi digitali | navike21',
                description:
                  'Spieghiamo diritti, doveri e responsabilità nell’utilizzo del nostro sito e delle nostre soluzioni.'
              },
              twitter: {
                title: 'Regole per l’uso dei servizi navike21',
                description:
                  'Conosci le condizioni che regolano la tua esperienza con navike21. Ci impegniamo per la chiarezza e la trasparenza.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'Politica sulla Privacy',
            slug: 'politica-sulla-privacy',
            metaData: {
              seo: {
                title: 'Politica sulla privacy | navike21',
                description:
                  'Proteggiamo i tuoi dati personali con responsabilità, garantendo sicurezza e trasparenza in ogni interazione.'
              },
              openGraph: {
                title: 'Gestione responsabile dei dati | navike21',
                description:
                  'Scopri come raccogliamo, trattiamo e proteggiamo le tue informazioni personali sul nostro sito.'
              },
              twitter: {
                title: 'Protezione dei tuoi dati personali',
                description:
                  'navike21 si impegna a garantire la massima riservatezza e sicurezza delle tue informazioni.'
              }
            }
          }
        ]
      },
      [JA]: {
        title: '法的エリア',
        slug: 'houteki-eria',
        metaData: {
          seo: {
            title: 'Area legale | navike21',
            description:
              'Consulta le nostre politiche, condizioni d’uso e documenti legali. Trasparenza e fiducia in ogni servizio.'
          },
          openGraph: {
            title: 'Documenti legali e politiche | navike21',
            description:
              'Accedi a termini, privacy e altri documenti legali. Siamo impegnati per la trasparenza e la conformità.'
          },
          twitter: {
            title: 'Esperienza digitale con fiducia | navike21',
            description:
              'Scopri le nostre politiche legali. Sviluppo digitale con chiarezza, impegno e protezione dei dati.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: '苦情帳',
            slug: 'kujou-chou',
            metaData: {
              seo: {
                title: '苦情申立書（ペルーのみ） | navike21',
                description:
                  'ペルー国内のお客様は、公式フォームを通じて苦情やご意見を提出することができます。'
              },
              openGraph: {
                title: 'ペルー向け公式苦情フォーム | navike21',
                description:
                  'ペルー在住のお客様は、navike21のデジタルフォームから苦情やご提案をお送りいただけます。'
              },
              twitter: {
                title: 'ペルーのお客様向けの苦情受付',
                description:
                  'navike21では、ペルーのお客様のために苦情やご意見を提出するためのフォームを提供しています。'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: '利用規約',
            slug: 'riyou-kiyaku',
            metaData: {
              seo: {
                title: '利用規約 | navike21',
                description:
                  '当社のデジタルサービスおよびウェブサイトの利用に関する条件をご確認ください。'
              },
              openGraph: {
                title: 'サービス利用に関する法的条件 | navike21',
                description:
                  'navike21のサービスをご利用いただく際の権利・義務およびルールについて説明します。'
              },
              twitter: {
                title: 'デジタルサービスの利用規約',
                description:
                  '当社のプラットフォームをご利用いただく際のルールを確認してください。'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'プライバシーポリシー',
            slug: 'puraibashii-porishii',
            metaData: {
              seo: {
                title: 'プライバシーポリシー | navike21',
                description:
                  'navike21では、お客様の個人情報を責任を持って保護・管理しております。'
              },
              openGraph: {
                title: 'お客様のプライバシーを大切にします | navike21',
                description:
                  'データの取り扱いやプライバシー保護、セキュリティに対する当社の取り組みをご確認ください。'
              },
              twitter: {
                title: 'navike21の個人情報保護方針',
                description:
                  'お客様のデータは安全に管理されます。詳細はプライバシーポリシーをご覧ください。'
              }
            }
          }
        ]
      },
      [KO]: {
        title: '법적 영역',
        slug: 'beobjeog-yeongyeog',
        metaData: {
          seo: {
            title: '법률 정보 | navike21',
            description:
              '정책, 이용 약관, 개인정보 보호정책 등 법률 관련 정보를 확인하세요. 신뢰와 투명성을 바탕으로 서비스를 제공합니다.'
          },
          openGraph: {
            title: '정책 및 법적 문서 | navike21',
            description:
              '이용 조건과 개인정보 보호정책을 포함한 법적 문서를 제공합니다. 투명성과 책임을 중시합니다.'
          },
          twitter: {
            title: '신뢰할 수 있는 디지털 경험 | navike21',
            description:
              '법적 정책을 확인해보세요. 명확하고 책임감 있는 디지털 개발을 약속드립니다.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: '불만 사항 책',
            slug: 'bulman-sahang-chaeg',
            metaData: {
              seo: {
                title: '불만 접수 양식 (페루 전용) | navike21',
                description:
                  '페루 고객은 navike21의 공식 양식을 통해 불만이나 의견을 제출하실 수 있습니다.'
              },
              openGraph: {
                title: '페루 고객을 위한 공식 불만 접수 | navike21',
                description:
                  'navike21은 페루 고객을 위해 디지털 양식을 통해 의견과 불만을 접수받고 있습니다.'
              },
              twitter: {
                title: '페루 전용 불만 접수 포털',
                description:
                  'navike21은 페루 거주 고객의 의견을 공식적으로 수집하고 있습니다.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: '이용 약관',
            slug: 'iyong-yagwan',
            metaData: {
              seo: {
                title: '이용약관 | navike21',
                description:
                  'navike21의 디지털 서비스 및 웹사이트 사용에 관한 이용 조건을 확인해보세요.'
              },
              openGraph: {
                title: '서비스 이용을 위한 법적 조건 | navike21',
                description:
                  'navike21 서비스를 사용할 때 적용되는 권리와 의무, 규정을 설명합니다.'
              },
              twitter: {
                title: '디지털 서비스 이용약관',
                description:
                  'navike21 플랫폼 이용 시 따라야 할 규칙을 안내합니다.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: '개인정보 처리방침',
            slug: 'gaeinjeongbo-cheoribangsik',
            metaData: {
              seo: {
                title: '개인정보 처리방침 | navike21',
                description:
                  'navike21은 고객의 개인정보를 책임감 있게 보호하고 관리합니다.'
              },
              openGraph: {
                title: '고객의 개인정보 보호 | navike21',
                description:
                  '데이터 보호 및 개인정보 보안에 대한 navike21의 방침과 노력을 확인해보세요.'
              },
              twitter: {
                title: 'navike21의 개인정보 보호 정책',
                description:
                  '고객의 데이터는 안전하게 관리되며, 정책 내용을 자세히 확인하실 수 있습니다.'
              }
            }
          }
        ]
      },
      [PT]: {
        title: 'Área Legal',
        slug: 'area-legal',
        metaData: {
          seo: {
            title: 'Área legal | navike21',
            description:
              'Consulte nossas políticas, termos de uso e documentos legais. Transparência e confiança em cada serviço.'
          },
          openGraph: {
            title: 'Documentos legais e políticas | navike21',
            description:
              'Acesse nossos termos, privacidade e outros documentos legais. Compromisso com transparência e conformidade.'
          },
          twitter: {
            title: 'Experiência digital com confiança | navike21',
            description:
              'Conheça nossas políticas legais. Desenvolvimento com clareza, compromisso e proteção de dados.'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: 'Livro de Reclamações',
            slug: 'livro-de-reclamacoes',
            metaData: {
              seo: {
                title: 'Livro de Reclamações (somente no Peru) | navike21',
                description:
                  'Clientes no Peru podem enviar reclamações formais por meio do nosso formulário digital oficial.'
              },
              openGraph: {
                title: 'Reclamações formais para clientes no Peru | navike21',
                description:
                  'Disponibilizamos um canal digital exclusivo para o registro de reclamações de clientes peruanos.'
              },
              twitter: {
                title: 'Portal de Reclamações do Peru | navike21',
                description:
                  'Um espaço oficial para enviar suas reclamações se você reside no Peru.'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: 'Termos e Condições',
            slug: 'termos-e-condicoes',
            metaData: {
              seo: {
                title: 'Termos e Condições | navike21',
                description:
                  'Consulte as condições legais para o uso do site e serviços digitais da navike21.'
              },
              openGraph: {
                title: 'Condições legais de uso | navike21',
                description:
                  'Explicamos os direitos, deveres e regras ao utilizar nossos serviços digitais.'
              },
              twitter: {
                title: 'Termos de Uso dos Serviços Digitais',
                description:
                  'Conheça as regras e diretrizes ao utilizar a plataforma da navike21.'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: 'Política de Privacidade',
            slug: 'politica-de-privacidade',
            metaData: {
              seo: {
                title: 'Política de Privacidade | navike21',
                description:
                  'Comprometemo-nos a proteger e gerenciar seus dados pessoais com responsabilidade.'
              },
              openGraph: {
                title: 'Proteção de Dados Pessoais | navike21',
                description:
                  'Conheça como cuidamos da sua privacidade e protegemos suas informações digitais.'
              },
              twitter: {
                title: 'Privacidade e segurança dos seus dados',
                description:
                  'Sua privacidade é nossa prioridade. Veja como gerenciamos suas informações com segurança.'
              }
            }
          }
        ]
      },
      [ZH]: {
        title: '法律区域',
        slug: 'falv-quyu',
        metaData: {
          seo: {
            title: '法律专区 | navike21',
            description:
              '浏览我们的政策、使用条款和法律文件。我们致力于在每项服务中实现透明与信任。'
          },
          openGraph: {
            title: '法律信息与政策 | navike21',
            description:
              '了解我们的使用条款、隐私政策和其他法律文档。始终以透明和合规为核心。'
          },
          twitter: {
            title: '可信赖的数字服务体验 | navike21',
            description:
              '查阅我们的法律政策。以清晰与责任为本，提供优质的数字化服务。'
          }
        },
        subPages: [
          {
            id: COMPLAINTS_BOOK,
            title: '投诉书',
            slug: 'toushu-shu',
            metaData: {
              seo: {
                title: '投诉登记（仅限秘鲁） | navike21',
                description:
                  '秘鲁用户可通过我们的数字表格提交正式投诉，保障您的消费权益。'
              },
              openGraph: {
                title: '专为秘鲁客户提供的投诉通道 | navike21',
                description:
                  '为秘鲁用户提供官方渠道，快速安全地提交投诉并获取处理。'
              },
              twitter: {
                title: '秘鲁消费者投诉平台 | navike21',
                description:
                  '如果您在秘鲁，可通过我们的网站提交正式投诉，我们将认真处理您的反馈。'
              }
            }
          },
          {
            id: TERMS_AND_CONDITIONS,
            title: '条款和条件',
            slug: 'tiaokuan-he-tiaojian',
            metaData: {
              seo: {
                title: '服务条款 | navike21',
                description:
                  '了解您在使用navike21网站和数字服务时应遵守的条款与责任。'
              },
              openGraph: {
                title: '数字服务使用协议 | navike21',
                description:
                  '详细说明用户在平台上的权利与义务，保障您和我们的合法权益。'
              },
              twitter: {
                title: '使用navike21的服务须知',
                description:
                  '我们为用户提供清晰透明的服务条款，保障使用过程的安全与规范。'
              }
            }
          },
          {
            id: PRIVACY_POLICY,
            title: '隐私政策',
            slug: 'yin-si-zhi-ce',
            metaData: {
              seo: {
                title: '隐私政策 | navike21',
                description:
                  '我们承诺负责任地处理您的个人数据，并严格保护您的隐私权。'
              },
              openGraph: {
                title: '数据隐私与安全保护 | navike21',
                description:
                  '了解我们如何收集、使用和保护您的信息，确保数字体验安全透明。'
              },
              twitter: {
                title: '保护您的隐私与数据安全',
                description:
                  '隐私保护是我们的首要任务，我们通过明确政策和技术手段守护您的个人信息。'
              }
            }
          }
        ]
      }
    }
  }
]
