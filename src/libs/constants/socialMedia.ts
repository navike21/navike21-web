import { TIconName } from '@Types/icons'

interface ISocialMedia {
  active?: boolean
  icon: TIconName
  name: string
  url: string
}

export const SOCIAL_MEDIA: ISocialMedia[] = [
  {
    active: true,
    icon: 'RiFacebookFill',
    name: 'Facebook',
    url: 'https://www.facebook.com/navike21'
  },
  {
    active: true,
    icon: 'RiInstagramLine',
    name: 'Instagram',
    url: 'https://www.instagram.com/navike21'
  },
  {
    active: true,
    icon: 'RiYoutubeFill',
    name: 'YouTube',
    url: 'https://www.youtube.com/@navike21'
  },
  {
    active: true,
    icon: 'RiWhatsappFill',
    name: 'WhatsApp',
    url: 'https://wa.me/573013553344'
  },
  {
    active: false,
    icon: 'RiTiktokFill',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@navike21'
  },
  {
    active: false,
    icon: 'RiLinkedinFill',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/navike21'
  },
  {
    active: true,
    icon: 'RiTwitterXFill',
    name: 'X',
    url: 'https://x.com/navike21'
  },
  {
    active: false,
    icon: 'RiGithubFill',
    name: 'GitHub',
    url: 'https://github.com/navike21'
  }
]
