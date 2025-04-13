'use client'

import { ELanguage } from '@Enums/languages'
import { useOptionsBrowserStore } from '@Store/optionBrowser'
import { notFound, usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useLanguageFromPath() {
  const pathname = usePathname()
  const router = useRouter()
  const { setLanguage } = useOptionsBrowserStore()

  useEffect(() => {
    if (!pathname) return

    const pathSegment = pathname.split('/')[1]

    const isSupported = Object.values(ELanguage).includes(
      pathSegment as ELanguage
    )

    if (!isSupported) {
      notFound()
    }

    setLanguage(pathSegment as ELanguage)
  }, [pathname, router, setLanguage])
}
