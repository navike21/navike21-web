'use client'

import { SUPPORTED_LANGUAGES } from '@Constants/languages'
import { TLanguage } from '@Types/languages'
import { useParams, usePathname } from 'next/navigation'

export function useGetCurrentLanguage(): TLanguage | null {
  const params = useParams<{ lang?: string }>()
  const pathname = usePathname()
  const lang = params.lang

  if (lang && SUPPORTED_LANGUAGES[lang as TLanguage]) {
    return lang as TLanguage
  } else {
    const segments = pathname.split('/')
    const firstSegment = segments[1] // Assuming the language is the first segment after the root

    if (SUPPORTED_LANGUAGES[firstSegment as TLanguage]) {
      return firstSegment as TLanguage
    }
  }

  return null
}
