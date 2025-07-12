import { SUPPORTED_LANGUAGES } from '@Constants/languages'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

interface ILangLayoutProps {
  children: ReactNode
  params: Promise<{ lang: string }>
}

export default async function LangLayout({
  children,
  params
}: Readonly<ILangLayoutProps>) {
  const { lang } = await params
  if (!Object.hasOwn(SUPPORTED_LANGUAGES, lang)) {
    notFound()
  }
  return <>{children}</>
}
