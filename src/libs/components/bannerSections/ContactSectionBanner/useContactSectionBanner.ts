'use client'

import { youngManagerStandingUpRelieveBackPain } from '@Constants/backgroundImages'
import { ES } from '@Constants/languages'
import { CONTACT } from '@Constants/pages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { contactUsServices } from '@Translations/pages'
import { getInfoPage } from '@Utils/getInfoPage'

export const useContactSectionBanner = () => {
  const currentLang = useGetCurrentLanguage() ?? ES
  return {
    contactUs: contactUsServices[currentLang],
    contactLink: getInfoPage({ lang: currentLang, key: CONTACT }),
    imageContact: youngManagerStandingUpRelieveBackPain.lg.src
  }
}
