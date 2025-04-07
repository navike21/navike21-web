'use client'

import { ELanguage } from '@Enums/languages'
import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function useLanguageFromPath() {
  const pathname = usePathname()
  const router = useRouter()
  const setLanguage = useOptionsBrowserStore(state => state.setLanguage)

  useEffect(() => {
    if (!pathname) return

    const pathSegment = pathname.split('/')[1]

    const isSupported = Object.values(ELanguage).includes(
      pathSegment as ELanguage
    )

    if (!isSupported) {
      router.replace('/404')
      return
    }

    setLanguage(pathSegment as ELanguage)
  }, [pathname, router, setLanguage])
}
