import { IMetaData } from './metaData'

export type TItemPage = {
  title: string
  slug: string
  metaData: IMetaData
  id?: string
  description?: string
}
