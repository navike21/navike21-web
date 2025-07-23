import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { ES, SUPPORTED_LANGUAGES } from '@Constants/languages'
import { TLanguageKey } from '@Types/languages'

export default async function RootPage() {
  const headersList = await headers()
  const acceptLanguage = headersList.get('accept-language')

  const browserLang = acceptLanguage?.split(',')[0].split('-')[0] ?? ES

  const supportedKeys = Object.keys(SUPPORTED_LANGUAGES) as TLanguageKey[]

  const langToUse: TLanguageKey = supportedKeys.includes(
    browserLang as TLanguageKey
  )
    ? (browserLang as TLanguageKey)
    : ES

  redirect(`/${langToUse}/`)
}
