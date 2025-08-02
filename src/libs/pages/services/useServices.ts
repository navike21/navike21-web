'use client'

import {
  womenWorkingWithPostItsSideView,
  youngManagerStandingUpRelieveBackPain
} from '@Constants/backgroundImages'
import { ES } from '@Constants/languages'
import { SERVICES } from '@Constants/pages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import {
  contactUsServices,
  heroSectionServices,
  services,
  servicesList
} from '@Translations/pages'
import { getInfoPage } from '@Utils/getInfoPage'

export const useServices = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  const { href: hrefServices } = getInfoPage({
    lang: currentLang,
    key: SERVICES
  })

  const servicesData = services.map(service => ({
    ...service,
    language: {
      ...service.language,
      [currentLang]: {
        ...service.language[currentLang],
        slug: `${hrefServices}/${service.language[currentLang].slug}`
      }
    }
  }))

  return {
    heroImage: womenWorkingWithPostItsSideView.lg.src,
    heroSectionText: heroSectionServices[currentLang],
    servicesList: servicesList[currentLang],
    currentLang,
    services: servicesData,
    contactLink: getInfoPage({ lang: currentLang, key: 'contact' }),
    contactUs: contactUsServices[currentLang],
    imageContact: youngManagerStandingUpRelieveBackPain.lg.src
  }
}
