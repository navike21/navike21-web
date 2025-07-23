import { notFound, redirect } from 'next/navigation'
import { pages } from '@Translations/pages'
import { TLanguageKey } from '@Types/languages'
import { HOME } from '@Constants/pages'

interface IParams {
  params: Promise<{
    lang: TLanguageKey
    pages: string
  }>
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
