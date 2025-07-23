import { localeToLanguage } from '@Constants/languages'
import { SITE_NAME, URL_BASE } from '@Constants/projectInformation'
import { TLocale } from '@Types/languages'
import { Metadata } from 'next'

interface ISeoParams {
  lang: TLocale
  title: string
  description: string
}

export function buildMetadata({
  lang,
  title,
  description
}: ISeoParams): Metadata {
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      locale: localeToLanguage[lang],
      siteName: SITE_NAME,
      url: URL_BASE
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description
    }
  }
}
