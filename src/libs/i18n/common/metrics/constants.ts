import { CompanyMetricId } from './types'

export const SUFFIX_COMPANY_METRICS = {
  [CompanyMetricId.YEARS_EXPERIENCE]: '+',
  [CompanyMetricId.PROJECTS_COMPLETED]: '+',
  [CompanyMetricId.SATISFIED_CLIENTS]: '%',
  [CompanyMetricId.COMMITMENT_TO_QUALITY]: '%'
}

export const VALUES_COMPANY_METRICS = {
  [CompanyMetricId.YEARS_EXPERIENCE]: 8,
  [CompanyMetricId.PROJECTS_COMPLETED]: 150,
  [CompanyMetricId.SATISFIED_CLIENTS]: 100,
  [CompanyMetricId.COMMITMENT_TO_QUALITY]: 100
}
