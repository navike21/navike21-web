'use server'

import { notFound } from 'next/navigation'
import { langSupported } from '@Constants/shared'
import { TLangSupported } from '@Types/shared'
import { Metadata } from 'next'
import { seoPages } from '@Lang/pages'

type TPageProps = {
  params: {
    lang: TLangSupported
  }
}

export const generateMetadata = async ({
  params
}: TPageProps): Promise<Metadata> => seoPages[params.lang]

export default async function Page({ params }: Readonly<TPageProps>) {
  const { lang: langParams } = params
  const isValidCode = langSupported.some(lang => lang.code === langParams)

  if (!isValidCode) {
    notFound()
  }

  return <div>My Post: {langParams}</div>
}
