import { ESP } from '@Constants/languages'
import { companyMetricsEs } from './locales/es'
import { formatCompanyMetrics } from './helpers'

export const companyMetrics = {
  [ESP]: formatCompanyMetrics(companyMetricsEs)
}
