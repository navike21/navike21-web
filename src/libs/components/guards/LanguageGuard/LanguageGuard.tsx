'use client'

import { Footer } from '@Components/molecules/Footer'
import { Header } from '@Components/molecules/Header'
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
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
