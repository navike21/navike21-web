import { SUFFIX_COMPANY_METRICS, VALUES_COMPANY_METRICS } from './constants'
import type { CompanyMetric, CompanyMetricsItem } from './types'

export const formatCompanyMetrics = (
  metrics: CompanyMetric[]
): CompanyMetricsItem[] =>
  metrics.map(metric => ({
    ...metric,
    suffix: SUFFIX_COMPANY_METRICS[metric.id],
    value: VALUES_COMPANY_METRICS[metric.id]
  }))
