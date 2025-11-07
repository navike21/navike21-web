import { SUFFIX_COMPANY_METRICS, VALUES_COMPANY_METRICS } from './constants'
import type { ICompanyMetric, ICompanyMetricsItem } from './types'

export const formatCompanyMetrics = (
  metrics: ICompanyMetric[]
): ICompanyMetricsItem[] =>
  metrics.map(metric => ({
    ...metric,
    suffix: SUFFIX_COMPANY_METRICS[metric.id],
    value: VALUES_COMPANY_METRICS[metric.id]
  }))
