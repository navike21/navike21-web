import { SUPPORTED_LANGUAGES } from '@Constants/languages'
import { TLanguage } from '@Types/languages'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

interface ILangLayoutProps {
  readonly children: ReactNode
  readonly params: { readonly lang: TLanguage }
}

export default function LangLayout({ children, params }: ILangLayoutProps) {
  if (!SUPPORTED_LANGUAGES[params.lang]) {
    notFound()
  }

  return <>{children}</>
}
