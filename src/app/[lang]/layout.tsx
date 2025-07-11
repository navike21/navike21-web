import { SUPPORTED_LANGUAGES, TLanguage } from '@Types/languages'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

interface ILangLayoutProps {
  readonly children: ReactNode
  readonly params: { readonly lang: TLanguage }
}

export default function LangLayout({ children, params }: ILangLayoutProps) {
  if (!SUPPORTED_LANGUAGES.includes(params.lang)) {
    notFound()
  }

  return <>{children}</>
}
