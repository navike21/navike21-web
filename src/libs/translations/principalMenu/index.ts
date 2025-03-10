import { ELanguage } from '@Enums/languages'
import { TTranslations } from './principalMenu.types'

export const principalMenuTranslations = (
  language: ELanguage
): TTranslations => ({
  [ELanguage.DE]: [
    {
      key: 'home',
      label: 'Startseite',
      path: `/${language}/`,
      slug: 'startseite'
    },
    {
      key: 'about',
      label: 'Über uns',
      path: `/${language}/ueber-uns`,
      slug: 'ueber-uns'
    },
    {
      key: 'services',
      label: 'Dienstleistungen',
      path: `/${language}/dienstleistungen`,
      slug: 'dienstleistungen'
    },
    {
      key: 'projects',
      label: 'Projekte',
      path: `/${language}/projekte`,
      slug: 'projekte'
    },
    {
      key: 'blog',
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Kontakt',
      path: `/${language}/kontakt`,
      slug: 'kontakt'
    }
  ],
  [ELanguage.EN]: [
    {
      key: 'home',
      label: 'Home',
      path: `/${language}/`,
      slug: 'home'
    },
    {
      key: 'about',
      label: 'About us',
      path: `/${language}/about-us`,
      slug: 'about-us'
    },
    {
      key: 'services',
      label: 'Services',
      path: `/${language}/services`,
      slug: 'services'
    },
    {
      key: 'projects',
      label: 'Projects',
      path: `/${language}/projects`,
      slug: 'projects'
    },
    {
      key: 'blog',
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Contact',
      path: `/${language}/contact`,
      slug: 'contact'
    }
  ],
  [ELanguage.ES]: [
    {
      key: 'home',
      label: 'Inicio',
      path: `/${language}/`,
      slug: 'inicio'
    },
    {
      key: 'about',
      label: 'Acerca de nosotros',
      path: `/${language}/acerca-de-nosotros`,
      slug: 'acerca-de-nosotros'
    },
    {
      key: 'services',
      label: 'Servicios',
      path: `/${language}/servicios`,
      slug: 'servicios'
    },
    {
      key: 'projects',
      label: 'Proyectos',
      path: `/${language}/proyectos`,
      slug: 'proyectos'
    },
    {
      key: 'blog',
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Contacto',
      path: `/${language}/contacto`,
      slug: 'contacto'
    }
  ],
  [ELanguage.FR]: [
    {
      key: 'home',
      label: 'Accueil',
      path: `/${language}/`,
      slug: 'accueil'
    },
    {
      key: 'about',
      label: 'À propos de nous',
      path: `/${language}/a-propos-de-nous`,
      slug: 'a-propos-de-nous'
    },
    {
      key: 'services',
      label: 'Services',
      path: `/${language}/services`,
      slug: 'services'
    },
    {
      key: 'projects',
      label: 'Projets',
      path: `/${language}/projets`,
      slug: 'projets'
    },
    {
      key: 'blog',
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Contact',
      path: `/${language}/contact`,
      slug: 'contact'
    }
  ],
  [ELanguage.IT]: [
    {
      key: 'home',
      label: 'Pagina iniziale',
      path: `/${language}/`,
      slug: 'pagina-iniziale'
    },
    {
      key: 'about',
      label: 'Chi siamo',
      path: `/${language}/chi-siamo`,
      slug: 'chi-siamo'
    },
    {
      key: 'services',
      label: 'Servizi',
      path: `/${language}/servizi`,
      slug: 'servizi'
    },
    {
      key: 'projects',
      label: 'Progetti',
      path: `/${language}/progetti`,
      slug: 'progetti'
    },
    {
      key: 'blog',
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Contatto',
      path: `/${language}/contatto`,
      slug: 'contatto'
    }
  ],
  [ELanguage.JP]: [
    {
      key: 'home',
      label: 'ホーム',
      path: `/${language}/`,
      slug: 'homu'
    },
    {
      key: 'about',
      label: '私たちについて',
      path: `/${language}/watashitachi-ni-tsuite`,
      slug: 'watashitachi-ni-tsuite'
    },
    {
      key: 'services',
      label: 'サービス',
      path: `/${language}/sabisu`,
      slug: 'sabisu'
    },
    {
      key: 'projects',
      label: 'プロジェクト',
      path: `/${language}/purojekuto`,
      slug: 'purojekuto'
    },
    {
      key: 'blog',
      label: 'ブログ',
      path: `/${language}/burogu`,
      slug: 'burogu'
    },
    {
      key: 'contact',
      label: 'コンタクト',
      path: `/${language}/kontakuto`,
      slug: 'kontakuto'
    }
  ],
  [ELanguage.KO]: [
    {
      key: 'home',
      label: '홈',
      path: `/${language}/`,
      slug: 'hom'
    },
    {
      key: 'about',
      label: '우리에 대해',
      path: `/${language}/uli-e-daehae`,
      slug: 'uli-e-daehae'
    },
    {
      key: 'services',
      label: '서비스',
      path: `/${language}/seobiseu`,
      slug: 'seobiseu'
    },
    {
      key: 'projects',
      label: '프로젝트',
      path: `/${language}/peulojegteu`,
      slug: 'peulojegteu'
    },
    {
      key: 'blog',
      label: '블로그',
      path: `/${language}/beulrogeu`,
      slug: 'beulrogeu'
    },
    {
      key: 'contact',
      label: '접촉',
      path: `/${language}/jeobchog`,
      slug: 'jeobchog'
    }
  ],
  [ELanguage.PT]: [
    {
      key: 'home',
      label: 'Página inicial',
      path: `/${language}/`,
      slug: 'pagina-inicial'
    },
    {
      key: 'about',
      label: 'Sobre nós',
      path: `/${language}/sobre-nos`,
      slug: 'sobre-nos'
    },
    {
      key: 'services',
      label: 'Serviços',
      path: `/${language}/servicos`,
      slug: 'servicos'
    },
    {
      key: 'projects',
      label: 'Projetos',
      path: `/${language}/projetos`,
      slug: 'projetos'
    },
    {
      key: 'blog',
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Contato',
      path: `/${language}/contato`,
      slug: 'contato'
    }
  ],
  [ELanguage.RU]: [
    {
      key: 'home',
      label: 'Главная',
      path: `/${language}/`,
      slug: 'glavnaya'
    },
    {
      key: 'about',
      label: 'О нас',
      path: `/${language}/o-nas`,
      slug: 'o-nas'
    },
    {
      key: 'services',
      label: 'Услуги',
      path: `/${language}/uslugi`,
      slug: 'uslugi'
    },
    {
      key: 'projects',
      label: 'Проекты',
      path: `/${language}/proekty`,
      slug: 'proekty'
    },
    {
      key: 'blog',
      label: 'Блог',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: 'contact',
      label: 'Контакт',
      path: `/${language}/kontakt`,
      slug: 'kontakt'
    }
  ],
  [ELanguage.ZH]: [
    {
      key: 'home',
      label: '主页',
      path: `/${language}/`,
      slug: 'zhuye'
    },
    {
      key: 'about',
      label: '关于我们',
      path: `/${language}/guanyuwomen`,
      slug: 'guanyuwomen'
    },
    {
      key: 'services',
      label: '服务',
      path: `/${language}/fuwu`,
      slug: 'fuwu'
    },
    {
      key: 'projects',
      label: '项目',
      path: `/${language}/xiangmu`,
      slug: 'xiangmu'
    },
    {
      key: 'blog',
      label: '博客',
      path: `/${language}/bokex`,
      slug: 'bokex'
    },
    {
      key: 'contact',
      label: '联系',
      path: `/${language}/lianxi`,
      slug: 'lianxi'
    }
  ]
})
