'use server'

import { notFound } from 'next/navigation'
import { langSupported } from '@Constants/shared'
import { TLangSupported } from '@Types/shared'

type TPageProps = {
  params: {
    lang: TLangSupported
  }
}

export default async function Page({ params }: TPageProps) {
  const { lang: langParams } = params
  const isValidCode = langSupported.some(lang => lang.code === langParams)

  if (!isValidCode) {
    notFound()
  }

  return <div>My Post: {langParams}</div>
}
