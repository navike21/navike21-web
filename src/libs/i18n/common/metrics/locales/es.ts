import { ECompanyMetricId, type ICompanyMetric } from '../types'

export const companyMetricsEs: ICompanyMetric[] = [
  {
    id: ECompanyMetricId.YEARS_EXPERIENCE,
    label: 'Años de experiencia'
  },
  {
    id: ECompanyMetricId.PROJECTS_COMPLETED,
    label: 'Proyectos completados'
  },
  {
    id: ECompanyMetricId.SATISFIED_CLIENTS,
    label: 'Clientes satisfechos'
  },
  {
    id: ECompanyMetricId.COMMITMENT_TO_QUALITY,
    label: 'Compromiso con la calidad'
  }
]
