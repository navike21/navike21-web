import { ICON_SERVICES } from './constants'
import type { IService, IServiceItem } from './types'

export const formatServices = (services: IService[]): IServiceItem[] =>
  services.map(service => ({
    ...service,
    icon: ICON_SERVICES[service.id]
  }))
