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
    icon: ({ ...props }) => <Facebook {...props} />,
    name: 'Facebook',
    url: 'https://www.facebook.com/navike21'
  },
  [ESocialMedia.INSTAGRAM]: {
    active: true,
    icon: ({ ...props }) => <Instagram {...props} />,
    name: 'Instagram',
    url: 'https://www.instagram.com/navike21'
  },
  [ESocialMedia.LINKEDIN]: {
    active: false,
    icon: ({ ...props }) => <LinkedIn {...props} />,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/navike21'
  },
  [ESocialMedia.X]: {
    active: true,
    icon: ({ ...props }) => <X {...props} />,
    name: 'X',
    url: 'https://x.com/navike21'
  },
  [ESocialMedia.WHATSAPP]: {
    active: true,
    icon: ({ ...props }) => <WhatsApp {...props} />,
    name: 'WhatsApp',
    url: 'https://wa.me/51989505027'
  },
  [ESocialMedia.YOUTUBE]: {
    active: false,
    icon: ({ ...props }) => <Youtube {...props} />,
    name: 'YouTube',
    url: 'https://www.youtube.com/@navike21'
  },
  [ESocialMedia.TIKTOK]: {
    active: false,
    icon: ({ ...props }) => <TikTok {...props} />,
    name: 'TikTok',
    url: 'https://www.tiktok.com/@navike21'
  },
  [ESocialMedia.TELEGRAM]: {
    active: false,
    icon: ({ ...props }) => <Telegram {...props} />,
    name: 'Telegram',
    url: 'https://t.me/navike21'
  },
  [ESocialMedia.GITHUB]: {
    active: true,
    icon: ({ ...props }) => <GitHub {...props} />,
    name: 'GitHub',
    url: 'https://github.com/navike21'
  }
}
