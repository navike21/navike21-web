// import { SmoothScroll } from '@Components/atoms'
import { Footer, Header } from '@Components/molecules'
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

  return (
    <html lang={lang}>
      <head />
      <body>
        <Header />
        {/* <SmoothScroll> */}
          <main>{children}</main>
          <Footer />
        {/* </SmoothScroll> */}
      </body>
    </html>
  )
}
