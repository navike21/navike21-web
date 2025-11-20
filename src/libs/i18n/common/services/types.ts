import { type TIconName } from '@Types/icons'

export interface IService {
  id: EServiceIds
  title: string
  slug: string
  shortDescription: string
  description: string
}

export interface IServiceItem extends IService {
  icon: TIconName
}

export enum EServiceIds {
  WEB_PAGES_DEVELOPMENT = 'web-pages-development',
  SOFTWARE_DEVELOPMENT = 'software-development',
  E_COMMERCE = 'e-commerce',
  MOBILE_APPS = 'mobile-apps',
  DIGITAL_MARKETING = 'digital-marketing',
  UX_UI_DESIGN = 'ux-ui-design',
  SEO = 'seo',
  EMAIL_MARKETING = 'email-marketing'
}

export type TIconServices = {
  [key in EServiceIds]: TIconName
}
