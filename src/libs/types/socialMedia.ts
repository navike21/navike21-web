import { ReactNode } from 'react'
import { ISvgProps } from './svg'

export enum ESocialMedia {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedIn',
  YOUTUBE = 'youTube',
  TIKTOK = 'tikTok',
  X = 'x',
  WHATSAPP = 'whatsApp',
  TELEGRAM = 'telegram',
  GITHUB = 'github'
}

export interface ISocialMedia {
  active: boolean
  icon: (params: ISvgProps) => ReactNode
  name: string
  url: string
}

export type TSocialMediaList = {
  [key in ESocialMedia]: ISocialMedia
}
