import { CONTACT_INFO } from '@Constants/contact'
import { SOCIAL_MEDIA } from '@Constants/socialMedia'
import { footerInformation } from '@I18n/common/footer'
import { legalArea } from '@I18n/common/legalArea'
import { servicesList } from '@I18n/common/services'

export const useFooter = () => {
  const {
    textFooter,
    servicesTitle,
    legalAreaTitle,
    contactTitle,
    rightsReserved
  } = footerInformation['es']
  return {
    structure: {
      textFooter,
      servicesTitle,
      legalAreaTitle,
      contactTitle,
      rightsReserved
    },
    itemsInformation: {
      services: servicesList['es'],
      legalArea: legalArea['es'].filter(page => page.showInFooter),
      contactInfo: CONTACT_INFO,
      socialMedia: SOCIAL_MEDIA.filter(({ active }) => active)
    }
  }
}
