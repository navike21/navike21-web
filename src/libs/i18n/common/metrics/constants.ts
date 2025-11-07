import { ECompanyMetricId } from './types'

export const SUFFIX_COMPANY_METRICS = {
  [ECompanyMetricId.YEARS_EXPERIENCE]: '+',
  [ECompanyMetricId.PROJECTS_COMPLETED]: '+',
  [ECompanyMetricId.SATISFIED_CLIENTS]: '%',
  [ECompanyMetricId.COMMITMENT_TO_QUALITY]: '%'
}

export const VALUES_COMPANY_METRICS = {
  [ECompanyMetricId.YEARS_EXPERIENCE]: 8,
  [ECompanyMetricId.PROJECTS_COMPLETED]: 150,
  [ECompanyMetricId.SATISFIED_CLIENTS]: 100,
  [ECompanyMetricId.COMMITMENT_TO_QUALITY]: 100
}
