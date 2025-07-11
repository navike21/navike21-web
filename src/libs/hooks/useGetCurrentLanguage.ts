'use client'

import { SUPPORTED_LANGUAGES } from '@Constants/languages'
import { TLanguage } from '@Types/languages'
import { useParams } from 'next/navigation'

export function useGetCurrentLanguage(): TLanguage | null {
  const params = useParams<{ lang?: string }>()
  const lang = params.lang

  if (lang && SUPPORTED_LANGUAGES[lang as TLanguage]) {
    return lang as TLanguage
  }

  return null
}
