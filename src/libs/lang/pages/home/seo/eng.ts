import { Metadata } from 'next'
import { COMPANY_NAME, COVER_IMAGE } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | Web development, mobile applications, custom software`
const DESCRIPTION =
  'Development of web pages, landing pages, emailing, UX/UI, mobile applications and custom software. Boosting your online presence.'

export const dataSeoHomeEng: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/en`,
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
