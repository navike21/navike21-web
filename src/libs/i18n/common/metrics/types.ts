export interface ICompanyMetric {
  id: ECompanyMetricId
  label: string
}

export interface ICompanyMetricsItem extends ICompanyMetric {
  value: number
  suffix: string
}

export enum ECompanyMetricId {
  YEARS_EXPERIENCE = 'yearsExperience',
  PROJECTS_COMPLETED = 'projectsCompleted',
  SATISFIED_CLIENTS = 'satisfiedClients',
  COMMITMENT_TO_QUALITY = 'CommitmentToQuality'
}
