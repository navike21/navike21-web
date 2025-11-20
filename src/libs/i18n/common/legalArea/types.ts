export interface ILegalPage {
  id: ELegalPageSlugs
  title: string
  slug: string
  shortDescription: string
  description: string
}

export interface ILegalPageItem extends ILegalPage {
  lastUpdated: string
  showInFooter: boolean
}

export enum ELegalPageSlugs {
  ACCESSIBILITY_STATEMENT = 'accessibility-statement',
  COMPLAINTS_BOOK = 'complaints-book',
  COOKIES_POLICY = 'cookies-policy',
  DATA_PROTECTION = 'data-protection',
  LEGAL_NOTICE = 'legal-notice',
  PRIVACY_POLICY = 'privacy-policy',
  TERMS_AND_CONDITIONS = 'terms-and-conditions'
}
