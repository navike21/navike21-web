'use client'

import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { principalMenuTranslations } from '@Translations/principalMenu'
import { notFound, usePathname } from 'next/navigation'
import { useEffect } from 'react'

export const useValidatePagePath = () => {
  const pathname = usePathname()
  const { language } = useOptionsBrowserStore()
  const menuTranslation = principalMenuTranslations(language)

  useEffect(() => {
    if (!pathname) return

    const pathSegments = pathname.split('/')
    const isValidPath =
      pathSegments.length > 2 &&
      menuTranslation[language].some(item =>
        item.path.includes(pathSegments[2])
      )

    if (!isValidPath) {
      notFound()
    }
  }, [pathname, language, menuTranslation])
}
