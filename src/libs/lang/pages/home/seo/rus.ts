import { Metadata } from 'next'
import { COMPANY_NAME, COVER_IMAGE } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | Разработка веб-страниц, мобильных приложений, заказного программного обеспечения`
const DESCRIPTION =
  'Разработка веб-страниц, посадочных страниц, рассылок, UX/UI, мобильных приложений и заказного программного обеспечения. Увеличение вашего онлайн-присутствия.'

export const dataSeoHomeRus: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/ru`,
    title: TITLE,
    siteName: COMPANY_NAME,
    description: TITLE,
    images: [
      {
        url: COVER_IMAGE,
        width: 800,
        height: 600,
        alt: 'navike21'
      }
    ]
  }
}
