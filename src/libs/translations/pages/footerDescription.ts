import { DE, EN, ES, FR, IT, JA, KO, PT, ZH } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export type TFooterDescription = {
  [key in TLanguageKey]: string
}

export const footerDescription: TFooterDescription = {
  [ES]: 'Somos una empresa dedicada a la creación de software con un enfoque en la calidad.',
  [EN]: 'We are a software development company focused on quality.',
  [DE]: 'Wir sind ein Softwareentwicklungsunternehmen mit Fokus auf Qualität.',
  [FR]: 'Nous sommes une entreprise de développement de logiciels axée sur la qualité.',
  [IT]: "Siamo un'azienda di sviluppo software focalizzata sulla qualità.",
  [JA]: '私たちは品質に焦点を当てたソフトウェア開発会社です。',
  [KO]: '우리는 품질에 중점을 둔 소프트웨어 개발 회사입니다.',
  [PT]: 'Somos uma empresa de desenvolvimento de software focada na qualidade.',
  [ZH]: '我们是一家专注于质量的软件开发公司。'
}

export const allBeRightReserved: TFooterDescription = {
  [ES]: 'Todos los derechos reservados.',
  [EN]: 'All rights reserved.',
  [DE]: 'Alle Rechte vorbehalten.',
  [FR]: 'Tous droits réservés.',
  [IT]: 'Tutti i diritti riservati.',
  [JA]: '著作権所有・無断転載を禁じます。',
  [KO]: '저작권 소유. 무단 전재 및 복제를 금합니다.',
  [PT]: 'Todos os direitos reservados.',
  [ZH]: '版权所有，未经许可不得转载。'
}
