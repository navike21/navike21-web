import { Metadata } from 'next'
import { COMPANY_NAME } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | Desenvolvimento web, aplicativos móveis, software personalizado`
const DESCRIPTION =
  'Desenvolvimento de páginas web, landing pages, emailing, UX/UI, aplicativos móveis e software personalizado. Aumentando sua presença online.'

export const dataSeoHomePor: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/pt`,
    title: TITLE,
    siteName: COMPANY_NAME,
    description: TITLE,
    images: [
      {
        url: '/cover.png',
        width: 800,
        height: 600,
        alt: 'navike21'
      }
    ]
  }
}
