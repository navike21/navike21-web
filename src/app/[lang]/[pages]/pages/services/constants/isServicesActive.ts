import { EService } from '@Enums/services'

type TIsServicesActive = {
  [key in EService]: boolean
}

export const isServicesActive: TIsServicesActive = {
  [EService.WEB_DEVELOPMENT]: true,
  [EService.CUSTOM_SOFTWARE]: true,
  [EService.ECOMMERCE]: true,
  [EService.MOBILE_APP]: true,
  [EService.DIGITAL_MARKETING]: true,
  [EService.EMAIL_MARKETING]: true,
  [EService.SEO]: true,
  [EService.UX_UI]: true
}
