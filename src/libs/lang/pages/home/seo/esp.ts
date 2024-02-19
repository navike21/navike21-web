import { Metadata } from 'next'
import { COMPANY_NAME } from '@Constants/shared'
import coverImage from '@Public/images/banner-home/website.jpg'

const TITLE = `${COMPANY_NAME} | Desarrollo web, aplicaciones móviles, software personalizado`
const DESCRIPTION =
  'Desarrollo de páginas web, landing pages, emailing, UX/UI, aplicaciones móviles y software personalizado a medida. Impulsando tu presencia en línea.'

export const dataSeoHomeEsp: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/es`,
    title: TITLE,
    siteName: COMPANY_NAME,
    description: TITLE,
    images: [
      {
        url: coverImage.src,
        width: 800,
        height: 600,
        alt: 'navike21'
      }
    ]
  }
}
