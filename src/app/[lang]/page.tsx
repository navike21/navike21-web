import { buildMetadata } from '@Seo/buildMetadata'
import { Metadata } from 'next'
import { TLanguageKey } from '@Types/languages'
import { pages } from '@Translations/pages'
import { HOME } from '@Constants/pages'
import { IMetaData } from '@Types/metaData'
import { HomePage } from '@Pages/home'

interface IMetadataProps {
  params: Promise<{ lang: TLanguageKey }>
}

export async function generateMetadata({
  params
}: IMetadataProps): Promise<Metadata> {
  const { lang } = await params

  const page = pages.find(({ id }) => id === HOME)
  const { metaData } = page?.language[lang] ?? {}

  return buildMetadata({
    ...(metaData as IMetaData),
    lang
  })
}

export default function Home() {
  return <HomePage />
}
