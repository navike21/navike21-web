import { iconServices } from './constants'
import type { IService, IServiceItem } from './types'

export const formatServices = (services: IService[]): IServiceItem[] =>
  services.map(service => ({
    ...service,
    icon: iconServices[service.id]
  }))
