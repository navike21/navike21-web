import { CONTACT_INFO } from '@Constants/contact'
import { SOCIAL_MEDIA } from '@Constants/socialMedia'
import { legalArea } from '@I18n/common/legalArea'
import { servicesList } from '@I18n/common/services'

export const useFooter = () => {
  return {
    services: servicesList['es'],
    legalArea: legalArea['es'].filter(page => page.showInFooter),
    contactInfo: Object.entries(CONTACT_INFO),
    socialMedia: SOCIAL_MEDIA.filter(({ active }) => active)
  }
}
