import type { StaticImageData } from 'next/image'

export type TAvatarSize = 'sm' | 'md' | 'lg'
export type TAvatarStatus = 'online' | 'offline' | 'busy' | 'away' | 'none'

export interface IAvatarProps {
  src?: string | StaticImageData
  alt?: string
  name?: string
  size?: TAvatarSize
  status?: TAvatarStatus
  className?: string
  title?: string
}
