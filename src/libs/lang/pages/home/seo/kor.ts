import { Metadata } from 'next'
import { COMPANY_NAME } from '@Constants/shared'

const TITLE = `${COMPANY_NAME} | 웹 개발, 모바일 애플리케이션, 맞춤형 소프트웨어`
const DESCRIPTION =
  '웹 페이지, 랜딩 페이지, 이메일, UX/UI, 모바일 애플리케이션 및 맞춤형 소프트웨어 개발. 온라인 존재감 향상.'

export const dataSeoHomeKor: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    url: `${COMPANY_NAME}/ko`,
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
