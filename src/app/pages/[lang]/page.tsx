'use server'

import { notFound } from 'next/navigation'
import { langSupported } from '@Constants/shared'
import { TLangSupported } from '@Types/shared'
import { Metadata, ResolvingMetadata } from 'next'
import { seoPages } from '@Lang/pages'

type TPageProps = {
  params: {
    lang: TLangSupported
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export const generateMetadata = (
  { params, searchParams }: TPageProps,
  parent: ResolvingMetadata
): Metadata => {
  // read route params
  const lang = params.lang

  return seoPages[lang]
}

export default async function Page({ params, searchParams }: TPageProps) {
  const { lang: langParams } = params
  const isValidCode = langSupported.some(lang => lang.code === langParams)

  if (!isValidCode) {
    notFound()
  }

  return <div>My Post: {langParams}</div>
}
