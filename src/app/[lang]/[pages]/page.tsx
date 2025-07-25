import { notFound, redirect } from 'next/navigation'
import { pages } from '@Translations/pages'
import { TLanguageKey } from '@Types/languages'
import { HOME } from '@Constants/pages'
import { Metadata } from 'next'
import { buildMetadata } from '@Seo/buildMetadata'
import { IMetaData } from '@Types/metaData'

interface IParams {
  params: Promise<{
    lang: TLanguageKey
    pages: string
  }>
}

interface IMetadataProps {
  params: Promise<{ lang: TLanguageKey; pages: string }>
}

export async function generateMetadata({
  params
}: IMetadataProps): Promise<Metadata> {
  const { lang, pages: slug } = await params

  const page = pages.find(({ language }) => language[lang].slug === slug)
  const { metaData } = page?.language[lang] ?? {}

  return buildMetadata({
    ...(metaData as IMetaData),
    lang
  })
}

export default async function Pages({ params }: Readonly<IParams>) {
  const { lang, pages: slug } = await params

  const matchedPage = pages.find(
    ({ language }) => language[lang]?.slug === slug
  )

  if (!matchedPage) {
    notFound()
  }

  if (matchedPage.id === HOME) {
    redirect(`/${lang}/`)
  }

  const { id } = matchedPage

  return (
    <div>
      {matchedPage.language[lang].title} {id}
    </div>
  )
}
