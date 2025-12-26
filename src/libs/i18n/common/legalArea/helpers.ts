import { LEGAL_PAGES_CONFIG } from './constants'
import type { LegalPage, LegalPageItem } from './types'

export const formatLegalPages = (legalPages: LegalPage[]): LegalPageItem[] => {
  return legalPages.map(page => {
    const config = LEGAL_PAGES_CONFIG[page.id]
    return {
      ...config.formatter(page),
      lastUpdated: config.lastUpdated,
      showInFooter: config.showInFooter
    }
  })
}
