'use client'

import { useOptionsBrowserStore } from '@Store/optionBrowser/optionBrowser.hook'
import { permanentRedirect } from 'next/navigation'

export default function Home() {
  const { language } = useOptionsBrowserStore()
  permanentRedirect(`/${language}`)
}
