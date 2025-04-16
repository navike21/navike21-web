import { EService } from '@Enums/services'
import { TMenuItem } from '@Translations/principalMenu'
import { TServicesTranslations } from './servicesTranslations.types'
import { customSoftwareServiceEs } from './listServices/customSoftware'
import { digitalMarketingEs } from './listServices/digitalMarketing'
import { webDevelopmentEs } from './listServices/webDevelopment'
import { ecommerceEs } from './listServices/ecommerce'
import { emailingEs } from './listServices/emailing'
import { mobileAppEs } from './listServices/mobileApp'
import { seoEs } from './listServices/seo'
import { uxUiEs } from './listServices/uxUi'

export const servicesTranslationsEs = (
  servicesMenu: TMenuItem,
  coverImage: string
): TServicesTranslations => ({
  [EService.CUSTOM_SOFTWARE]: customSoftwareServiceEs(servicesMenu, coverImage),
  [EService.DIGITAL_MARKETING]: digitalMarketingEs(servicesMenu, coverImage),
  [EService.ECOMMERCE]: ecommerceEs(servicesMenu, coverImage),
  [EService.EMAIL_MARKETING]: emailingEs(servicesMenu, coverImage),
  [EService.MOBILE_APP]: mobileAppEs(servicesMenu, coverImage),
  [EService.SEO]: seoEs(servicesMenu, coverImage),
  [EService.UX_UI]: uxUiEs(servicesMenu, coverImage),
  [EService.WEB_DEVELOPMENT]: webDevelopmentEs(servicesMenu, coverImage)
})
