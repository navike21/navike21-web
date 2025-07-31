import { notFound } from 'next/navigation'
import { pages, services } from '@Translations/pages'
import { LEGAL } from '@Constants/pages'
import { buildMetadata } from '@Seo/buildMetadata'
import { Metadata } from 'next'
import { IMetaData } from '@Types/metaData'
import { TLanguageKey } from '@Types/languages'

interface IParams {
  params: Promise<{
    lang: TLanguageKey
    subPages: string
  }>
}

interface IMetadataProps {
  params: Promise<{
    lang: TLanguageKey
    subPages: string
  }>
}

function findMatchedSubPage(lang: TLanguageKey, slug: string) {
  return pages.find(
    ({ id, language }) =>
      id === LEGAL && language[lang]?.subPages?.some(sub => sub.slug === slug)
  )
}

function findMatchedService(lang: TLanguageKey, slug: string) {
  return services.find(({ language }) => language[lang]?.slug === slug)
}

export async function generateMetadata({
  params
}: IMetadataProps): Promise<Metadata> {
  const { lang, subPages: slug } = await params

  const matchedSubPage = findMatchedSubPage(lang, slug)
  const matchedService = findMatchedService(lang, slug)

  const subPageData = matchedSubPage?.language[lang]?.subPages?.find(
    ({ slug: subPageSlug }) => subPageSlug === slug
  )
  const serviceData = matchedService?.language[lang]

  const metaData = subPageData?.metaData || serviceData?.metaData

  return buildMetadata({
    ...(metaData as IMetaData),
    lang
  })
}

export default async function SubPages({ params }: Readonly<IParams>) {
  const { lang, subPages: slug } = await params

  const matchedSubPage = findMatchedSubPage(lang, slug)
  const matchedService = findMatchedService(lang, slug)

  if (!matchedSubPage && !matchedService) {
    notFound()
  }

  const subPageData = matchedSubPage?.language[lang]?.subPages?.find(
    p => p.slug === slug
  )
  const serviceData = matchedService?.language[lang]

  return (
    <div>
      {subPageData && (
        <>
          {subPageData.title} {subPageData?.id}
        </>
      )}
      {serviceData && (
        <>
          {serviceData.title} {matchedService?.id}
        </>
      )}
    </div>
  )
}
