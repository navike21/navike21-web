import { CompanyMetricId, type CompanyMetric } from '../types'

export const companyMetricsEs: CompanyMetric[] = [
  {
    id: CompanyMetricId.YEARS_EXPERIENCE,
    label: 'Años de experiencia'
  },
  {
    id: CompanyMetricId.PROJECTS_COMPLETED,
    label: 'Proyectos completados'
  },
  {
    id: CompanyMetricId.SATISFIED_CLIENTS,
    label: 'Clientes satisfechos'
  },
  {
    id: CompanyMetricId.COMMITMENT_TO_QUALITY,
    label: 'Compromiso con la calidad'
  }
]
