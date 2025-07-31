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
import { IMetaData } from '@Types/metaData'

export type TLanguageServiceValue = {
  title: string
  slug: string
  description: string
  metaData: IMetaData
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
        slug: 'desarrollo-de-paginas-web',
        metaData: {
          seo: {
            title: 'Desarrollo de páginas web modernas y rápidas | navike21',
            description:
              'Creamos sitios web atractivos, optimizados y enfocados en el crecimiento de tu negocio.'
          },
          openGraph: {
            title: 'Web modernas y personalizadas para tu negocio | navike21',
            description:
              'Diseñamos sitios web rápidos, escalables y enfocados en resultados.'
          },
          twitter: {
            title: 'Desarrollo web moderno y personalizado | navike21',
            description:
              'Transformamos tu presencia digital con sitios web únicos, veloces y diseñados para crecer con tu negocio.'
          }
        }
      },
      [EN]: {
        title: 'Web Design',
        description: 'Modern, fast, and personalized websites.',
        slug: 'web-design',
        metaData: {
          seo: {
            title: 'Modern and fast website development | navike21',
            description:
              'We create attractive, optimized websites focused on your business growth.'
          },
          openGraph: {
            title: 'Custom modern websites for your business | navike21',
            description: 'We design fast, scalable websites focused on results.'
          },
          twitter: {
            title: 'Modern, personalized web development | navike21',
            description:
              'Boost your digital presence with fast, unique websites built to grow with your business.'
          }
        }
      },
      [DE]: {
        title: 'Webdesign',
        description: 'Moderne, schnelle und personalisierte Websites.',
        slug: 'webdesign',
        metaData: {
          seo: {
            title: 'Moderne und schnelle Webentwicklung | navike21',
            description:
              'Attraktive, optimierte Websites für das Wachstum Ihres Unternehmens.'
          },
          openGraph: {
            title:
              'Moderne, personalisierte Websites für Ihr Business | navike21',
            description:
              'Wir erstellen skalierbare Webseiten mit Fokus auf Ergebnisse.'
          },
          twitter: {
            title: 'Personalisierte Webentwicklung, die wirkt | navike21',
            description:
              'Steigern Sie Ihre Online-Präsenz mit schnellen, einzigartigen Websites für Ihr Wachstum.'
          }
        }
      },
      [FR]: {
        title: 'Conception de sites web',
        description: 'Sites web modernes, rapides et personnalisés.',
        slug: 'conception-de-sites-web',
        metaData: {
          seo: {
            title: 'Création de sites web modernes et rapides | navike21',
            description:
              'Des sites web attrayants et optimisés pour faire croître votre entreprise.'
          },
          openGraph: {
            title: 'Sites web personnalisés pour votre entreprise | navike21',
            description:
              'Nous concevons des sites rapides, évolutifs et orientés résultats.'
          },
          twitter: {
            title: 'Développement web moderne et personnalisé | navike21',
            description:
              'Boostez votre présence digitale avec des sites uniques et performants pour votre croissance.'
          }
        }
      },
      [IT]: {
        title: 'Progettazione web',
        description: 'Siti web moderni, veloci e personalizzati.',
        slug: 'progettazione-web',
        metaData: {
          seo: {
            title: 'Siti web moderni, rapidi e personalizzati | navike21',
            description:
              'Creiamo siti web ottimizzati e accattivanti per far crescere il tuo business.'
          },
          openGraph: {
            title: 'Siti web personalizzati per il tuo business | navike21',
            description:
              'Realizziamo siti veloci, scalabili e orientati ai risultati.'
          },
          twitter: {
            title: 'Sviluppo web moderno e su misura | navike21',
            description:
              'Rafforza la tua presenza online con siti web unici e veloci pensati per far crescere il tuo business.'
          }
        }
      },
      [JA]: {
        title: 'ウェブデザイン',
        description: 'モダンで高速、カスタマイズ可能なウェブサイト。',
        slug: 'web-design',
        metaData: {
          seo: {
            title: 'モダンで高速なWebサイト制作 | navike21',
            description:
              '魅力的で最適化されたサイトで、ビジネスの成長をサポートします。'
          },
          openGraph: {
            title: 'あなたのビジネスのためのWebサイト | navike21',
            description: '高速で成果重視のスケーラブルなWebサイトを設計します。'
          },
          twitter: {
            title: '個別対応のモダンなWeb制作 | navike21',
            description:
              'ユニークで高速なWebサイトで、あなたのデジタルプレゼンスを強化します。'
          }
        }
      },
      [KO]: {
        title: '웹 디자인',
        description: '현대적이고 빠르며 개인화된 웹사이트.',
        slug: 'web-design',
        metaData: {
          seo: {
            title: '현대적이고 빠른 웹사이트 개발 | navike21',
            description:
              '비즈니스 성장을 위한 매력적이고 최적화된 웹사이트를 제작합니다.'
          },
          openGraph: {
            title: '맞춤형 웹사이트로 비즈니스를 성장 | navike21',
            description:
              '빠르고 확장 가능한 웹사이트를 결과 중심으로 설계합니다.'
          },
          twitter: {
            title: '맞춤형 현대 웹 개발 서비스 | navike21',
            description: '독창적이고 빠른 웹사이트로 디지털 존재감을 높이세요.'
          }
        }
      },
      [PT]: {
        title: 'Design de sites web',
        description: 'Sites web modernos, rápidos e personalizados.',
        slug: 'design-de-sites-web',
        metaData: {
          seo: {
            title: 'Desenvolvimento de sites modernos e rápidos | navike21',
            description:
              'Criamos sites atrativos, otimizados e voltados ao crescimento do seu negócio.'
          },
          openGraph: {
            title: 'Sites personalizados para o seu negócio | navike21',
            description:
              'Projetamos sites rápidos, escaláveis e focados em resultados.'
          },
          twitter: {
            title: 'Web moderna e personalizada para crescer | navike21',
            description:
              'Impulsione sua presença digital com sites únicos, rápidos e focados no crescimento.'
          }
        }
      },
      [ZH]: {
        title: '网页设计',
        description: '现代、快速且个性化的网站。',
        slug: 'wangye-sheji',
        metaData: {
          seo: {
            title: '现代快速的网站开发服务 | navike21',
            description: '打造优化且有吸引力的网站，助您业务增长。'
          },
          openGraph: {
            title: '为您的业务量身定制的网站 | navike21',
            description: '我们设计快速、可扩展、结果导向的网站。'
          },
          twitter: {
            title: '个性化的现代网站开发服务 | navike21',
            description:
              '通过独特而高效的网站，提升您的数字影响力并推动业务发展。'
          }
        }
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
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: 'Tiendas online a medida para vender sin límites | navike21',
            description:
              'Creamos tiendas eCommerce escalables, rápidas y seguras, diseñadas para ayudarte a crecer y vender más.'
          },
          openGraph: {
            title: 'Tu tienda online lista para crecer contigo | navike21',
            description:
              'Desarrollamos soluciones eCommerce personalizadas que impulsan tus ventas y mejoran la experiencia de compra.'
          },
          twitter: {
            title: 'Desarrollo de eCommerce potente y flexible | navike21',
            description:
              'Lleva tu negocio al siguiente nivel con tiendas online adaptadas a tus objetivos y pensadas para escalar.'
          }
        }
      },
      [EN]: {
        title: 'Ecommerce web',
        description: 'Secure, scalable online stores.',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: 'Custom online stores to sell without limits | navike21',
            description:
              'We build scalable, secure eCommerce sites designed to grow your business and increase sales.'
          },
          openGraph: {
            title: 'Your online store ready to grow with you | navike21',
            description:
              'Tailored eCommerce solutions that boost your sales and improve user experience.'
          },
          twitter: {
            title: 'Flexible and powerful eCommerce development | navike21',
            description:
              'Take your business further with online stores built to scale and align with your goals.'
          }
        }
      },
      [DE]: {
        title: 'Ecommerce web',
        description: 'Sichere, skalierbare Online-Shops.',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: 'Individuelle Online-Shops ohne Grenzen | navike21',
            description:
              'Wir entwickeln skalierbare und sichere eCommerce-Shops, die Ihr Geschäft voranbringen.'
          },
          openGraph: {
            title: 'Ihr Online-Shop, bereit für Wachstum | navike21',
            description:
              'Maßgeschneiderte eCommerce-Lösungen, die den Umsatz steigern und das Einkaufserlebnis verbessern.'
          },
          twitter: {
            title: 'Starke und flexible eCommerce-Lösungen | navike21',
            description:
              'Bringen Sie Ihr Business voran mit skalierbaren Online-Shops, perfekt auf Ihre Ziele abgestimmt.'
          }
        }
      },
      [FR]: {
        title: 'Ecommerce web',
        description: 'Magasins en ligne sécurisés et évolutifs.',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: 'Boutiques en ligne sur mesure, sans limites | navike21',
            description:
              'Nous créons des boutiques e-commerce rapides, sécurisées et évolutives pour booster vos ventes.'
          },
          openGraph: {
            title: 'Votre boutique en ligne prête à évoluer | navike21',
            description:
              'Des solutions e-commerce personnalisées qui dynamisent vos ventes et l’expérience client.'
          },
          twitter: {
            title: 'Création e-commerce puissante et agile | navike21',
            description:
              'Développez votre activité avec des boutiques en ligne pensées pour évoluer et atteindre vos objectifs.'
          }
        }
      },
      [IT]: {
        title: 'Ecommerce web',
        description: 'Negozi online sicuri e scalabili.',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: 'E-commerce su misura per vendere senza limiti | navike21',
            description:
              'Realizziamo store online scalabili e sicuri per far crescere il tuo business e aumentare le vendite.'
          },
          openGraph: {
            title: 'Il tuo shop online pronto a crescere | navike21',
            description:
              'Soluzioni e-commerce personalizzate per migliorare le vendite e l’esperienza d’acquisto.'
          },
          twitter: {
            title: 'Sviluppo e-commerce potente e flessibile | navike21',
            description:
              'Fai crescere il tuo business con negozi online pensati per i tuoi obiettivi e per scalare.'
          }
        }
      },
      [JA]: {
        title: 'ECサイト',
        description: '安全で拡張可能なオンラインストア。',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: '制限なしのECサイトを構築します | navike21',
            description:
              '売上アップと成長を支援する、安全でスケーラブルなオンラインストアを制作します。'
          },
          openGraph: {
            title: '成長をサポートするオンラインストア | navike21',
            description:
              '売上を伸ばし、購入体験を高めるカスタムECソリューションをご提供します。'
          },
          twitter: {
            title: '柔軟かつ強力なECサイト制作 | navike21',
            description:
              'ビジネスの目標に合わせてスケーラブルなオンラインストアを構築します。'
          }
        }
      },
      [KO]: {
        title: '이커머스',
        description: '안전하고 확장 가능한 온라인 쇼핑몰.',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: '제한 없이 판매하는 맞춤형 쇼핑몰 | navike21',
            description:
              '성장을 위한 안전하고 확장 가능한 온라인 쇼핑몰을 제작해드립니다.'
          },
          openGraph: {
            title: '당신의 비즈니스 성장을 위한 쇼핑몰 | navike21',
            description:
              '매출 향상과 사용자 경험 개선을 위한 맞춤형 e커머스 솔루션 제공.'
          },
          twitter: {
            title: '강력하고 유연한 이커머스 개발 | navike21',
            description:
              '비즈니스 목표에 최적화된 온라인 쇼핑몰로 디지털 성장을 이끄세요.'
          }
        }
      },
      [PT]: {
        title: 'Ecommerce web',
        description: 'Lojas online seguras e escaláveis.',
        slug: 'ecommerce',
        metaData: {
          seo: {
            title: 'Lojas online sob medida, sem limites | navike21',
            description:
              'Criamos lojas virtuais seguras e escaláveis para impulsionar seu negócio e aumentar suas vendas.'
          },
          openGraph: {
            title: 'Sua loja online pronta para crescer | navike21',
            description:
              'Soluções eCommerce personalizadas que elevam suas vendas e melhoram a experiência do cliente.'
          },
          twitter: {
            title: 'Desenvolvimento eCommerce flexível e potente | navike21',
            description:
              'Expanda seu negócio com lojas virtuais sob medida e prontas para escalar com seus objetivos.'
          }
        }
      },
      [ZH]: {
        title: '电商网站',
        description: '安全、可扩展的电商网站。',
        slug: 'dianzi-shangwu',
        metaData: {
          seo: {
            title: '专属定制的电商平台，无限销售 | navike21',
            description:
              '我们打造安全、可扩展的电商网站，助您业务增长、销量提升。'
          },
          openGraph: {
            title: '为业务成长而生的电商网站 | navike21',
            description: '量身定制的电商解决方案，提升转化率与用户体验。'
          },
          twitter: {
            title: '强大灵活的电商开发服务 | navike21',
            description: '用高效、可扩展的电商平台实现您的商业目标。'
          }
        }
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
        slug: 'desarrollo-de-software',
        metaData: {
          seo: {
            title: 'Software a medida para tu empresa | navike21',
            description:
              'Creamos soluciones de software confiables y escalables que se adaptan a tu empresa, tus procesos y tu ritmo de crecimiento.'
          },
          openGraph: {
            title: 'Software pensado para tu equipo y tus objetivos | navike21',
            description:
              'Desarrollamos herramientas digitales personalizadas para empresas que buscan eficiencia, seguridad y evolución constante.'
          },
          twitter: {
            title:
              'Tecnología a medida para empresas de todos los tamaños | navike21',
            description:
              'Acompañamos a tu empresa con software robusto, flexible y diseñado para impulsar tu operación desde el primer día.'
          }
        }
      },
      [EN]: {
        title: 'Software Development',
        description: 'Digital solutions tailored to your business.',
        slug: 'software-development',
        metaData: {
          seo: {
            title: 'Custom software for your company | navike21',
            description:
              'We develop reliable and scalable software solutions tailored to your company, your processes, and your growth pace.'
          },
          openGraph: {
            title: 'Software built for your team and goals | navike21',
            description:
              'We create custom digital tools for companies seeking efficiency, security, and long-term evolution.'
          },
          twitter: {
            title: 'Tailored software for companies of all sizes | navike21',
            description:
              'We support your company with robust, flexible software designed to boost your operations from day one.'
          }
        }
      },
      [DE]: {
        title: 'Softwareentwicklung',
        description:
          'Digitale Lösungen, die auf Ihr Geschäft zugeschnitten sind.',
        slug: 'softwareentwicklung',
        metaData: {
          seo: {
            title: 'Individuelle Software für Ihr Unternehmen | navike21',
            description:
              'Wir entwickeln zuverlässige, skalierbare Softwarelösungen, die auf Ihr Unternehmen, Ihre Abläufe und Ihr Wachstum zugeschnitten sind.'
          },
          openGraph: {
            title:
              'Software, die auf Ihr Team und Ihre Ziele abgestimmt ist | navike21',
            description:
              'Wir erstellen maßgeschneiderte digitale Tools für Unternehmen, die Effizienz, Sicherheit und nachhaltige Weiterentwicklung anstreben.'
          },
          twitter: {
            title:
              'Individuelle Software für Unternehmen jeder Größe | navike21',
            description:
              'Wir begleiten Ihr Unternehmen mit robuster, flexibler Software, die Ihre Abläufe von Anfang an unterstützt und stärkt.'
          }
        }
      },
      [FR]: {
        title: 'Développement de logiciels',
        description: 'Solutions numériques adaptées à votre entreprise.',
        slug: 'developpement-de-logiciels',
        metaData: {
          seo: {
            title: 'Logiciels sur mesure pour votre entreprise | navike21',
            description:
              'Nous développons des solutions logicielles fiables et évolutives, adaptées à votre entreprise, vos processus et votre rythme de croissance.'
          },
          openGraph: {
            title:
              'Des logiciels conçus pour votre équipe et vos objectifs | navike21',
            description:
              "Nous créons des outils numériques personnalisés pour les entreprises en quête d'efficacité, de sécurité et de développement durable."
          },
          twitter: {
            title:
              'Des logiciels adaptés aux entreprises de toutes tailles | navike21',
            description:
              'Nous accompagnons votre entreprise avec des solutions logicielles robustes et flexibles, prêtes à soutenir vos opérations dès le premier jour.'
          }
        }
      },
      [IT]: {
        title: 'Sviluppo Software',
        description: 'Soluzioni digitali su misura per il tuo business.',
        slug: 'sviluppo-software',
        metaData: {
          seo: {
            title: 'Software su misura per la tua azienda | navike21',
            description:
              'Sviluppiamo soluzioni software affidabili e scalabili, pensate per la tua azienda, i tuoi processi e il tuo ritmo di crescita.'
          },
          openGraph: {
            title:
              'Software pensato per il tuo team e i tuoi obiettivi | navike21',
            description:
              'Creiamo strumenti digitali personalizzati per aziende che cercano efficienza, sicurezza e crescita continua.'
          },
          twitter: {
            title:
              'Software su misura per aziende di ogni dimensione | navike21',
            description:
              'Affianchiamo la tua azienda con soluzioni robuste e flessibili, pronte a supportare le tue attività sin dal primo giorno.'
          }
        }
      },
      [JA]: {
        title: 'ソフトウェア開発',
        description: 'ビジネスに合わせたデジタルソリューション。',
        slug: 'sofutowea-kaihatsu',
        metaData: {
          seo: {
            title: '御社に最適なカスタムソフトウェア | navike21',
            description:
              '信頼性が高く拡張可能なソフトウェアソリューションを開発し、御社の業務プロセスと成長に合わせて最適化します。'
          },
          openGraph: {
            title: 'チームと目標に合わせたソフトウェア | navike21',
            description:
              '効率性、安全性、持続的な成長を求める企業向けに、カスタマイズされたデジタルツールを提供します。'
          },
          twitter: {
            title: 'あらゆる規模の企業向けソフトウェア開発 | navike21',
            description:
              '御社の事業運営を支えるために、柔軟で信頼性の高いソフトウェアを最初からご提供します。'
          }
        }
      },
      [KO]: {
        title: '소프트웨어 개발',
        description: '비즈니스에 맞춘 디지털 솔루션.',
        slug: 'software-gaebal',
        metaData: {
          seo: {
            title: '귀사에 맞춘 맞춤형 소프트웨어 | navike21',
            description:
              '신뢰할 수 있고 확장 가능한 소프트웨어 솔루션을 개발하여 귀사의 업무 프로세스와 성장 속도에 맞춥니다.'
          },
          openGraph: {
            title: '팀과 목표에 맞춘 소프트웨어 | navike21',
            description:
              '효율성, 안정성 및 지속적인 발전을 추구하는 기업을 위한 맞춤형 디지털 도구를 만듭니다.'
          },
          twitter: {
            title: '모든 규모의 기업을 위한 맞춤형 소프트웨어 | navike21',
            description:
              '귀사의 운영을 지원하는 견고하고 유연한 소프트웨어를 처음부터 제공합니다.'
          }
        }
      },
      [PT]: {
        title: 'Desenvolvimento de Software',
        description: 'Soluções digitais adaptadas ao seu negócio.',
        slug: 'desenvolvimento-de-software',
        metaData: {
          seo: {
            title: 'Software personalizado para sua empresa | navike21',
            description:
              'Desenvolvemos soluções de software confiáveis e escaláveis, adaptadas à sua empresa, aos seus processos e ao seu ritmo de crescimento.'
          },
          openGraph: {
            title: 'Software feito para sua equipe e seus objetivos | navike21',
            description:
              'Criamos ferramentas digitais personalizadas para empresas que buscam eficiência, segurança e evolução constante.'
          },
          twitter: {
            title:
              'Tecnologia sob medida para empresas de todos os tamanhos | navike21',
            description:
              'Acompanhamos sua empresa com software robusto, flexível e projetado para impulsionar suas operações desde o primeiro dia.'
          }
        }
      },
      [ZH]: {
        title: '软件开发',
        description: '为您的业务量身定制的数字解决方案。',
        slug: 'ruanjian-kaifa',
        metaData: {
          seo: {
            title: '为您的企业定制软件 | navike21',
            description:
              '我们开发可靠且可扩展的软件解决方案，适应您的企业、流程及成长节奏。'
          },
          openGraph: {
            title: '为您的团队和目标打造的软件 | navike21',
            description:
              '我们为寻求高效、安全和持续发展的企业创建个性化数字工具。'
          },
          twitter: {
            title: '适用于各种规模企业的定制软件 | navike21',
            description:
              '我们为您的企业提供强大灵活的软件，助力您的运营从第一天起蓬勃发展。'
          }
        }
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
        slug: 'aplicaciones-moviles',
        metaData: {
          seo: {
            title: 'Aplicaciones móviles para tu empresa | navike21',
            description:
              'Desarrollamos apps funcionales para iOS y Android que impulsan la productividad y conectan con tus usuarios.'
          },
          openGraph: {
            title: 'Apps móviles hechas para tu equipo y clientes | navike21',
            description:
              'Creamos aplicaciones móviles personalizadas que mejoran la experiencia y eficiencia de tu negocio.'
          },
          twitter: {
            title:
              'Apps móviles a medida para empresas de todos los tamaños | navike21',
            description:
              'Ofrecemos soluciones móviles robustas y flexibles para acompañar el crecimiento de tu empresa desde el primer día.'
          }
        }
      },
      [EN]: {
        title: 'Mobile Apps',
        description: 'Functional apps for iOS and Android.',
        slug: 'mobile-apps',
        metaData: {
          seo: {
            title: 'Mobile apps for your business | navike21',
            description:
              'We develop functional apps for iOS and Android that boost productivity and engage your users.'
          },
          openGraph: {
            title: 'Mobile apps built for your team and customers | navike21',
            description:
              'We create custom mobile applications that improve your business’s efficiency and user experience.'
          },
          twitter: {
            title: 'Tailored mobile apps for companies of all sizes | navike21',
            description:
              'Providing robust and flexible mobile solutions to support your company’s growth from day one.'
          }
        }
      },
      [DE]: {
        title: 'Mobile Apps',
        description: 'Funktionale Apps für iOS und Android.',
        slug: 'mobile-apps',
        metaData: {
          seo: {
            title: 'Mobile Apps für Ihr Unternehmen | navike21',
            description:
              'Wir entwickeln funktionale Apps für iOS und Android, die Produktivität steigern und Ihre Nutzer begeistern.'
          },
          openGraph: {
            title: 'Mobile Apps für Ihr Team und Ihre Kunden | navike21',
            description:
              'Wir erstellen maßgeschneiderte mobile Anwendungen, die Effizienz und Nutzererlebnis verbessern.'
          },
          twitter: {
            title: 'Mobile Apps für Unternehmen jeder Größe | navike21',
            description:
              'Robuste und flexible mobile Lösungen, die Ihr Unternehmenswachstum von Anfang an unterstützen.'
          }
        }
      },
      [FR]: {
        title: 'Applications mobiles',
        description: 'Applications fonctionnelles pour iOS et Android.',
        slug: 'applications-mobiles',
        metaData: {
          seo: {
            title: 'Applications mobiles pour votre entreprise | navike21',
            description:
              'Nous développons des applications fonctionnelles pour iOS et Android qui boostent la productivité et engagent vos utilisateurs.'
          },
          openGraph: {
            title:
              'Applications mobiles pour votre équipe et vos clients | navike21',
            description:
              'Nous créons des applications mobiles personnalisées qui améliorent l’efficacité et l’expérience utilisateur de votre entreprise.'
          },
          twitter: {
            title:
              'Applications mobiles sur mesure pour toutes les entreprises | navike21',
            description:
              'Des solutions mobiles robustes et flexibles pour accompagner la croissance de votre entreprise dès le premier jour.'
          }
        }
      },
      [IT]: {
        title: 'Applicazioni mobili',
        description: 'App funzionali per iOS e Android.',
        slug: 'applicazioni-mobili',
        metaData: {
          seo: {
            title: 'App mobili per la tua azienda | navike21',
            description:
              'Sviluppiamo app funzionali per iOS e Android che aumentano la produttività e coinvolgono i tuoi utenti.'
          },
          openGraph: {
            title: 'App mobili per il tuo team e i tuoi clienti | navike21',
            description:
              'Creiamo applicazioni mobili personalizzate che migliorano l’efficienza e l’esperienza utente della tua azienda.'
          },
          twitter: {
            title:
              'App mobili su misura per aziende di ogni dimensione | navike21',
            description:
              'Soluzioni mobili robuste e flessibili per supportare la crescita della tua azienda sin dal primo giorno.'
          }
        }
      },
      [JA]: {
        title: 'モバイルアプリ',
        description: 'iOSとAndroid向けの機能的なアプリ。',
        slug: 'mobairu-apuri',
        metaData: {
          seo: {
            title: '御社向けモバイルアプリ | navike21',
            description:
              'iOSとAndroid向けの機能的なアプリを開発し、生産性向上とユーザーエンゲージメントを実現します。'
          },
          openGraph: {
            title: 'チームと顧客のためのモバイルアプリ | navike21',
            description:
              '企業の効率性とユーザー体験を向上させるカスタムモバイルアプリを提供します。'
          },
          twitter: {
            title: 'あらゆる規模の企業向けモバイルアプリ | navike21',
            description:
              '堅牢で柔軟なモバイルソリューションを提供し、企業の成長を初日から支援します。'
          }
        }
      },
      [KO]: {
        title: '모바일 앱',
        description: 'iOS 및 Android용 기능성 앱.',
        slug: 'mobile-apps',
        metaData: {
          seo: {
            title: '귀사를 위한 모바일 앱 | navike21',
            description:
              'iOS 및 Android용 기능성 앱을 개발하여 생산성을 높이고 사용자 참여를 촉진합니다.'
          },
          openGraph: {
            title: '팀과 고객을 위한 모바일 앱 | navike21',
            description:
              '기업의 효율성과 사용자 경험을 향상시키는 맞춤형 모바일 애플리케이션을 만듭니다.'
          },
          twitter: {
            title: '모든 규모 기업을 위한 맞춤형 모바일 앱 | navike21',
            description:
              '견고하고 유연한 모바일 솔루션을 제공하여 기업 성장을 초기부터 지원합니다.'
          }
        }
      },
      [PT]: {
        title: 'Aplicativos móveis',
        description: 'Apps funcionais para iOS e Android.',
        slug: 'aplicativos-moveis',
        metaData: {
          seo: {
            title: 'Apps móveis para sua empresa | navike21',
            description:
              'Desenvolvemos apps funcionais para iOS e Android que aumentam a produtividade e conectam seus usuários.'
          },
          openGraph: {
            title: 'Apps móveis feitos para sua equipe e clientes | navike21',
            description:
              'Criamos aplicativos móveis personalizados que melhoram a eficiência e a experiência do seu negócio.'
          },
          twitter: {
            title:
              'Apps móveis sob medida para empresas de todos os tamanhos | navike21',
            description:
              'Oferecemos soluções móveis robustas e flexíveis para acompanhar o crescimento da sua empresa desde o primeiro dia.'
          }
        }
      },
      [ZH]: {
        title: '移动应用',
        description: '适用于iOS和Android的功能性应用。',
        slug: 'yidong-yingyong',
        metaData: {
          seo: {
            title: '为您的企业开发移动应用 | navike21',
            description:
              '我们开发功能完善的iOS和Android应用，提高生产力并增强用户互动。'
          },
          openGraph: {
            title: '为您的团队和客户打造的移动应用 | navike21',
            description: '我们提供定制移动应用，提升您的业务效率和用户体验。'
          },
          twitter: {
            title: '适合各种规模企业的定制移动应用 | navike21',
            description:
              '我们提供强大灵活的移动解决方案，从第一天起助力企业成长。'
          }
        }
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
        slug: 'marketing-digital',
        metaData: {
          seo: {
            title:
              'Marketing digital creativo que impulsa tu crecimiento | navike21',
            description:
              'Diseñamos estrategias innovadoras que elevan tu marca, captan clientes y multiplican tus ventas de forma medible.'
          },
          openGraph: {
            title: 'Estrategias digitales que conectan y venden | navike21',
            description:
              'Creamos campañas personalizadas que transforman tu presencia online en resultados reales y sostenibles.'
          },
          twitter: {
            title:
              'Marketing digital que potencia empresas de todos los tamaños | navike21',
            description:
              'Soluciones creativas y efectivas que acompañan el crecimiento de tu negocio desde el primer día.'
          }
        }
      },
      [EN]: {
        title: 'Digital Marketing',
        description: 'Strategies that boost your brand and sales.',
        slug: 'digital-marketing',
        metaData: {
          seo: {
            title:
              'Creative digital marketing that drives your growth | navike21',
            description:
              'We design innovative strategies that elevate your brand, attract customers, and multiply your sales measurably.'
          },
          openGraph: {
            title: 'Digital strategies that connect and convert | navike21',
            description:
              'We craft custom campaigns that turn your online presence into real, sustainable results.'
          },
          twitter: {
            title:
              'Digital marketing empowering businesses of all sizes | navike21',
            description:
              'Creative and effective solutions that support your business growth from day one.'
          }
        }
      },
      [DE]: {
        title: 'Digitales Marketing',
        description: 'Strategien, die Ihre Marke und Verkäufe ankurbeln.',
        slug: 'digitales-marketing',
        metaData: {
          seo: {
            title:
              'Kreatives digitales Marketing, das Ihr Wachstum antreibt | navike21',
            description:
              'Wir entwickeln innovative Strategien, die Ihre Marke stärken, Kunden anziehen und Ihre Verkäufe messbar steigern.'
          },
          openGraph: {
            title:
              'Digitale Strategien, die verbinden und konvertieren | navike21',
            description:
              'Wir erstellen maßgeschneiderte Kampagnen, die Ihre Online-Präsenz in echte, nachhaltige Ergebnisse verwandeln.'
          },
          twitter: {
            title: 'Digitales Marketing für Unternehmen jeder Größe | navike21',
            description:
              'Kreative und effektive Lösungen, die Ihr Unternehmenswachstum von Anfang an unterstützen.'
          }
        }
      },
      [FR]: {
        title: 'Marketing Digital',
        description: 'Stratégies qui boostent votre marque et vos ventes.',
        slug: 'marketing-digital',
        metaData: {
          seo: {
            title:
              'Marketing digital créatif qui stimule votre croissance | navike21',
            description:
              'Nous concevons des stratégies innovantes qui valorisent votre marque, attirent des clients et multiplient vos ventes de manière mesurable.'
          },
          openGraph: {
            title:
              'Stratégies digitales qui connectent et convertissent | navike21',
            description:
              'Nous créons des campagnes personnalisées qui transforment votre présence en ligne en résultats réels et durables.'
          },
          twitter: {
            title:
              'Marketing digital au service des entreprises de toutes tailles | navike21',
            description:
              'Des solutions créatives et efficaces qui accompagnent la croissance de votre entreprise dès le premier jour.'
          }
        }
      },
      [IT]: {
        title: 'Marketing Digitale',
        description: 'Strategie che potenziano il tuo marchio e le vendite.',
        slug: 'marketing-digitale',
        metaData: {
          seo: {
            title:
              'Marketing digitale creativo che guida la tua crescita | navike21',
            description:
              'Progettiamo strategie innovative che valorizzano il tuo brand, attirano clienti e moltiplicano le vendite in modo misurabile.'
          },
          openGraph: {
            title: 'Strategie digitali che connettono e convertono | navike21',
            description:
              'Creiamo campagne personalizzate che trasformano la tua presenza online in risultati reali e sostenibili.'
          },
          twitter: {
            title:
              'Marketing digitale per aziende di tutte le dimensioni | navike21',
            description:
              'Soluzioni creative ed efficaci che supportano la crescita della tua azienda sin dal primo giorno.'
          }
        }
      },
      [JA]: {
        title: 'デジタルマーケティング',
        description: 'ブランドと売上を向上させる戦略。',
        slug: 'dejitaru-maaketingu',
        metaData: {
          seo: {
            title:
              '成長を促進するクリエイティブなデジタルマーケティング | navike21',
            description:
              'ブランドを高め、顧客を引きつけ、売上を測定可能に増加させる革新的な戦略を設計します。'
          },
          openGraph: {
            title: 'つながりを生み、成果を出すデジタル戦略 | navike21',
            description:
              'オンラインプレゼンスを実際の持続可能な成果に変えるカスタムキャンペーンを作成します。'
          },
          twitter: {
            title:
              'あらゆる規模の企業を支援するデジタルマーケティング | navike21',
            description:
              '創造的で効果的なソリューションを提供し、初日から企業の成長をサポートします。'
          }
        }
      },
      [KO]: {
        title: '디지털 마케팅',
        description: '브랜드와 판매를 촉진하는 전략.',
        slug: 'digital-marketing',
        metaData: {
          seo: {
            title: '성장을 촉진하는 창의적인 디지털 마케팅 | navike21',
            description:
              '브랜드를 강화하고 고객을 유치하며 매출을 측정 가능하게 증가시키는 혁신적인 전략을 설계합니다.'
          },
          openGraph: {
            title: '연결하고 전환하는 디지털 전략 | navike21',
            description:
              '온라인 존재감을 실제 지속 가능한 결과로 바꾸는 맞춤 캠페인을 만듭니다.'
          },
          twitter: {
            title: '모든 규모 기업을 위한 디지털 마케팅 | navike21',
            description:
              '창의적이고 효과적인 솔루션을 제공하여 첫날부터 비즈니스 성장을 지원합니다.'
          }
        }
      },
      [PT]: {
        title: 'Marketing Digital',
        description: 'Estratégias que impulsionam sua marca e vendas.',
        slug: 'marketing-digital',
        metaData: {
          seo: {
            title:
              'Marketing digital criativo que impulsiona seu crescimento | navike21',
            description:
              'Desenhamos estratégias inovadoras que valorizam sua marca, atraem clientes e multiplicam suas vendas de forma mensurável.'
          },
          openGraph: {
            title: 'Estratégias digitais que conectam e convertem | navike21',
            description:
              'Criamos campanhas personalizadas que transformam sua presença online em resultados reais e sustentáveis.'
          },
          twitter: {
            title:
              'Marketing digital para empresas de todos os tamanhos | navike21',
            description:
              'Soluções criativas e eficazes que apoiam o crescimento do seu negócio desde o primeiro dia.'
          }
        }
      },
      [ZH]: {
        title: '数字营销',
        description: '推动您的品牌和销售的策略。',
        slug: 'shuzi-yingxiao',
        metaData: {
          seo: {
            title: '推动增长的创意数字营销 | navike21',
            description:
              '我们设计创新策略，提升品牌形象，吸引客户，并可衡量地增加销售额。'
          },
          openGraph: {
            title: '连接客户并转化的数字策略 | navike21',
            description:
              '我们打造定制化活动，将您的线上存在转化为真实且可持续的成果。'
          },
          twitter: {
            title: '适合各种规模企业的数字营销 | navike21',
            description:
              '富有创意且高效的解决方案，从第一天起支持您的业务增长。'
          }
        }
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
        slug: 'seo',
        metaData: {
          seo: {
            title:
              'SEO que posiciona tu negocio en los primeros resultados | navike21',
            description:
              'Optimizamos tu presencia online para mejorar tu visibilidad y atraer más clientes con estrategias SEO efectivas y personalizadas.'
          },
          openGraph: {
            title:
              'Estrategias SEO que aumentan tu tráfico y ventas | navike21',
            description:
              'Implementamos técnicas avanzadas para que tu negocio destaque en buscadores y logre un crecimiento sostenible.'
          },
          twitter: {
            title:
              'SEO profesional para empresas de todos los tamaños | navike21',
            description:
              'Soluciones SEO flexibles que acompañan el crecimiento de tu empresa desde el primer día.'
          }
        }
      },
      [EN]: {
        title: 'SEO',
        description: 'Rank your business in top search results.',
        slug: 'seo',
        metaData: {
          seo: {
            title: 'SEO that ranks your business at the top | navike21',
            description:
              'We optimize your online presence to improve visibility and attract more customers with effective, personalized SEO strategies.'
          },
          openGraph: {
            title:
              'SEO strategies that boost your traffic and sales | navike21',
            description:
              'We implement advanced techniques to help your business stand out in search engines and achieve sustainable growth.'
          },
          twitter: {
            title: 'Professional SEO for businesses of all sizes | navike21',
            description:
              'Flexible SEO solutions that support your company’s growth from day one.'
          }
        }
      },
      [DE]: {
        title: 'SEO',
        description:
          'Positionieren Sie Ihr Geschäft in den Top-Suchergebnissen.',
        slug: 'seo',
        metaData: {
          seo: {
            title: 'SEO, das Ihr Unternehmen an die Spitze bringt | navike21',
            description:
              'Wir optimieren Ihre Online-Präsenz, verbessern die Sichtbarkeit und gewinnen mehr Kunden mit effektiven, personalisierten SEO-Strategien.'
          },
          openGraph: {
            title:
              'SEO-Strategien zur Steigerung von Traffic und Umsatz | navike21',
            description:
              'Wir setzen fortschrittliche Techniken ein, damit Ihr Unternehmen in Suchmaschinen hervorsticht und nachhaltig wächst.'
          },
          twitter: {
            title: 'Professionelles SEO für Unternehmen jeder Größe | navike21',
            description:
              'Flexible SEO-Lösungen, die das Wachstum Ihres Unternehmens von Anfang an unterstützen.'
          }
        }
      },
      [FR]: {
        title: 'SEO',
        description:
          'Positionnez votre entreprise dans les premiers résultats.',
        slug: 'seo',
        metaData: {
          seo: {
            title: 'SEO qui positionne votre entreprise en tête | navike21',
            description:
              'Nous optimisons votre présence en ligne pour améliorer la visibilité et attirer plus de clients avec des stratégies SEO efficaces et personnalisées.'
          },
          openGraph: {
            title:
              'Stratégies SEO pour augmenter votre trafic et vos ventes | navike21',
            description:
              'Nous mettons en œuvre des techniques avancées pour faire ressortir votre entreprise dans les moteurs de recherche et assurer une croissance durable.'
          },
          twitter: {
            title:
              'SEO professionnel pour entreprises de toutes tailles | navike21',
            description:
              'Des solutions SEO flexibles qui accompagnent la croissance de votre entreprise dès le premier jour.'
          }
        }
      },
      [IT]: {
        title: 'SEO',
        description: 'Posiziona la tua attività nei primi risultati.',
        slug: 'seo',
        metaData: {
          seo: {
            title: 'SEO che posiziona la tua azienda ai vertici | navike21',
            description:
              'Ottimizziamo la tua presenza online per migliorare la visibilità e attirare più clienti con strategie SEO efficaci e personalizzate.'
          },
          openGraph: {
            title: 'Strategie SEO per aumentare traffico e vendite | navike21',
            description:
              'Applichiamo tecniche avanzate per far risaltare la tua azienda nei motori di ricerca e garantirne una crescita sostenibile.'
          },
          twitter: {
            title:
              'SEO professionale per aziende di tutte le dimensioni | navike21',
            description:
              'Soluzioni SEO flessibili che supportano la crescita della tua azienda sin dal primo giorno.'
          }
        }
      },
      [JA]: {
        title: 'SEO',
        description: 'ビジネスをトップ検索結果にランクインさせる。',
        slug: 'seo',
        metaData: {
          seo: {
            title: 'ビジネスを検索上位に導くSEO | navike21',
            description:
              '効果的でパーソナライズされたSEO戦略で、オンラインの存在感を最適化し、顧客を増やします。'
          },
          openGraph: {
            title: 'トラフィックと売上を増やすSEO戦略 | navike21',
            description:
              '検索エンジンで目立つための高度な技術を実施し、持続可能な成長を支援します。'
          },
          twitter: {
            title: 'あらゆる規模の企業向けプロフェッショナルSEO | navike21',
            description: '初日から企業の成長を支える柔軟なSEOソリューション。'
          }
        }
      },
      [KO]: {
        title: 'SEO',
        description: '비즈니스를 상위 검색 결과에 노출시키세요.',
        slug: 'seo',
        metaData: {
          seo: {
            title: '비즈니스를 상위에 노출시키는 SEO | navike21',
            description:
              '효과적이고 맞춤화된 SEO 전략으로 온라인 존재감을 최적화하고 고객을 유치합니다.'
          },
          openGraph: {
            title: '트래픽과 매출을 증가시키는 SEO 전략 | navike21',
            description:
              '검색 엔진에서 두드러지기 위한 고급 기술을 적용하여 지속 가능한 성장을 지원합니다.'
          },
          twitter: {
            title: '모든 규모 기업을 위한 전문 SEO | navike21',
            description: '첫날부터 비즈니스 성장을 지원하는 유연한 SEO 솔루션.'
          }
        }
      },
      [PT]: {
        title: 'SEO',
        description: 'Posicione seu negócio nos primeiros resultados.',
        slug: 'seo',
        metaData: {
          seo: {
            title: 'SEO que posiciona seu negócio no topo | navike21',
            description:
              'Otimização da sua presença online para melhorar a visibilidade e atrair mais clientes com estratégias SEO eficazes e personalizadas.'
          },
          openGraph: {
            title:
              'Estratégias SEO que aumentam seu tráfego e vendas | navike21',
            description:
              'Implementamos técnicas avançadas para destacar seu negócio nos motores de busca e garantir crescimento sustentável.'
          },
          twitter: {
            title:
              'SEO profissional para empresas de todos os tamanhos | navike21',
            description:
              'Soluções SEO flexíveis que acompanham o crescimento da sua empresa desde o primeiro dia.'
          }
        }
      },
      [ZH]: {
        title: '搜索引擎优化',
        description: '将您的业务排名在搜索结果的前列。',
        slug: 'sousuo-yinqing-youhua',
        metaData: {
          seo: {
            title: '助力您的业务排名靠前的SEO | navike21',
            description:
              '通过有效且个性化的SEO策略优化您的线上形象，提高可见度并吸引更多客户。'
          },
          openGraph: {
            title: '提升流量和销售的SEO策略 | navike21',
            description:
              '实施先进技术，让您的业务在搜索引擎中脱颖而出，实现可持续增长。'
          },
          twitter: {
            title: '适合各种规模企业的专业SEO | navike21',
            description: '灵活的SEO解决方案，从第一天起支持您的企业成长。'
          }
        }
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
        slug: 'diseno-ux-ui',
        metaData: {
          seo: {
            title:
              'Diseño UX/UI centrado en la simplicidad y experiencia fluida | navike21',
            description:
              'Creamos interfaces intuitivas y accesibles que facilitan la interacción con el usuario mediante microinteracciones y procesos optimizados.'
          },
          openGraph: {
            title:
              'UX/UI moderno con enfoque en usabilidad y accesibilidad | navike21',
            description:
              'Diseñamos experiencias digitales que priorizan la claridad, la respuesta inmediata y la navegación sencilla para maximizar la satisfacción del usuario.'
          },
          twitter: {
            title:
              'Diseño UX/UI eficiente que mejora la interacción del usuario | navike21',
            description:
              'Soluciones que integran microinteracciones y accesibilidad para ofrecer una experiencia fluida y sin complicaciones.'
          }
        }
      },
      [EN]: {
        title: 'UX/UI Design',
        description: 'User-centered digital experiences.',
        slug: 'ux-ui-design',
        metaData: {
          seo: {
            title:
              'UX/UI design focused on simplicity and seamless experience | navike21',
            description:
              'We create intuitive and accessible interfaces that facilitate user interaction through microinteractions and optimized processes.'
          },
          openGraph: {
            title:
              'Modern UX/UI emphasizing usability and accessibility | navike21',
            description:
              'We design digital experiences prioritizing clarity, immediate feedback, and easy navigation to maximize user satisfaction.'
          },
          twitter: {
            title:
              'Efficient UX/UI design improving user interaction | navike21',
            description:
              'Solutions integrating microinteractions and accessibility for a smooth and effortless user experience.'
          }
        }
      },
      [DE]: {
        title: 'UX/UI Design',
        description: 'Benutzerzentrierte digitale Erlebnisse.',
        slug: 'ux-ui-design',
        metaData: {
          seo: {
            title:
              'UX/UI-Design mit Fokus auf Einfachheit und nahtlose Erfahrung | navike21',
            description:
              'Wir erstellen intuitive und zugängliche Oberflächen, die durch Mikrointeraktionen und optimierte Prozesse die Nutzerinteraktion erleichtern.'
          },
          openGraph: {
            title:
              'Modernes UX/UI mit Schwerpunkt auf Benutzerfreundlichkeit und Zugänglichkeit | navike21',
            description:
              'Wir gestalten digitale Erlebnisse, die Klarheit, sofortiges Feedback und einfache Navigation priorisieren, um die Nutzerzufriedenheit zu maximieren.'
          },
          twitter: {
            title:
              'Effizientes UX/UI-Design zur Verbesserung der Nutzerinteraktion | navike21',
            description:
              'Lösungen, die Mikrointeraktionen und Zugänglichkeit integrieren und so eine reibungslose und mühelose Nutzererfahrung bieten.'
          }
        }
      },
      [FR]: {
        title: 'Design UX/UI',
        description: 'Expériences numériques centrées sur l’utilisateur.',
        slug: 'design-ux-ui',
        metaData: {
          seo: {
            title:
              "Design UX/UI axé sur la simplicité et l'expérience fluide | navike21",
            description:
              "Nous créons des interfaces intuitives et accessibles qui facilitent l'interaction utilisateur grâce aux micro-interactions et aux processus optimisés."
          },
          openGraph: {
            title:
              "UX/UI moderne mettant l'accent sur l'utilisabilité et l'accessibilité | navike21",
            description:
              'Nous concevons des expériences digitales privilégiant la clarté, le retour immédiat et la navigation facile pour maximiser la satisfaction utilisateur.'
          },
          twitter: {
            title:
              "Design UX/UI efficace améliorant l'interaction utilisateur | navike21",
            description:
              'Des solutions intégrant micro-interactions et accessibilité pour une expérience utilisateur fluide et sans effort.'
          }
        }
      },
      [IT]: {
        title: 'Design UX/UI',
        description: 'Esperienze digitali incentrate sull’utente.',
        slug: 'design-ux-ui',
        metaData: {
          seo: {
            title:
              'Design UX/UI incentrato sulla semplicità e sull’esperienza fluida | navike21',
            description:
              'Creiamo interfacce intuitive e accessibili che facilitano l’interazione degli utenti tramite microinterazioni e processi ottimizzati.'
          },
          openGraph: {
            title:
              'UX/UI moderno con focus su usabilità e accessibilità | navike21',
            description:
              'Progettiamo esperienze digitali che privilegiano chiarezza, feedback immediato e navigazione semplice per massimizzare la soddisfazione degli utenti.'
          },
          twitter: {
            title:
              'Design UX/UI efficiente che migliora l’interazione con l’utente | navike21',
            description:
              'Soluzioni che integrano microinterazioni e accessibilità per offrire un’esperienza fluida e senza sforzo.'
          }
        }
      },
      [JA]: {
        title: 'UX/UIデザイン',
        description: 'ユーザー中心のデジタル体験。',
        slug: 'ux-ui-dezain',
        metaData: {
          seo: {
            title:
              'シンプルでスムーズな体験に焦点を当てたUX/UIデザイン | navike21',
            description:
              'マイクロインタラクションと最適化されたプロセスで、直感的でアクセシブルなインターフェースを作成します。'
          },
          openGraph: {
            title:
              '使いやすさとアクセシビリティを重視した最新のUX/UI | navike21',
            description:
              '明確さ、即時フィードバック、簡単なナビゲーションを優先したデジタル体験をデザインします。'
          },
          twitter: {
            title:
              'ユーザーの操作性を向上させる効率的なUX/UIデザイン | navike21',
            description:
              'マイクロインタラクションとアクセシビリティを統合し、スムーズでストレスのない体験を提供します。'
          }
        }
      },
      [KO]: {
        title: 'UX/UI 디자인',
        description: '사용자 중심의 디지털 경험.',
        slug: 'ux-ui-design',
        metaData: {
          seo: {
            title: '단순함과 원활한 경험에 초점을 맞춘 UX/UI 디자인 | navike21',
            description:
              '마이크로인터랙션과 최적화된 프로세스를 통해 직관적이고 접근성 높은 인터페이스를 만듭니다.'
          },
          openGraph: {
            title: '사용성과 접근성을 강조한 현대적인 UX/UI | navike21',
            description:
              '명확성, 즉각적인 피드백, 쉬운 내비게이션을 우선시하는 디지털 경험을 설계합니다.'
          },
          twitter: {
            title:
              '사용자 상호작용을 향상시키는 효율적인 UX/UI 디자인 | navike21',
            description:
              '마이크로인터랙션과 접근성을 통합하여 부드럽고 간편한 사용자 경험을 제공합니다.'
          }
        }
      },
      [PT]: {
        title: 'Design UX/UI',
        description: 'Experiências digitais centradas no usuário.',
        slug: 'design-ux-ui',
        metaData: {
          seo: {
            title:
              'Design UX/UI focado em simplicidade e experiência fluida | navike21',
            description:
              'Criamos interfaces intuitivas e acessíveis que facilitam a interação do usuário por meio de microinterações e processos otimizados.'
          },
          openGraph: {
            title:
              'UX/UI moderno com ênfase em usabilidade e acessibilidade | navike21',
            description:
              'Projetamos experiências digitais que priorizam clareza, feedback imediato e navegação fácil para maximizar a satisfação do usuário.'
          },
          twitter: {
            title:
              'Design UX/UI eficiente que melhora a interação do usuário | navike21',
            description:
              'Soluções que integram microinterações e acessibilidade para oferecer uma experiência fluida e sem esforço.'
          }
        }
      },
      [ZH]: {
        title: '用户体验/界面设计',
        description: '以用户为中心的数字体验。',
        slug: 'yonghu-jingmian-sheji',
        metaData: {
          seo: {
            title: '专注于简洁和流畅体验的UX/UI设计 | navike21',
            description:
              '我们创建直观且无障碍的界面，通过微交互和优化的流程促进用户互动。'
          },
          openGraph: {
            title: '注重可用性和无障碍性的现代UX/UI | navike21',
            description:
              '我们设计以清晰、即时反馈和简单导航为优先的数字体验，最大化用户满意度。'
          },
          twitter: {
            title: '高效的UX/UI设计，提升用户互动体验 | navike21',
            description:
              '整合微交互和无障碍性，提供流畅且轻松的用户体验解决方案。'
          }
        }
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
        slug: 'email-marketing',
        metaData: {
          seo: {
            title:
              'Email marketing estratégico para conectar y fidelizar clientes | navike21',
            description:
              'Diseñamos campañas personalizadas que generan engagement real y resultados medibles, potenciando la relación con tus clientes.'
          },
          openGraph: {
            title:
              'Campañas de email marketing efectivas y personalizadas | navike21',
            description:
              'Creamos estrategias que impulsan la comunicación directa, fortalecen la confianza y optimizan la conversión en cada envío.'
          },
          twitter: {
            title:
              'Email marketing profesional que conecta con tus clientes | navike21',
            description:
              'Soluciones de email marketing centradas en el cliente, con mensajes claros, segmentación precisa y análisis para mejorar continuamente.'
          }
        }
      },
      [EN]: {
        title: 'Email Marketing',
        description: 'Campaigns that connect with your customers.',
        slug: 'email-marketing',
        metaData: {
          seo: {
            title:
              'Strategic email marketing to connect and engage customers | navike21',
            description:
              'We design personalized campaigns that drive real engagement and measurable results, strengthening your customer relationships.'
          },
          openGraph: {
            title:
              'Effective, personalized email marketing campaigns | navike21',
            description:
              'Creating strategies that enhance direct communication, build trust, and optimize conversions with every send.'
          },
          twitter: {
            title:
              'Professional email marketing that connects with your customers | navike21',
            description:
              'Client-focused email marketing solutions with clear messaging, precise segmentation, and ongoing performance analysis.'
          }
        }
      },
      [DE]: {
        title: 'E-Mail-Marketing',
        description: 'Kampagnen, die mit Ihren Kunden verbinden.',
        slug: 'e-mail-marketing',
        metaData: {
          seo: {
            title:
              'Strategisches E-Mail-Marketing zur Kundenbindung und -interaktion | navike21',
            description:
              'Wir gestalten personalisierte Kampagnen, die echtes Engagement und messbare Ergebnisse fördern und Ihre Kundenbeziehungen stärken.'
          },
          openGraph: {
            title:
              'Effektive und personalisierte E-Mail-Marketing-Kampagnen | navike21',
            description:
              'Strategien, die direkte Kommunikation verbessern, Vertrauen aufbauen und Konversionen bei jedem Versand optimieren.'
          },
          twitter: {
            title:
              'Professionelles E-Mail-Marketing, das Kunden verbindet | navike21',
            description:
              'Kundenorientierte E-Mail-Marketing-Lösungen mit klaren Botschaften, präziser Segmentierung und kontinuierlicher Leistungsanalyse.'
          }
        }
      },
      [FR]: {
        title: 'Email Marketing',
        description: 'Campagnes qui connectent avec vos clients.',
        slug: 'email-marketing',
        metaData: {
          seo: {
            title:
              'Marketing par email stratégique pour connecter et fidéliser | navike21',
            description:
              'Nous concevons des campagnes personnalisées qui génèrent un réel engagement et des résultats mesurables, renforçant vos relations clients.'
          },
          openGraph: {
            title:
              "Campagnes d'email marketing efficaces et personnalisées | navike21",
            description:
              'Des stratégies qui améliorent la communication directe, renforcent la confiance et optimisent les conversions à chaque envoi.'
          },
          twitter: {
            title:
              'Email marketing professionnel qui connecte avec vos clients | navike21',
            description:
              "Solutions d'email marketing centrées sur le client, avec des messages clairs, une segmentation précise et une analyse continue des performances."
          }
        }
      },
      [IT]: {
        title: 'Email Marketing',
        description: 'Campagne che connettono con i tuoi clienti.',
        slug: 'email-marketing',
        metaData: {
          seo: {
            title:
              'Email marketing strategico per connettere e fidelizzare clienti | navike21',
            description:
              'Progettiamo campagne personalizzate che generano reale coinvolgimento e risultati misurabili, rafforzando le relazioni con i clienti.'
          },
          openGraph: {
            title:
              'Campagne di email marketing efficaci e personalizzate | navike21',
            description:
              'Strategie che migliorano la comunicazione diretta, costruiscono fiducia e ottimizzano le conversioni ad ogni invio.'
          },
          twitter: {
            title:
              'Email marketing professionale che connette con i tuoi clienti | navike21',
            description:
              'Soluzioni di email marketing focalizzate sul cliente, con messaggi chiari, segmentazione precisa e analisi continua delle prestazioni.'
          }
        }
      },
      [JA]: {
        title: 'メールマーケティング',
        description: '顧客とつながるキャンペーン。',
        slug: 'meeru-maaketingu',
        metaData: {
          seo: {
            title:
              '顧客とのつながりとエンゲージメントを促進する戦略的なメールマーケティング | navike21',
            description:
              '実際のエンゲージメントと測定可能な成果を生み出すパーソナライズされたキャンペーンを設計し、顧客関係を強化します。'
          },
          openGraph: {
            title:
              '効果的でパーソナライズされたメールマーケティングキャンペーン | navike21',
            description:
              '直接的なコミュニケーションを強化し、信頼を築き、送信ごとにコンバージョンを最適化する戦略を作成します。'
          },
          twitter: {
            title:
              '顧客とつながるプロフェッショナルなメールマーケティング | navike21',
            description:
              '明確なメッセージ、精密なセグメンテーション、継続的なパフォーマンス分析を備えた顧客中心のメールマーケティングソリューションです。'
          }
        }
      },
      [KO]: {
        title: '이메일 마케팅',
        description: '고객과 연결되는 캠페인.',
        slug: 'email-marketing',
        metaData: {
          seo: {
            title:
              '고객과의 연결 및 참여를 위한 전략적 이메일 마케팅 | navike21',
            description:
              '실제 참여와 측정 가능한 결과를 이끄는 개인화된 캠페인을 설계하여 고객 관계를 강화합니다.'
          },
          openGraph: {
            title: '효과적이고 개인화된 이메일 마케팅 캠페인 | navike21',
            description:
              '직접 소통을 강화하고 신뢰를 구축하며 매 전송마다 전환을 최적화하는 전략을 만듭니다.'
          },
          twitter: {
            title: '고객과 연결되는 전문 이메일 마케팅 | navike21',
            description:
              '명확한 메시지, 정밀한 세분화, 지속적인 성과 분석이 포함된 고객 중심 이메일 마케팅 솔루션입니다.'
          }
        }
      },
      [PT]: {
        title: 'Email Marketing',
        description: 'Campanhas que conectam com seus clientes.',
        slug: 'email-marketing',
        metaData: {
          seo: {
            title:
              'Marketing por email estratégico para conectar e fidelizar clientes | navike21',
            description:
              'Criamos campanhas personalizadas que geram engajamento real e resultados mensuráveis, fortalecendo o relacionamento com seus clientes.'
          },
          openGraph: {
            title:
              'Campanhas de email marketing eficazes e personalizadas | navike21',
            description:
              'Desenvolvemos estratégias que aprimoram a comunicação direta, constroem confiança e otimizam conversões a cada envio.'
          },
          twitter: {
            title:
              'Marketing por email profissional que conecta com seus clientes | navike21',
            description:
              'Soluções de email marketing focadas no cliente, com mensagens claras, segmentação precisa e análise contínua de desempenho.'
          }
        }
      },
      [ZH]: {
        title: '电子邮件营销',
        description: '与客户连接的营销活动。',
        slug: 'dianzi-youjian-yingxiao',
        metaData: {
          seo: {
            title: '战略性电子邮件营销，连接并留住客户 | navike21',
            description:
              '我们设计个性化活动，带来真实的参与度和可衡量的成果，加强与客户的关系。'
          },
          openGraph: {
            title: '有效且个性化的电子邮件营销活动 | navike21',
            description:
              '创建提升直接沟通、建立信任并优化每次发送转化率的策略。'
          },
          twitter: {
            title: '专业电子邮件营销，连接您的客户 | navike21',
            description:
              '以客户为中心的电子邮件营销解决方案，具备清晰的信息、精准的细分及持续的绩效分析。'
          }
        }
      }
    }
  }
]
