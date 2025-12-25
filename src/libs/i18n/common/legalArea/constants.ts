import { ELegalPageSlugs } from './types'
import {
  formatAccessibilityStatement,
  formatComplaintsBook,
  formatCookiesPolicy,
  formatDataProtection,
  formatLegalNotice,
  formatPrivacyPolicy,
  formatTermsAndConditions
} from './formatters'

export const LEGAL_PAGES_CONFIG = {
  [ELegalPageSlugs.ACCESSIBILITY_STATEMENT]: {
    lastUpdated: '2025-10-01T00:00:00.000Z',
    showInFooter: true,
    formatter: formatAccessibilityStatement
  },
  [ELegalPageSlugs.COMPLAINTS_BOOK]: {
    lastUpdated: '2025-09-15T00:00:00.000Z',
    showInFooter: false,
    formatter: formatComplaintsBook
  },
  [ELegalPageSlugs.COOKIES_POLICY]: {
    lastUpdated: '2025-09-10T00:00:00.000Z',
    showInFooter: true,
    formatter: formatCookiesPolicy
  },
  [ELegalPageSlugs.DATA_PROTECTION]: {
    lastUpdated: '2025-08-28T00:00:00.000Z',
    showInFooter: true,
    formatter: formatDataProtection
  },
  [ELegalPageSlugs.LEGAL_NOTICE]: {
    lastUpdated: '2025-07-30T00:00:00.000Z',
    showInFooter: true,
    formatter: formatLegalNotice
  },
  [ELegalPageSlugs.PRIVACY_POLICY]: {
    lastUpdated: '2025-09-05T00:00:00.000Z',
    showInFooter: true,
    formatter: formatPrivacyPolicy
  },
  [ELegalPageSlugs.TERMS_AND_CONDITIONS]: {
    lastUpdated: '2025-10-20T00:00:00.000Z',
    showInFooter: true,
    formatter: formatTermsAndConditions
  }
} as const
