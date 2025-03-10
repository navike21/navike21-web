'use client'

import { usePrincipalMenu } from '@Hooks/usePrincipalMenu'
import { permanentRedirect } from 'next/navigation'

export default function Home() {
  const { homeMenu } = usePrincipalMenu()
  permanentRedirect(homeMenu.path)
}
