import { buildMetadata } from '@Seo/buildMetadata'
import HomePage from './home/HomePage'
import { Metadata } from 'next'
import { TLanguageKey } from '@Types/languages'
import { pages } from '@Translations/pages'
import { HOME } from '@Constants/pages'
import { IMetaData } from '@Types/metaData'

interface IMetadataProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params
}: IMetadataProps): Promise<Metadata> {
  const { lang } = await params

  const language = lang as TLanguageKey

  const page = pages.find(({ id }) => id === HOME)
  const { metaData } = page?.language[language] ?? {}

  return buildMetadata({
    ...(metaData as IMetaData),
    lang: language
  })
}

export default function Home() {
  return <HomePage />
}
