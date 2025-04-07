'use client'

import { LanguageGuard } from '@Components/guards/LanguageGuard/LanguageGuard'
import { ReactNode } from 'react'

export default function LangLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return <LanguageGuard>{children}</LanguageGuard>
}
