import { SUPPORTED_LANGUAGES } from '@Types/languages'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

interface ILangLayoutProps {
  readonly children: ReactNode
  readonly params: { readonly lang: string }
}

export default function LangLayout({ children, params }: ILangLayoutProps) {
  if (!SUPPORTED_LANGUAGES.includes(params.lang as any)) {
    notFound()
  }

  return <>{children}</>
}
