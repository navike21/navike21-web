'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { getInfoPage } from '@Utils/getInfoPage'
import { services, servicesSection } from '@Translations/pages'

export const useServices = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  const { href: hrefServices } = getInfoPage({
    lang: currentLang,
    key: 'services'
  })

  const servicesData = services.map(service => ({
    ...service,
    language: {
      ...service.language,
      [currentLang]: {
        ...service.language[currentLang],
        slug: `.${hrefServices}/${service.language[currentLang].slug}`
      }
    }
  }))

  const { title, subtitle } = servicesSection[currentLang]

  return {
    currentLang,
    services: servicesData,
    title,
    subtitle
  }
}
