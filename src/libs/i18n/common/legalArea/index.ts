import { ESP } from '@Constants/languages'
import { legalPagesEs } from './locales/es'
import { formatLegalPages } from './helpers'

export const legalArea = {
  [ESP]: formatLegalPages(legalPagesEs)
}
