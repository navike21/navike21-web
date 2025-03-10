'use-client'

import { Sora, Montserrat } from 'next/font/google'

export const fontTitle = Montserrat({
  variable: '--font-title',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
  preload: false
})

export const fontBody = Sora({
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-body',
  subsets: ['latin-ext'],
  preload: false
})
