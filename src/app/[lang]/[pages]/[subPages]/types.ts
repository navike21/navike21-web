import {
  ECOMMERCE_SERVICES,
  EMAIL_MARKETING_SERVICES,
  MOBILE_APPS_SERVICES,
  SEO_SERVICES,
  SOFTWARE_DEVELOPMENT_SERVICES,
  UI_UX_SERVICES,
  WEB_DESIGN_SERVICES
} from '@Constants/services'
import { ReactNode } from 'react'

export type TSubPages =
  // | typeof ECOMMERCE_SERVICES
  // | typeof EMAIL_MARKETING_SERVICES
  // | typeof MOBILE_APPS_SERVICES
  // | typeof SEO_SERVICES
  // | typeof SOFTWARE_DEVELOPMENT_SERVICES
  // | typeof UI_UX_SERVICES
  typeof WEB_DESIGN_SERVICES

export type TSubPageMap = {
  [key in TSubPages]: ReactNode
}
