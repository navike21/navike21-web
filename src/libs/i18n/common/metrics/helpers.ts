import { suffixCompanyMetrics, valuesCompanyMetrics } from './consts'
import type { ICompanyMetric, ICompanyMetricsItem } from './types'

export const formatCompanyMetrics = (
  metrics: ICompanyMetric[]
): ICompanyMetricsItem[] => {
  return metrics.map(metric => ({
    ...metric,
    suffix: suffixCompanyMetrics[metric.id],
    value: valuesCompanyMetrics[metric.id]
  }))
}
