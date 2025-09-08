import { notFound, redirect } from 'next/navigation'
import { pages } from '@Translations/pages'
import { ABOUT_US, HOME, PROJECTS, SERVICES } from '@Constants/pages'
import { Metadata } from 'next'
import { buildMetadata } from '@Seo/buildMetadata'
import { AboutUs } from '@Pages/aboutUs'
import { IMetadataProps, IParams, TPageMap, TPages } from './types'
import { Services } from '@Pages/services'
import { Projects } from '@Pages/projects'
import { TLanguage } from '@Types/languages'

function findMatchPage(slug: string, lang: TLanguage) {
  return pages.find(({ language }) => language[lang].slug === slug)
}

export async function generateMetadata({
  params
}: IMetadataProps): Promise<Metadata> {
  const { lang, pages: slug } = await params

  const { language } = findMatchPage(slug, lang) ?? pages[0]
  const { metaData } = language[lang] ?? {}

  return buildMetadata({
    ...metaData,
    lang
  })
}

export default async function Pages({ params }: Readonly<IParams>) {
  const { lang, pages: slug } = await params

  const matchedPage = findMatchPage(slug, lang)

  if (!matchedPage) {
    return notFound()
  }

  if (matchedPage.id === HOME) {
    return redirect(`/${lang}/`)
  }

  const { id } = matchedPage

  const pagesMap: TPageMap = {
    [ABOUT_US]: <AboutUs />,
    [SERVICES]: <Services />,
    [PROJECTS]: <Projects />
  }

  return (
    <>{Object.hasOwn(pagesMap, id) ? pagesMap[id as TPages] : notFound()}</>
  )
}
