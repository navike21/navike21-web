import { Metadata } from 'next'
import { TLocale } from '@Types/languages'
import { SITE_NAME, URL_BASE } from '@Constants/projectInformation'
import { localeToLanguage } from '@Constants/languages'
import { IMetaData } from '@Types/metaData'

interface ISeoParams extends IMetaData {
  lang: TLocale
}

export function buildMetadata({
  lang,
  seo,
  openGraph,
  twitter
}: ISeoParams): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: openGraph.title,
      description: openGraph.description,
      type: 'website',
      locale: localeToLanguage[lang],
      siteName: SITE_NAME,
      url: URL_BASE
    },
    twitter: {
      card: 'summary_large_image',
      title: twitter.title,
      description: twitter.description
    }
  }
}
