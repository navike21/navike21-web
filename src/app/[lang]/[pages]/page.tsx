import { notFound, redirect } from 'next/navigation'
import { pages } from '@Translations/pages'
import { TLanguageKey } from '@Types/languages'
import { ABOUT_US, HOME } from '@Constants/pages'
import { Metadata } from 'next'
import { buildMetadata } from '@Seo/buildMetadata'
import { IMetaData } from '@Types/metaData'
import { AboutUs } from '@Pages/aboutUs'
import { ReactNode } from 'react'

interface IParams {
  params: Promise<{
    lang: TLanguageKey
    pages: string
  }>
}

interface IMetadataProps {
  params: Promise<{ lang: TLanguageKey; pages: string }>
}

type TPages = typeof ABOUT_US

type TPageMap = {
  [key in TPages]: ReactNode
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

  const pagesMap: TPageMap = {
    [ABOUT_US]: <AboutUs />
  }

  return (
    <>{Object.hasOwn(pagesMap, id) ? pagesMap[id as TPages] : notFound()}</>
  )
}
