import type { ILegalPage, ILegalPageItem } from './types'
import { LEGAL_PAGES_CONFIG } from './constants'
import { ELegalPageSlugs } from './types'

const baseFormat = (
  page: ILegalPage,
  slug: ELegalPageSlugs
): ILegalPageItem => ({
  ...page,
  lastUpdated: LEGAL_PAGES_CONFIG[slug].lastUpdated,
  showInFooter: LEGAL_PAGES_CONFIG[slug].showInFooter
})

export const formatAccessibilityStatement = (
  page: ILegalPage
): ILegalPageItem => baseFormat(page, ELegalPageSlugs.ACCESSIBILITY_STATEMENT)

export const formatComplaintsBook = (page: ILegalPage): ILegalPageItem =>
  baseFormat(page, ELegalPageSlugs.COMPLAINTS_BOOK)

export const formatCookiesPolicy = (page: ILegalPage): ILegalPageItem =>
  baseFormat(page, ELegalPageSlugs.COOKIES_POLICY)

export const formatDataProtection = (page: ILegalPage): ILegalPageItem =>
  baseFormat(page, ELegalPageSlugs.DATA_PROTECTION)

export const formatLegalNotice = (page: ILegalPage): ILegalPageItem =>
  baseFormat(page, ELegalPageSlugs.LEGAL_NOTICE)

export const formatPrivacyPolicy = (page: ILegalPage): ILegalPageItem =>
  baseFormat(page, ELegalPageSlugs.PRIVACY_POLICY)

export const formatTermsAndConditions = (page: ILegalPage): ILegalPageItem =>
  baseFormat(page, ELegalPageSlugs.TERMS_AND_CONDITIONS)
