import { Metadata } from 'next'
import { COMPANY_NAME, COVER_IMAGE } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | Développement web, applications mobiles, logiciels sur mesure`
const DESCRIPTION =
  'Développement de sites web, landing pages, emailing, UX/UI, applications mobiles et logiciels sur mesure. Augmenter votre présence en ligne.'

export const dataSeoHomeFra: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/fr`,
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
