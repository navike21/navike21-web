import { Metadata } from 'next'
import { COMPANY_NAME, COVER_IMAGE } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | Webentwicklung, mobile Anwendungen, kundenspezifische Software`
const DESCRIPTION =
  'Entwicklung von Webseiten, Landingpages, E-Mailings, UX/UI, mobilen Anwendungen und kundenspezifischer Software. Steigerung Ihrer Online-Präsenz.'

export const dataSeoHomeDeu: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/de`,
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
