'use client'

import { LoadingScreen } from '@Components/molecules/LoadingScreen/LoadingScreen'
import { useLanguageFromPath } from '@Hooks/useLanguageFromPath'
import { ReactNode, useEffect, useState } from 'react'

export function LanguageGuard({ children }: Readonly<{ children: ReactNode }>) {
  const [hasHydrated, setHasHydrated] = useState(false)

  useEffect(() => {
    setHasHydrated(true)
  }, [])

  useLanguageFromPath()

  if (!hasHydrated) {
    return <LoadingScreen />
  }
  return <>{children}</>
}
