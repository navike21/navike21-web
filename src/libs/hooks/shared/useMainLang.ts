'use client'

import { useAppSelector } from '@Store/hooks'

export const useMainLang = () => {
  const { language } = useAppSelector(({ config }) => config)

  return language
}
