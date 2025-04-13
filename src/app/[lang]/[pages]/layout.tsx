'use client'

import { useValidatePagePath } from '@Hooks/useValidatePagePath'
import { ReactNode } from 'react'

export default function PageLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  useValidatePagePath()
  return <div>{children}</div>
}
