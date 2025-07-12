'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { heroSection } from '@Translations/pages'

export const useHeroSection = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const {
    rotateWords,
    controlActionLink,
    controlActionText,
    description,
    principalText
  } = heroSection[currentLang]

  return {
    controlActionLink,
    rotateWords,
    controlActionText,
    description,
    principalText
  }
}
