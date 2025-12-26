import { LegalPageSlugs, type LegalPage } from './types'
import {
  formatAccessibilityStatement,
  formatComplaintsBook,
  formatCookiesPolicy,
  formatDataProtection,
  formatLegalNotice,
  formatPrivacyPolicy,
  formatTermsAndConditions
} from './formatters'

type LegalPageConfigItem = {
  lastUpdated: string
  showInFooter: boolean
  formatter: (page: LegalPage) => LegalPage
}

export const LEGAL_PAGES_CONFIG = {
  [LegalPageSlugs.ACCESSIBILITY_STATEMENT]: {
    lastUpdated: '2025-10-01T00:00:00.000Z',
    showInFooter: true,
    formatter: formatAccessibilityStatement
  },
  [LegalPageSlugs.COMPLAINTS_BOOK]: {
    lastUpdated: '2025-09-15T00:00:00.000Z',
    showInFooter: false,
    formatter: formatComplaintsBook
  },
  [LegalPageSlugs.COOKIES_POLICY]: {
    lastUpdated: '2025-09-10T00:00:00.000Z',
    showInFooter: true,
    formatter: formatCookiesPolicy
  },
  [LegalPageSlugs.DATA_PROTECTION]: {
    lastUpdated: '2025-08-28T00:00:00.000Z',
    showInFooter: true,
    formatter: formatDataProtection
  },
  [LegalPageSlugs.LEGAL_NOTICE]: {
    lastUpdated: '2025-07-30T00:00:00.000Z',
    showInFooter: true,
    formatter: formatLegalNotice
  },
  [LegalPageSlugs.PRIVACY_POLICY]: {
    lastUpdated: '2025-09-05T00:00:00.000Z',
    showInFooter: true,
    formatter: formatPrivacyPolicy
  },
  [LegalPageSlugs.TERMS_AND_CONDITIONS]: {
    lastUpdated: '2025-10-20T00:00:00.000Z',
    showInFooter: true,
    formatter: formatTermsAndConditions
  }
} satisfies Record<LegalPageSlugs, LegalPageConfigItem>
