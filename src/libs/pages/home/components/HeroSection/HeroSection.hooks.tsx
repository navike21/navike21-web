'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { heroSection } from '@Translations/pages'
import { getInfoPage } from '@Utils/getInfoPage'

export const useHeroSection = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const { rotateWords, controlActionText, description, principalText } =
    heroSection[currentLang]

  const controlActionLink = getInfoPage({
    key: 'contact',
    lang: currentLang
  }).href

  return {
    controlActionLink,
    rotateWords,
    controlActionText,
    description,
    principalText
  }
}
