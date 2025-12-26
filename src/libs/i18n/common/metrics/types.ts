export interface CompanyMetric {
  id: CompanyMetricId
  label: string
}

export interface CompanyMetricsItem extends CompanyMetric {
  value: number
  suffix: string
}

export enum CompanyMetricId {
  YEARS_EXPERIENCE = 'yearsExperience',
  PROJECTS_COMPLETED = 'projectsCompleted',
  SATISFIED_CLIENTS = 'satisfiedClients',
  COMMITMENT_TO_QUALITY = 'CommitmentToQuality'
}
