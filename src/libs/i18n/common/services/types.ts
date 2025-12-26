import { type IconName } from '@Types/icons'

export interface Service {
  id: ServiceIds
  title: string
  slug: string
  shortDescription: string
  description: string
}

export interface ServiceItem extends Service {
  icon: IconName
}

export enum ServiceIds {
  WEB_PAGES_DEVELOPMENT = 'web-pages-development',
  SOFTWARE_DEVELOPMENT = 'software-development',
  E_COMMERCE = 'e-commerce',
  MOBILE_APPS = 'mobile-apps',
  DIGITAL_MARKETING = 'digital-marketing',
  UX_UI_DESIGN = 'ux-ui-design',
  SEO = 'seo',
  EMAIL_MARKETING = 'email-marketing'
}

export type IconServices = {
  [key in ServiceIds]: IconName
}
