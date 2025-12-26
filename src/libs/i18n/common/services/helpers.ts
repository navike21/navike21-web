import { ICON_SERVICES } from './constants'
import type { Service, ServiceItem } from './types'

export const formatServices = (services: Service[]): ServiceItem[] =>
  services.map(service => ({
    ...service,
    icon: ICON_SERVICES[service.id]
  }))
