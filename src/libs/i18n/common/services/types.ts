import { TIconName } from '@Types/icons'

export interface IService {
  id: string
  title: string
  slug: string
  shortDescription: string
  description: string
  icon: TIconName
}
