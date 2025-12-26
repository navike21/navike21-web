import type { StaticImageData } from 'next/image'

export type AvatarSize = 'sm' | 'md' | 'lg'
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none'

export interface AvatarProps {
  src?: string | StaticImageData
  alt?: string
  name?: string
  size?: AvatarSize
  status?: AvatarStatus
  className?: string
  title?: string
}
