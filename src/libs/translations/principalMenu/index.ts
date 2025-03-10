import { ELanguage } from '@Enums/languages'
import { TTranslations } from './principalMenu.types'
import { EPrincipalMenuKey } from '@Enums/principalMenuKey'

export const principalMenuTranslations = (
  language: ELanguage
): TTranslations => ({
  [ELanguage.DE]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Startseite',
      path: `/${language}/`,
      slug: 'startseite'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'Über uns',
      path: `/${language}/ueber-uns`,
      slug: 'ueber-uns'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Dienstleistungen',
      path: `/${language}/dienstleistungen`,
      slug: 'dienstleistungen'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Projekte',
      path: `/${language}/projekte`,
      slug: 'projekte'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Kontakt',
      path: `/${language}/kontakt`,
      slug: 'kontakt'
    }
  ],
  [ELanguage.EN]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Home',
      path: `/${language}/`,
      slug: 'home'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'About us',
      path: `/${language}/about-us`,
      slug: 'about-us'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Services',
      path: `/${language}/services`,
      slug: 'services'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Projects',
      path: `/${language}/projects`,
      slug: 'projects'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Contact',
      path: `/${language}/contact`,
      slug: 'contact'
    }
  ],
  [ELanguage.ES]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Inicio',
      path: `/${language}/`,
      slug: 'inicio'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'Acerca de nosotros',
      path: `/${language}/acerca-de-nosotros`,
      slug: 'acerca-de-nosotros'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Servicios',
      path: `/${language}/servicios`,
      slug: 'servicios'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Proyectos',
      path: `/${language}/proyectos`,
      slug: 'proyectos'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Contacto',
      path: `/${language}/contacto`,
      slug: 'contacto'
    }
  ],
  [ELanguage.FR]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Accueil',
      path: `/${language}/`,
      slug: 'accueil'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'À propos de nous',
      path: `/${language}/a-propos-de-nous`,
      slug: 'a-propos-de-nous'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Services',
      path: `/${language}/services`,
      slug: 'services'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Projets',
      path: `/${language}/projets`,
      slug: 'projets'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Contact',
      path: `/${language}/contact`,
      slug: 'contact'
    }
  ],
  [ELanguage.IT]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Pagina iniziale',
      path: `/${language}/`,
      slug: 'pagina-iniziale'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'Chi siamo',
      path: `/${language}/chi-siamo`,
      slug: 'chi-siamo'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Servizi',
      path: `/${language}/servizi`,
      slug: 'servizi'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Progetti',
      path: `/${language}/progetti`,
      slug: 'progetti'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Contatto',
      path: `/${language}/contatto`,
      slug: 'contatto'
    }
  ],
  [ELanguage.JP]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'ホーム',
      path: `/${language}/`,
      slug: 'homu'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: '私たちについて',
      path: `/${language}/watashitachi-ni-tsuite`,
      slug: 'watashitachi-ni-tsuite'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'サービス',
      path: `/${language}/sabisu`,
      slug: 'sabisu'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'プロジェクト',
      path: `/${language}/purojekuto`,
      slug: 'purojekuto'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'ブログ',
      path: `/${language}/burogu`,
      slug: 'burogu'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'コンタクト',
      path: `/${language}/kontakuto`,
      slug: 'kontakuto'
    }
  ],
  [ELanguage.KO]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: '홈',
      path: `/${language}/`,
      slug: 'hom'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: '우리에 대해',
      path: `/${language}/uli-e-daehae`,
      slug: 'uli-e-daehae'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: '서비스',
      path: `/${language}/seobiseu`,
      slug: 'seobiseu'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: '프로젝트',
      path: `/${language}/peulojegteu`,
      slug: 'peulojegteu'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: '블로그',
      path: `/${language}/beulrogeu`,
      slug: 'beulrogeu'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: '접촉',
      path: `/${language}/jeobchog`,
      slug: 'jeobchog'
    }
  ],
  [ELanguage.PT]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Página inicial',
      path: `/${language}/`,
      slug: 'pagina-inicial'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'Sobre nós',
      path: `/${language}/sobre-nos`,
      slug: 'sobre-nos'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Serviços',
      path: `/${language}/servicos`,
      slug: 'servicos'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Projetos',
      path: `/${language}/projetos`,
      slug: 'projetos'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Blog',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Contato',
      path: `/${language}/contato`,
      slug: 'contato'
    }
  ],
  [ELanguage.RU]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: 'Главная',
      path: `/${language}/`,
      slug: 'glavnaya'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: 'О нас',
      path: `/${language}/o-nas`,
      slug: 'o-nas'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: 'Услуги',
      path: `/${language}/uslugi`,
      slug: 'uslugi'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: 'Проекты',
      path: `/${language}/proekty`,
      slug: 'proekty'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: 'Блог',
      path: `/${language}/blog`,
      slug: 'blog'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: 'Контакт',
      path: `/${language}/kontakt`,
      slug: 'kontakt'
    }
  ],
  [ELanguage.ZH]: [
    {
      key: EPrincipalMenuKey.HOME,
      label: '主页',
      path: `/${language}/`,
      slug: 'zhuye'
    },
    {
      key: EPrincipalMenuKey.ABOUT,
      label: '关于我们',
      path: `/${language}/guanyuwomen`,
      slug: 'guanyuwomen'
    },
    {
      key: EPrincipalMenuKey.SERVICES,
      label: '服务',
      path: `/${language}/fuwu`,
      slug: 'fuwu'
    },
    {
      key: EPrincipalMenuKey.PROJECTS,
      label: '项目',
      path: `/${language}/xiangmu`,
      slug: 'xiangmu'
    },
    {
      key: EPrincipalMenuKey.BLOG,
      label: '博客',
      path: `/${language}/bokex`,
      slug: 'bokex'
    },
    {
      key: EPrincipalMenuKey.CONTACT,
      label: '联系',
      path: `/${language}/lianxi`,
      slug: 'lianxi'
    }
  ]
})
