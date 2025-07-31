import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ES, SUPPORTED_LANGUAGES } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export default async function RootPage() {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language')

  const parseAcceptLanguage = (header: string | null): TLanguageKey => {
    if (!header || typeof header !== 'string') return ES
    const primaryLang = header.split(',')[0]?.split('-')[0]?.trim()
    const supportedKeys = Object.keys(SUPPORTED_LANGUAGES) as TLanguageKey[]
    return supportedKeys.includes(primaryLang as TLanguageKey)
      ? (primaryLang as TLanguageKey)
      : ES
  }

  const langToUse: TLanguageKey = parseAcceptLanguage(acceptLanguage)
  redirect(`/${langToUse}/`)
}
