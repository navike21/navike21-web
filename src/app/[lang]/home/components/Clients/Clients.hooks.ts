'use client'

import { ES } from '@Constants/languages'
import { useGetCurrentLanguage } from '@Hooks/useGetCurrentLanguage'
import { clientsSection } from '@Translations/pages'

export const useClients = () => {
  const currentLang = useGetCurrentLanguage() ?? ES

  const { title, description, subtitle } = clientsSection[currentLang]

  return { title, description, subtitle }
}
