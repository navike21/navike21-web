import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export type TLanguagePageValue = {
  title: string
  slug: string
  subPages?: { title: string; slug: string }[]
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
    id: 'home',
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: { title: 'Inicio', slug: 'inicio' },
      [EN]: { title: 'Home', slug: 'home' },
      [DE]: { title: 'Startseite', slug: 'startseite' },
      [FR]: { title: 'Accueil', slug: 'accueil' },
      [IT]: { title: 'Home', slug: 'home' },
      [JA]: { title: 'ホーム', slug: 'home' },
      [KO]: { title: '홈', slug: 'home' },
      [PT]: { title: 'Início', slug: 'inicio' },
      [ZH]: { title: '首页', slug: 'shou-ye' }
    }
  },
  {
    id: 'about-us',
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: { title: 'Sobre nosotros', slug: 'sobre-nosotros' },
      [EN]: { title: 'About Us', slug: 'about-us' },
      [DE]: { title: 'Über uns', slug: 'ueber-uns' },
      [FR]: { title: 'À propos de nous', slug: 'a-propos-de-nous' },
      [IT]: { title: 'Chi siamo', slug: 'chi-siamo' },
      [JA]: { title: '私たちについて', slug: 'watashitachi-ni-tsuite' },
      [KO]: { title: '회사 소개', slug: 'hoesa-sogae' },
      [PT]: { title: 'Sobre nós', slug: 'sobre-nos' },
      [ZH]: { title: '关于我们', slug: 'guanyu-women' }
    }
  },
  {
    id: 'services',
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: { title: 'Servicios', slug: 'servicios' },
      [EN]: { title: 'Services', slug: 'services' },
      [DE]: { title: 'Dienstleistungen', slug: 'dienstleistungen' },
      [FR]: { title: 'Services', slug: 'services' },
      [IT]: { title: 'Servizi', slug: 'servizi' },
      [JA]: { title: 'サービス', slug: 'sa-bisu' },
      [KO]: { title: '서비스', slug: 'seobiseu' },
      [PT]: { title: 'Serviços', slug: 'servicos' },
      [ZH]: { title: '服务', slug: 'fuwu' }
    }
  },
  {
    id: 'projects',
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: { title: 'Proyectos', slug: 'proyectos' },
      [EN]: { title: 'Projects', slug: 'projects' },
      [DE]: { title: 'Projekte', slug: 'projekte' },
      [FR]: { title: 'Projets', slug: 'projets' },
      [IT]: { title: 'Progetti', slug: 'progetti' },
      [JA]: { title: 'プロジェクト', slug: 'purojekuto' },
      [KO]: { title: '프로젝트', slug: 'peurojekteu' },
      [PT]: { title: 'Projetos', slug: 'projetos' },
      [ZH]: { title: '项目', slug: 'xiangmu' }
    }
  },
  {
    id: 'blog',
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: { title: 'Blog', slug: 'blog' },
      [EN]: { title: 'Blog', slug: 'blog' },
      [DE]: { title: 'Blog', slug: 'blog' },
      [FR]: { title: 'Blog', slug: 'blog' },
      [IT]: { title: 'Blog', slug: 'blog' },
      [JA]: { title: 'ブログ', slug: 'burogu' },
      [KO]: { title: '블로그', slug: 'beullogeu' },
      [PT]: { title: 'Blog', slug: 'blog' },
      [ZH]: { title: '博客', slug: 'boke' }
    }
  },
  {
    id: 'contact',
    showPrincipal: true,
    showFooter: false,
    language: {
      [ES]: { title: 'Contacto', slug: 'contacto' },
      [EN]: { title: 'Contact', slug: 'contact' },
      [DE]: { title: 'Kontakt', slug: 'kontakt' },
      [FR]: { title: 'Contact', slug: 'contact' },
      [IT]: { title: 'Contatto', slug: 'contatto' },
      [JA]: { title: 'お問い合わせ', slug: 'otoiawase' },
      [KO]: { title: '연락처', slug: 'yeonrakcheo' },
      [PT]: { title: 'Contato', slug: 'contato' },
      [ZH]: { title: '联系', slug: 'lianxi' }
    }
  },
  {
    id: 'legal',
    showPrincipal: false,
    showFooter: true,
    language: {
      [ES]: {
        title: 'Área Legal',
        slug: 'area-legal',
        subPages: [
          { title: 'Libro de reclamaciones', slug: 'libro-de-reclamaciones' },
          { title: 'Términos y condiciones', slug: 'terminos-y-condiciones' },
          { title: 'Política de privacidad', slug: 'politica-de-privacidad' }
        ]
      },
      [EN]: {
        title: 'Legal Area',
        slug: 'legal-area',
        subPages: [
          { title: 'Complaints Book', slug: 'complaints-book' },
          { title: 'Terms and Conditions', slug: 'terms-and-conditions' },
          { title: 'Privacy Policy', slug: 'privacy-policy' }
        ]
      },
      [DE]: {
        title: 'Rechtsbereich',
        slug: 'rechtsbereich',
        subPages: [
          { title: 'Beschwerdebuch', slug: 'beschwerdebuch' },
          {
            title: 'Allgemeine Geschäftsbedingungen',
            slug: 'allgemeine-geschaeftsbedingungen'
          },
          { title: 'Datenschutzrichtlinie', slug: 'datenschutzrichtlinie' }
        ]
      },
      [FR]: {
        title: 'Zone Légale',
        slug: 'zone-legale',
        subPages: [
          { title: 'Livre de Réclamations', slug: 'livre-de-reclamations' },
          { title: 'Conditions Générales', slug: 'conditions-generales' },
          {
            title: 'Politique de Confidentialité',
            slug: 'politique-de-confidentialite'
          }
        ]
      },
      [IT]: {
        title: 'Area Legale',
        slug: 'area-legale',
        subPages: [
          { title: 'Libro dei Reclami', slug: 'libro-dei-reclami' },
          { title: 'Termini e Condizioni', slug: 'termini-e-condizioni' },
          { title: 'Politica sulla Privacy', slug: 'politica-sulla-privacy' }
        ]
      },
      [JA]: {
        title: '法的エリア',
        slug: 'houteki-eria',
        subPages: [
          { title: '苦情帳', slug: 'kujou-chou' },
          { title: '利用規約', slug: 'riyou-kiyaku' },
          { title: 'プライバシーポリシー', slug: 'puraibashii-porishii' }
        ]
      },
      [KO]: {
        title: '법적 영역',
        slug: 'beobjeog-yeongyeog',
        subPages: [
          { title: '불만 사항 책', slug: 'bulman-sahang-chaeg' },
          { title: '이용 약관', slug: 'iyong-yagwan' },
          { title: '개인정보 처리방침', slug: 'gaeinjeongbo-cheoribangsik' }
        ]
      },
      [PT]: {
        title: 'Área Legal',
        slug: 'area-legal',
        subPages: [
          { title: 'Livro de Reclamações', slug: 'livro-de-reclamacoes' },
          { title: 'Termos e Condições', slug: 'termos-e-condicoes' },
          { title: 'Política de Privacidade', slug: 'politica-de-privacidade' }
        ]
      },
      [ZH]: {
        title: '法律区域',
        slug: 'falv-quyu',
        subPages: [
          { title: '投诉书', slug: 'toushu-shu' },
          { title: '条款和条件', slug: 'tiaokuan-he-tiaojian' },
          { title: '隐私政策', slug: 'yin-si-zhi-ce' }
        ]
      }
    }
  }
]
