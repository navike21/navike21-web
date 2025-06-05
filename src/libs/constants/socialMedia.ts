import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  TikTok,
  WhatsApp,
  X,
  Youtube
} from '@Components/atoms'
import { ESocialMedia, TSocialMediaList } from '@Types/socialMedia'

export const SOCIAL_MEDIA: TSocialMediaList = {
  [ESocialMedia.FACEBOOK]: {
    active: true,
    icon: Facebook,
    name: 'Facebook',
    url: 'https://www.facebook.com/navike21'
  },
  [ESocialMedia.INSTAGRAM]: {
    active: true,
    icon: Instagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/navike21'
  },
  [ESocialMedia.LINKEDIN]: {
    active: false,
    icon: LinkedIn,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/navike21'
  },
  [ESocialMedia.X]: {
    active: true,
    icon: X,
    name: 'X',
    url: 'https://x.com/navike21'
  },
  [ESocialMedia.WHATSAPP]: {
    active: true,
    icon: WhatsApp,
    name: 'WhatsApp',
    url: 'https://wa.me/51989505027'
  },
  [ESocialMedia.YOUTUBE]: {
    active: false,
    icon: Youtube,
    name: 'YouTube',
    url: 'https://www.youtube.com/@navike21'
  },
  [ESocialMedia.TIKTOK]: {
    active: false,
    icon: TikTok,
    name: 'TikTok',
    url: 'https://www.tiktok.com/@navike21'
  },
  [ESocialMedia.TELEGRAM]: {
    active: false,
    icon: Telegram,
    name: 'Telegram',
    url: 'https://t.me/navike21'
  },
  [ESocialMedia.GITHUB]: {
    active: true,
    icon: GitHub,
    name: 'GitHub',
    url: 'https://github.com/navike21'
  }
}
