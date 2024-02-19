'use client'

import { permanentRedirect } from 'next/navigation'
import { useMainLang } from '@Hooks/shared'

export default function Home() {
  const lang = useMainLang()
  permanentRedirect(`/${lang}`)
}
