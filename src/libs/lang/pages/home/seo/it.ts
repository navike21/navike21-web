import { Metadata } from 'next'
import { COMPANY_NAME } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | Sviluppo web, applicazioni mobile, software personalizzato`
const DESCRIPTION =
  'Sviluppo di siti web, landing page, email, UX/UI, applicazioni mobile e software personalizzato. Aumenta la tua presenza online.'

export const dataSeoHomeIta: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/it`,
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
