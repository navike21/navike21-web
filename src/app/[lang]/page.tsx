import { buildMetadata } from '@Seo/buildMetadata'
import HomePage from './home/HomePage'
import { Metadata } from 'next'
import { TLanguageKey } from '@Types/languages'

interface IMetadataProps {
  params: Promise<{ lang: string }>
}

export async function generateMetadata({
  params
}: IMetadataProps): Promise<Metadata> {
  const { lang } = await params
  return buildMetadata({
    lang: lang as TLanguageKey,
    title: lang === 'es' ? 'Título de Navike21' : 'Navike21 Title',
    description:
      lang === 'es'
        ? 'Descripción de Navike21 en español.'
        : 'Navike21 description in English.'
  })
}

export default function Home() {
  return <HomePage />
}
